import { useResultContext } from "../Contexts/ResultContextProvider";
import Head from "next/head";

const Summarize = () => {
    const {sumData,setSumInput,sumText,setSumText,Loading,sumError} = useResultContext();

    
   
    const handleSubmit = (e) => {
        e.preventDefault();
        setSumInput(sumText);
        setSumText('')
      }
  
 
    
      return (
        <div>
          <Head>
            <title>Summarizer Tool</title>
            <meta name='description' content='Summarizer is a free tool that helps you read more quickly and easily. Use it to summarize news articles or blog posts.' />
            <meta name='keywords' content='summarizer,summarize,news summarize,summarize news,summarizer tool,summarizer app,article summarize,article,summarization,summary,news summary' />
            <meta name="author" content="Nuren Shams Chowdhury"/>
          </Head>
          <div className=' mt-3 row '>
        <div className=' col-md-12'> 
        <div className='MainPageTitle'>
          <h2 className=' d-flex justify-content-center align-items-center'>
            Summarizer Tool 
          </h2>
        </div>
        </div>
      </div>

          <div className='sumInput justify-content-center align-items-center d-flex'>
            <div className='justify-content-center align-items-center d-flex'>
            <div className='col-12 d-block ' >
             
              
                    <form onSubmit={handleSubmit} >
                      <div className=' '>
                <input className='SumInput' placeholder='Input LINK for Summarization...' type="text" value={sumText} onChange={(e)=>setSumText(e.target.value)} />
                      </div>
                      <div className=' '>
                <button  type='submit' className='btn CopyButton'>Submit</button>
                      </div>
            </form>
     </div>
 </div>
</div>
    
    
          <div className='sumResult'>
          <div >
            {
              sumError && <h4>Sorry, Could not generate summary... Try again with another Link</h4>
            }
                {
                  Loading && <div className='d-flex justify-content-center align-items-center'>
                  <div className="multi-ripple">
                  <div></div>
                  <div></div>
                </div>
                </div>
                }
                {
                  sumData ? <div>
                   
                    <div className=' col-md-12'>
                      
                      <div className='d-block card'>
                        <div className='nationalContent'>
                        <h2 className='sumTitle d-flex justify-content-center align-items-center'>{sumData.article_title}</h2>
                        <div className='m-2 d-flex justify-content-center align-items-center'>
                          <img className='sumImage rounded' src={sumData.article_image} alt={sumData.article_title}/>
                        </div>
                        <div className=' summary d-flex justify-content-center align-items-center'>
                        {
                      sumData.summary.map(dat => (
                        <div key={dat}>
                          <h4 className='summary1 d-flex justify-content-center align-items-center'>Summary : </h4>
                        <p className='summary2 d-flex justify-content-center align-items-center'>{dat}</p>
                        </div>
                      ))
                    }

                        </div>

                        </div>
                       
                      </div>
                      

                    </div>
                  </div> : <div className='instruSum '>
                   <div className='intruSum1 d-flex justify-content-center align-items-center'>paste any english news or article Link in that input field and submit</div> 
                   <div className='Small mt-3 OptionTitle d-flex justify-content-center align-items-center text-center'> If You Have Clicked the &apos;Copy Link To Summmarize&apos; Button, you have copied link in your clipboard.Just Paste and Submit!</div>
                   
                    </div>
                }

           
    
            </div>
         
          </div>
        </div>
      )
}

export default Summarize