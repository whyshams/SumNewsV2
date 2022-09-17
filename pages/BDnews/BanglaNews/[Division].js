import {useState} from 'react';
import Pagination from '../../../components/Pagination';
import { useRouter } from 'next/router';
import axios from 'axios';
import moment from 'moment';
import {FaAngleDown} from 'react-icons/fa';
import { IconContext } from "react-icons";
import Head from 'next/head';







const Division = ({Data,Division}) => {
    
    const[banglaText,setBanglaText] = useState();
    
    
    

    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`/BanglaNews/${banglaText}`)

    }

 


        {/* Pagination algo*/}
const [currentPage, setCurrentPage] = useState(1);
const [postsPerPage] = useState(8);

const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const paginatedData = Data.slice(indexOfFirstPost, indexOfLastPost);

const paginate = pageNumber => setCurrentPage(pageNumber);


  return (
    <div>
      <Head>
        <title>বাংলা সংবাদ </title>
        <meta name="description" content="বিভাগ অনুযায়ী বাংলাদেশের প্রত্যেক দৈনিক পত্রিকা এবং অনলাইন পত্রিকার সর্বশেষ বাংলা সংবাদ"/>
        <meta name="keywords" content="Bangla News,bangla newspaper,Bd News,Bd,Bangladesh News,Divisional Bangla News,Bangla,News,সংবাদ, বাংলা সংবাদ,বিভাগীয় সংবাদ, বাংলাদেশ,বাংলাদেশ সংবাদ"/>
        <meta name="author" content="Nuren Shams Chowdhury"/>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4327171076361001"
     crossOrigin="anonymous"></script>
        
      </Head>
      
      
      <div className='row'>
        <div className='col-md-12'> 
        <div className='MainPageTitle'>
          <h2 className=' m-3 d-flex justify-content-center align-items-center'>
            বিভাগ অনুযায়ী বাংলা সংবাদ
          </h2>
        </div>
        </div>
      </div>

      <hr className='text-muted'/>
      <section>
      <div className='bdCatFirstPart card'>
      <div className='row'>
            <div className='col-md-12'>
      <div className='b-block'>
        <div className='m-2'>
        <h6 className='OptionTitle d-flex justify-content-center align-items-center mt-3 mb-4'>বিভাগ পরিবর্তন করে উক্ত বিভাগের সর্বশেষ সংবাদ দেখুন</h6>
        
        <form className='form-group d-flex justify-content-center align-items-center' onSubmit={handleSubmit}>
            <label>
            <div className='mb-3 '>বিভাগ পরিবর্তন করুন  <IconContext.Provider value={{className:"fa-bounce"}}> <FaAngleDown/></IconContext.Provider> </div>
            <select className='form-control SelectOption' value={banglaText} onChange={(e) => setBanglaText(e.target.value)}>
            <option value='ঢাকা'>ঢাকা</option>
            <option value='চট্টগ্রাম'>চট্টগ্রাম</option>
            <option value='খুলনা'>খুলনা</option>
            <option value='রাজশাহী'>রাজশাহী</option>
            <option value='বরিশাল'>বরিশাল</option>
            <option value='সিলেট'>সিলেট</option>
            <option value='ময়মনসিংহ'>ময়মনসিংহ</option>
            <option value='রংপুর'>রংপুর</option>
            
            
            </select>
          <button className='btn CopyButton mt-3' type='submit'>Submit</button>


            </label>
       

        </form>
        </div>
        
        </div>
    </div>
    
          </div>
    </div>

      </section>
      <hr className='text-muted'/>

      
      
     
      <div className='catNameMain'>
      <div className=''>
        <p className='d-flex justify-content-center align-items-center text-secondary cCat'>বর্তমান বিভাগ</p>
        <div className='categoryName'>
        <div className='d-flex justify-content-center align-items-center cCat2'>

        <h1>{Division}</h1>
        </div>
       </div>
      </div>

      </div>
      <hr className='text-muted'/>

      
      <hr className='text-muted'/>

    
       <section>
       <div className='second'>
          
          <div>
          <div>
              
          {
      paginatedData.map((data)=>(
        <div key={data.title} className='card col-12'>
          
          <div  className='row col-md-12 '>
          <div className='col-md-4 col-12'>
            
            <img className='rounded nationalImage ' src={data.media} alt={data.title}/>
  
          </div>
          <div className='col-md-8 '>
          <div className='col-12 nationalContent'>
            <h3 className='nationalTitle fontFat mb-2 d-flex justify-content-center align-items-center'>{data.title}</h3>
            
            
            
               <div><p className='nationalSummary'><strong>Description :</strong> {data.summary.split(" ").splice(0,40).join(" ")}</p></div>
            
            
            
  
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
                                        
                                        
                                        
                                   
                                <div className=' col-12 col-md-12 d-flex d-md-flex justify-content-center'>
                                <a target="_blank" rel="noreferrer" className=' btn  CopyButton mx-2 px-5' href={data.link}>Go To Link</a>
  
  
                                </div>
                                 </div>
  
          <hr/>
  
            </div>
  
  
          </div>
  
  </div>
  
        </div>
        
          
         
      ))}
          </div>
          
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
                          <hr className='text-muted'/>
                          
       
          </div>
  
          </div>

       </section>
       

    </div>
  )
}

export default Division



export async function getServerSideProps(context) {
        const {params} = context
        const {Division} = params 
      
       const res = await axios.request({
        method: 'GET',
        url: 'https://newscatcher.p.rapidapi.com/v1/search_enterprise',
        params: {
          q: `${Division}`,
          lang: 'bn',
          sort_by: 'date',
          country: 'BD',
          page: '1',
          media: 'True'
        },
        headers: {
          'X-RapidAPI-Key': '3fb40035d8msh0e1e6217ef102cap139658jsnbf4b614c85e3',
          'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com'
        }
       })
       const Data = res.data.articles;
       
       
   
    return {
      props: {Data : Data,Division}, 
    }
  }
