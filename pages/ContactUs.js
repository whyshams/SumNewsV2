import Head from "next/head"

const ContactUs = () => {
  return (
    <>
    <Head>
        <title>Contact Us</title>
        <meta name='description' content='Contact SumNews for Partnership, Endorsement or Advertisement.' />

      </Head>
        <div className='lazy mt-5 d-flex justify-content-center align-items-center text-center'>
            <h1>Contact SumNews</h1>
        </div>
        <hr className='text-muted'/>
        <div className='mt-5'>
            <h4 className=' justify-content-center align-items-center text-center'>For Partnership, Endorsement or Advertisement feel free to give us a knock @<a href="mailto:sumnewsinfo@gmail.com">sumnewsinfo@gmail.com</a></h4>
        </div>
    </>
  )
}

export default ContactUs