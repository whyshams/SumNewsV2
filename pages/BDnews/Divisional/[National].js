import {useState} from 'react'
import axios from 'axios';
import moment from 'moment';
import {useRouter} from 'next/router'
import { useResultContext } from '../../../Contexts/ResultContextProvider';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Pagination from '../../../Components/Pagination';
import {FaAngleDown} from 'react-icons/fa';
import { IconContext } from "react-icons";
import Head from 'next/head';





const National = ({Data,National}) => {
  const router = useRouter();
const {bdNewsDataDiv,setBdNewsDataDiv,setCopied,setSumText} = useResultContext();


    const [divText,setDivText] = useState('');
    const handleCopy = () => {
      setCopied(true)
      router.push('/Summarize')
    }
  

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`/BDnews/Divisional/${divText}`);
        
    }
    
  
    setBdNewsDataDiv(Data)

   
         {/* Pagination algo*/}
const [currentPage, setCurrentPage] = useState(1);
const [postsPerPage] = useState(8);

const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const paginatedData = bdNewsDataDiv.slice(indexOfFirstPost, indexOfLastPost);

const paginate = pageNumber => setCurrentPage(pageNumber);
    

  return (
    <>
       <Head>
      <title>BD News || Divisional </title>
      <meta name="description" content="Get Division wise News Of Bangladesh from the reputed English Newspaper of the country and summarize them in seconds with our summarizer tool..."/>
      <meta name="keywords" content="Bangladesh news,Bangladesh division news,bd division news, Bangla News,BD News,NewsBd,bangladesh english news, bangladesh english newspaper,english newspaper bangladesh,summary,summarize news,all bangladesh english news"/>
      <meta name="author" content="Nuren Shams Chowdhury"/>
      </Head>
      <div className=' mt-3 row '>
        <div className=' col-md-12'> 
        <div className='MainPageTitle'>
          <h2 className=' d-flex justify-content-center align-items-center'>
            Division wise news of bangladesh from local english news media 
          </h2>
        </div>
        </div>
      </div>
      <hr className='text-muted'/>
      <div className='bdCatFirstPart card'>
      <div className='row'>
            <div className='col-md-12'>
      <div className='b-block'>
        <div className='m-2'>
        
        <h6 className='OptionTitle d-flex justify-content-center align-items-center mb-4 mt-3'>Change the Division to see top news of last Week</h6>
        <form className='form-group d-flex justify-content-center align-items-center' onSubmit={handleSubmit}>
            <label className='d-block'>
            <div className='mb-3 '>Select the category   <IconContext.Provider value={{className:"fa-bounce"}}> <FaAngleDown/></IconContext.Provider> </div>
            <select className='form-control SelectOption' value={divText} onChange={(e) => setDivText(e.target.value)}>
            <option value='Dhaka'>Dhaka</option>
            <option value='Chittagong'>Chottogram</option>
            <option value='Khulna'>Khulna</option>
            <option value='Rajshahi'>Rajshahi</option>
            <option value='Barisal'>Barishal</option>
            <option value='Sylhet'>Sylhet</option>
            <option value='Mymensingh'>Mymensingh</option>
            <option value='Rangpur'>Rangpur</option>
            <option value='Noakhali'>Noakhali</option>
            
            </select>
          <button className='btn CopyButton mt-3' type='submit'>Submit</button>


            </label>
       

        </form>
        </div>
        
          </div>
      </div>
      
            </div>
      </div>
      <hr className='text-muted'/>

      <div className='catNameMain'>
      <div className=''>
        <p className='d-flex justify-content-center align-items-center text-secondary cCat'>Current Division</p>
        <div className='categoryName'>
        <div className='d-flex justify-content-center align-items-center cCat2'>

        <h1>{National.toUpperCase()}</h1>
        </div>
       </div>
      </div>

      </div>
      <hr className='text-muted'/>

      
        
      <hr className='text-muted'/>

    
      <div className='bdNatSecond'>

   
     
     
      {
    paginatedData.map((data)=>(
      <div key={data.title} className='card col-12'>
        <div  className='row col-md-12 '>
        <div className='col-md-4 col-12'>
          
          <img className='rounded nationalImage ' src={data.media} alt={data.title}/>

        </div>
        <div className='col-md-8 '>
        <div className='col-12 nationalContent'>
          <h3 className='nationalTitle fontFat d-flex justify-content-center align-items-center mb-2'>{data.title}</h3>
          
          <div><p className='nationalSummary'><strong>Summary :</strong> {data.summary}</p></div>

          <div className='d-block'>
            <h5 className='  d-flex justify-content-center align-items-center' >{moment(data.published_date).fromNow()}</h5> 
            <div className=' d-flex justify-content-center align-items-center'>
            <h6 >by </h6>

            </div>
            <div className='d-flex justify-content-center align-items-center'>
            <p>{data.rights.toUpperCase()}</p>
            </div>
          </div>
           
          
          <div className='row'>
                                      
                                      <CopyToClipboard text={data.link} onCopy={handleCopy}>
                                        <div className='col-12 col-md-6 d-md-flex d-flex justify-content-center'>
                                        <button onClick={() => setSumText(data.link)} className='btn d-flex CopyButton mx-2 px-5'>Copy Link to Summarize</button>
                                        </div>
    
                                        </CopyToClipboard>
                                      
                                 
                              <div className=' col-12 col-md-6 d-flex d-md-flex justify-content-center'>
                              <a target="_blank" rel="noreferrer" className=' btn  CopyButton mx-2 px-5' href={data.link}>Go To Link</a>


                              </div>
                               </div>

        <hr/>

          </div>


        </div>

</div>

      </div>
      
        
       
    ))}
      
      <hr className='text-muted'/>

   <div className='col-md-12'>
                        <div className='pagination mt-3 d-flex justify-content-center mt-3 align-items-center'>
                <Pagination
                     postsPerPage={postsPerPage}
                      totalPosts={Data.length}
                      paginate={paginate}
                  />

                </div>

                        </div>
                        <hr className='text-muted' />
                     
      

     
      </div>

       
    </>
  )
}


export default National


export async function getServerSideProps(context) {
    const {params} = context
    const {National} = params 
    const res = await axios({
      method: 'GET',
      url: 'https://newscatcher.p.rapidapi.com/v1/search',
      params: {
        q: `${National}`,
        lang: 'en',
        sort_by: 'date',
        country: 'BD',
        sources: 'dhakatribune.com,thedailystar.net,tbsnews.net,newagebd.net,thefinancialexpress.com.bd,daily-sun.com,observerbd.com,bdnews24.com,business-standard.com,risingbd.com,prothomalo.com,dhakapost.com',
        
        media: 'True'
      },
      headers: {
        'X-RapidAPI-Key': '35e963e80bmsh91a17eb329bdacap11ef20jsn978398e6e697',
        'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com'
      }
  
      })
      
      const data = res.data.articles;
      
    return {
      props: {Data : data, National},
    }
  }

