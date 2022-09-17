import {useState} from 'react';

import { useResultContext } from '../../Contexts/ResultContextProvider';
import axios from 'axios';
import moment from 'moment';
import { useRouter } from 'next/router';
import Pagination from '../../Components/Pagination';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import {FaAngleDown} from 'react-icons/fa';
import { IconContext } from "react-icons";
import Head from 'next/head';




const Category = ({Data,Category}) => {
    const {catData, setCatData,setCopied,setSumText} = useResultContext();
    const [cat,setCat] = useState('')
    setCatData(Data);
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`/TopNews/${cat}`)

    }
   
    const handleCopy = () => {
      setCopied(true);
      router.push('/Summarize')
    }

   
   

    {/* Pagination algo*/}
const [currentPage, setCurrentPage] = useState(1);
const [postsPerPage] = useState(8);

const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const paginatedData = catData.slice(indexOfFirstPost, indexOfLastPost);

const paginate = pageNumber => setCurrentPage(pageNumber);


{/*src={res?.image?.thumbnail.contentUrl} */}

  return (
    <div>
      <Head>
        <title>World News</title>
        <meta name="description" content="Get and summarize the latest headlines on politics, business, sports, entertainment, technology, science, and more."/>
        <meta name="keywords" content="world news today,latest world news,world news bangla
,world news of today,world news for today,world news today,world newspaper
,World News, current news, news, category, sumnews,sumnewsbd" />
      </Head>
        <section>
        <div className='row '>
        <div className=' col-md-12'> 
        <div className='MainPageTitle'>
          <h2 className=' d-flex justify-content-center align-items-center'>
            category wise  Latest News Around the world 
          </h2>
        </div>
        </div>
      </div>
      <hr className='text-muted'/>
        <div className='firtpart card'>
            <div className='row m-2'>
            <div className='col-md-12'>
      <div className=' d-block '>
        
        <h6 className='OptionTitle d-flex justify-content-center align-items-center mb-4 mt-3'>Change the category to see top news of that category</h6>
        <form className=' form-group d-flex justify-content-center align-items-center' onSubmit={handleSubmit}>
            <label>
            <div className='mb-3 '>Select the category   <IconContext.Provider value={{className:"fa-bounce"}}> <FaAngleDown/></IconContext.Provider> </div>
            <select className='form-control SelectOption' value={cat} onChange={(e) => setCat(e.target.value)}>
            <option value='World'>World News</option>
            <option value="World_Asia">-Asia</option>
            <option value="World_Europe">-Europe</option>
            <option value="World_MiddleEast">-Middle East</option>
            <option value="World_Americas">-America</option>
            <option value="Politics">Politics</option>
            <option value='Sports'>Sports</option>
            <option value="Sports_Soccer">-Football</option>
            

            <option value='Business'>Business</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Entertainment_MovieAndTV">-Movie and TV</option>
            <option value="Entertainment_Music">-Music</option>

            <option value="Health">Health</option>
            <option value="ScienceAndTechnology">Science and Tech</option>
            <option value="Science">-Science</option>
            <option value="Technology">-Technology</option>
         


          </select>
          <button className='btn CopyButton mt-2' type='submit'>Submit</button>
          </label>
          </form>
          </div>
      </div>
            </div>
        </div>
      <hr className='text-muted'/>


        </section>
        
        <div className='catNameMain'>
      <div className=''>
        <p className='d-flex justify-content-center align-items-center text-secondary cCat'>Current Category</p>
        <div className='categoryName'>
        <div className='d-flex justify-content-center align-items-center cCat2'>

        <h1>{Category}</h1>
        </div>
       </div>
      </div>

      </div>
      <hr className='text-muted'/>

      
      <hr className='text-muted'/>

        <section>
        <div className=''>

          {paginatedData ? 
      <div className='row'>
            
            { 
             paginatedData.map((res) =>(
          


                <div key={res.name}  className=' mt-5 card col-md-12 col-12'>
                  <div key={res.name}  className='d-md-flex m-3 '>
                  <div className='col-md-4 col-12 d-flex justify-content-center align-items-center'>
               
                <img className='WorldImage ' src={res?.image?.thumbnail.contentUrl}   alt={res.name} />


                
                    
                 </div>
                 
                 <div className='col-md-8 col-12'>
                    <div>
                    <h4 className='nationalTitle fontFat mb-2 d-flex justify-content-center align-items-center'>{res.name}</h4>
                    </div>
                    <div>
                      <p>{res.description}.....</p>
                    </div>
                    <div className='catSource d-flex justify-content-center align-items-center'>
                      <div className='d-block '>
                      <div className='d-flex justify-content-center align-items-center' >{moment(res.datePublished).fromNow()}</div>
                       
                       {
                           res.provider.map((hes)=>(
                             <div key={hes.name}> 
                                    <h6>by {hes.name}</h6>
                                <div className='d-flex justify-content-center align-items-center'>
                                <img className='catSrcImage'  src={hes?.image?.thumbnail.contentUrl} alt={hes.name} />

                                </div>
                                   
                             </div>
                               
                           ))
                       }


                      </div>
                  
                      
                    </div>
                      
                
                    <div className='row'>
                                      
                                      <CopyToClipboard text={res.url} onCopy={handleCopy}>
                                        <div className='col-12 col-md-6 d-md-flex d-flex justify-content-center'>
                                        <button onClick={() => setSumText(res.url)} className='btn d-flex CopyButton mx-2 px-5'>Copy Link to Summarize</button>
                                        </div>
    
                                        </CopyToClipboard>
                                      
                                 
                              <div className=' col-12 col-md-6 d-flex d-md-flex justify-content-center'>
                              <a target="_blank" rel="noreferrer" className=' btn  CopyButton mx-2 px-5' href={res.url}>Go To Link</a>


                              </div>
                               </div>

                  </div> 

                  </div>
               
               
                
            <hr />
            
             
             </div>
             
             


             
    ))}
            </div> : <h2>Loading</h2> }
            
             
            
            <hr className='text-muted' />
           
            <div className='row'>
              <div className='col-md-12'>
              <div className='pagination mt-3 d-flex justify-content-center align-items-center'>
             <Pagination
                  postsPerPage={postsPerPage}
                   totalPosts={catData.length}
                   paginate={paginate}
               />

             </div>

              </div>
            </div>
            
            
            

      </div>
        </section>


    </div>
  )
}

export default Category

export async function getServerSideProps(context) {
    const {params} = context;
    const {Category} = params;
    const res = await axios({
        method: 'GET',
  url: 'https://bing-news-search1.p.rapidapi.com/news',
  params: {category: `${Category}`, mkt: 'en-US', safeSearch: 'Off', textFormat: 'Raw',sortBy : 'Relevance'},
  headers: {
  'X-BingApis-SDK': 'true',
  'X-RapidAPI-Key': '3c84603cf9msh4143e6aff6a8074p1c4935jsnf23b029efa30',
  'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  }
    })
    const Data = res.data.value;
  
    return {
      props: {Data : Data,Category:Category},
    }
  }