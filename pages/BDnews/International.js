import {useState} from 'react';
import { useResultContext } from '../../Contexts/ResultContextProvider';
import axios from 'axios';
import moment from 'moment';
import { useRouter } from 'next/dist/client/router';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Pagination from '../../Components/Pagination';
import Head from 'next/head';



const International = ({Data}) => {

    const {bdNewsData,setBdNewsData,setCopied,setSumText} = useResultContext();
    setBdNewsData(Data);

    const router = useRouter()

    const handleCopy = () => {
      
      router.push('/Summarize')
      setCopied(true)
    }
   
 
    {/* Pagination algo*/}
const [currentPage, setCurrentPage] = useState(1);
const [postsPerPage] = useState(10);

const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const paginatedData = bdNewsData.slice(indexOfFirstPost, indexOfLastPost);

const paginate = pageNumber => setCurrentPage(pageNumber);


  return (
    <>
       <Head>
      <title>BD News || International </title>
      <meta name="description" content="Get the latest news of Bangladesh from the reputed News Journals around the world and summarize them in seconds with our summarizer tool.."/>
      <meta name="keywords" content="news bd 24,news for bangladesh,Bangladesh news, Bangla News,BD News,NewsBd,bangladesh english news, bangladesh english newspaper,english newspaper bangladesh,summary,summarize news,all bangladesh english news,bangladesh international news"/>
      <meta name="author" content="Nuren Shams Chowdhury"/>
      </Head>
       <div className='row intmain '>
        <div className=' '> 
        <div className='intMainTitle'>
          <h2 className='MainPageTitle text-secondary d-flex m-3 justify-content-center align-items-center'>
            News Of Bangladesh In International Media
          </h2>
        </div>
        </div>
      </div>
      <hr className='text-muted'/>
      <div className=''>
     
      
        
      </div>
      <hr className='text-muted'/>

      
        <div>
        {
                      paginatedData.map((data)=>(
                        <div className='card col-12' key={data.title}>
                          <div className='content '>
                            <div className='col-md-12  d-md-flex '>
                            <div className='col-md-4 col-12 d-md-flex justify-content-center align-items-center'>
                            <img className='bdIntImage rounded' src={data.urlToImage}  alt={data.title}  />

                            </div>
                            <div className='col-md-8 col-12'>
                            <div className='bdInt'>
                                <div >
                                <h4 className='bdInTitle fontFat mb-2 d-flex justify-content-center align-items-center'>{data.title}</h4>
                                <p className='bdInDesc'>{data.description}. . . . .</p>
                               

                                </div>
                                
    
                                {
                              
                                  <div className='bdIntSource'>
                                    <div className='d-md-flex d-flex justify-content-center align-items-center'>
                                    <p> {moment(data.publishedAt).fromNow()} by </p>
                                  
                                    </div>
                                    
                                    <div className='d-md-flex d-flex justify-content-center align-items-center'>
                                        <p>{data?.source.name}</p>
                                    </div>

                                  </div>
                                    
                                    
                                }

                            </div>
                            <div className='row'>
                                      
                                      <CopyToClipboard text={data.url} onCopy={handleCopy}>
                                        <div className='col-12 col-md-6 d-md-flex d-flex justify-content-center'>
                                        <button onClick={() => {setSumText(data.url) ; setCopied(true)}} className='CopyButton btn d-flex  mx-2 px-5'>Copy Link to Summarize</button>
                                        </div>
    
                                        </CopyToClipboard>
                                      
                                 
                              <div className=' col-12 col-md-6 d-flex d-md-flex justify-content-center'>
                              <a target="_blank" rel="noreferrer" className='CopyButton btn mx-2 px-5' href={data.url}>Go To Link</a>


                              </div>
                               </div>






                            </div>

                            </div>
                           
                            
                          
                           
                               
                            
                          <hr className='text-muted'/>
                
                
                            

                          </div>
                            

                        </div>
                         
                        ))}
                     
                        <div className='mt-3'>
                        <div className='pagination  d-flex flex-wrap justify-content-center alig-items-center'>
                                  <Pagination
                                          postsPerPage={postsPerPage}
                                         totalPosts={bdNewsData.length}
                                           paginate={paginate}
                                    />

                </div>

                        </div>
                        
                        
        </div>
    </>
  )
}

export default International;






export async function getServerSideProps(context) {
 
    const Res = await axios('https://newsapi.org/v2/everything?q=Bangladesh&language=en&searchIn=title&excludeDomains=dhakatribune.com,thedailystar.net,tbsnews.net,newagebd.net,thefinancialexpress.com.bd,daily-sun.com,observerbd.com,bdnews24.com,business-standard.com,risingbd.com,prothomalo.com,sylhetmirror.com,newsnextbd.com&sortBy=publishedAt&apiKey=e61b96af15684d79b5b13f0a12b6ec0c')
      const data = Res.data.articles;
    return {
      props: {Data : data},
    }
  }