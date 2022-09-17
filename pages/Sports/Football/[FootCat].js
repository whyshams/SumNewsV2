import {useState} from 'react';
import axios from 'axios';
import moment from 'moment';
import { useRouter } from 'next/router';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Pagination from '../../../components/Pagination';

const FootCat = ({Data}) => {

console.log(Data)
const router = useRouter();

const handleCopy = () => {
  
  router.push('/Summarize')
  
}
const [currentPage, setCurrentPage] = useState(1);
const [postsPerPage] = useState(10);

const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const paginatedData =Data.slice(indexOfFirstPost, indexOfLastPost);

const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
         <div className='bdCatSecondPart'>
        <div className='row'>
          <div className=''>
          {
    paginatedData.map((data)=>(
      <div key={data.title} className='card col-12'>
        <div  className='row col-md-12 '>
        <div className='col-md-4 col-12'>
          
          <img className='rounded newscatchimg' src={data.media} alt={data.title}/>

        </div>
        <div className='col-md-8 '>
        <div className='col-12 nationalContent'>
          <h3 className='sumTitle fontFat mb-2 d-flex justify-content-center align-items-center'>{data.title}</h3>
          
          <div><p className='summary1 m-2'>Summary :</p><p className='paraGraph m-1'> {data.summary}</p></div>

          <div className='d-block m-2'>
            <h5 className='m-2 paraGraph  d-flex justify-content-center align-items-center' >{moment(data.published_date).fromNow()}</h5> 
            <div className=' d-flex justify-content-center align-items-center'>
            <h6 >by </h6>

            </div>
            <div className='d-flex justify-content-center align-items-center'>
            <p className='summary1'>{data.rights.toUpperCase()}</p>
            </div>
          </div>
           
          
          <div className='row'>
                                      
                                      <CopyToClipboard text={data.link} onCopy={handleCopy}>
                                        <div className='col-12 col-md-6 d-md-flex d-flex justify-content-center'>
                                        <button onClick={() => {setSumText(data.link); setCopied(true) }} className='btn d-flex CopyButton mx-2 px-5'>Copy Link to Summarize</button>
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
                     
        </div>
      </div>
  
 </>
  )
}

export default FootCat;

export async function getServerSideProps(context){
    const {params} = context;
    const {FootCat} = params;
    const res = await axios({
      method: 'GET',
      url: 'https://newscatcher.p.rapidapi.com/v1/search',
      params: {q: "La Liga", sources: "espn.com,skysports.com,goal.com,bleacherreport.com" , lang: 'en', sort_by: 'relevancy', page: '1', media: 'True'},
      headers: {
        'X-RapidAPI-Key': '3c84603cf9msh4143e6aff6a8074p1c4935jsnf23b029efa30',
        'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com'
      }
    })
   
    const Data = res.data.articles;
    return{
        props : {Data : Data},
    }
}