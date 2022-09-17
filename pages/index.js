import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
          <div className='Home'>
      <Head>
        <title>sumNews</title>
        <meta name="description" content="SumNews is a powerful online news aggregator that brings together the best stories from around the web and lets you summarize them in seconds. Read more about what makes SumNews different from other news sites of Bangladesh!" />
        <meta name='title' content="SumNews is the most powerful news aggregator in Bangladesh. It's an online tool that allows you to search for, read, share, and summarize the latest headlines from over 1,000 sources across the web."/>
        <meta name='keywords' content='news aggregator,summarize news bangladesh, get news, find news, short news, news digest,bangladesh news, bangladesh news digest, bangladesh news, global news, bangladesh international news, bangladesh divisional news, বাংলা সংবাদ'/>
      </Head>
      <div className=' col-md-12 align-items-center mt-5'>
       <div>
        <h1 className='fontType frontLogo d-flex justify-content-center align-items-center'>sum(NEWS)</h1>
       </div>
       
       <div className='d-md-flex d-inline-block justify-content-center align-items-center mt-md-5 mt-2'>
        <p className='fontBang frontPara text-dark text-center'>SumNews is here to make news consumption as easy as possible!</p>
       </div>
      </div>
      <div className=''>
      <div className='d-flex justify-content-center align-items-center mt-md-5 mt-3'>
          <h4 className='frontYouCan text-dark'>In Sum News, You can :</h4>
      </div>
      <div className='mt-md-5 mt-4 d-flex justify-content-center align-items-center '>
          <div className='frontContent text-center'>Summarize any English Article or News in <Link href='/Summarize'><span className='frontLink'>Summarizer Tool</span></Link> </div>
      </div>
      <div className='mt-md-5 mt-4 d-flex justify-content-center align-items-center '>
          <div className='frontContent'>Find Out latest <Link href='/TopNews/World'><span className='frontLink '>World News</span></Link></div>
      </div>
      <div className='mt-md-5 mt-4 d-flex justify-content-center align-items-center '>
          <div className='frontContent text-center'>Surf the latest news of Bangladesh across <Link href='/BDnews/International'><span className='frontLink'>World Media</span></Link> and Local <Link href='/BanglaNews/ঢাকা'><span className='frontLink'>বাংলা</span></Link> or English news agencies respectively.</div>
      </div>

      </div>
    </div>
    </>
  )
}
