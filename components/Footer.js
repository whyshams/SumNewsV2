import Link from "next/link"

const Footer = () => {
  return (
    <>
        <div className="Footer">
        <div className='Footer-menu pt-4 pb-1 d-flex flex-wrap justify-content-center align-items-center'>
                <Link href='/AboutUs'><div className='btn text-secondary Footer-button'>About Us</div></Link>
                <Link href='/ContactUs'><div className='btn text-secondary Footer-button'>Contact Us</div></Link>
                <Link href='/Terms'><div className='btn text-secondary Footer-button'>Terms &amp; Conditions</div></Link>
                <Link href='/PrivacyPolicy'><div className='btn text-secondary Footer-button'>Privacy Policy</div></Link>
                <Link href='/Disclaimer'><div className='btn text-secondary Footer-button'>Disclaimer</div></Link>

                
            </div>
            <div className='Footer-content'>
                <div className='copyright mt-3 d-flex justify-content-center align-items-center'>&copy; Databases of Various News API from open source</div>
                <div className='footer-logo'>
                    <p className='mt-5 d-flex text-muted justify-content-center align-items-center'>Brought To You By</p>
                    <h1 className='fontType  mt-2 pb-5 d-flex flex-wrap justify-content-center align-items-center'>sum(NEWS)</h1>
                </div>

            </div>
        </div>
    </>
  )
}

export default Footer