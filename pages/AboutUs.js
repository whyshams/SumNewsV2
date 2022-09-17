import Head from "next/head"

const AboutUs = () => {
  return (
    <>
        <Head>
            <title>About Us</title>
            <meta name='description' content='Know about SumNews and why it is different from other news portal of Bangladesh' />
        </Head>
        <div className='MainPageTitle mt-3'>
            <h1 className=' d-flex justify-content-center align-items-center '>About SumNews</h1>
        </div>
        <hr className='text-muted'/>
        <div className='text-secondary'>
            <div className='aboutContent mt-4 d-block justify-content-center align-items-center'>
                <h4 className='mb-2'>SumNews was created as an idea of making news consumption as easy as possible.</h4> 
                <p className='mt-2'>Here, you can find any News from around the world from the best News agencies of the world.</p>
                <p className='mt-2'> You can keep yourself up to date with the current affairs of Bangladesh. Firstly, from the Local English News agencies and secondly, Bangla news from the top news portals of the country. Be it according to your choice of Topic or regional Divisions.</p>
                <p> <br className='mt-2'/>Finally,the main attraction of the SumNews,which made the moto of SumNews of easy news consumption possible, You can copy any English News or Article link from our website or any other websites and paste it in our &quot;Summarizer Tool&quot; to convert very long article into a 3-4 lines of summarized paragraph.</p> </div>

        </div>
    </>
  )
}

export default AboutUs