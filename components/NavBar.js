import {useState} from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';
import {FaAngleDown,FaGlobeAsia} from 'react-icons/fa';
import { IconContext } from "react-icons";
import { TbLetterB,TbLetterD } from "react-icons/tb";

const NavBar = () => {
  const [bdOpen , setBdOpen] =useState(false);
  const [bdNatOpen,setBdNatOpen] = useState(false);
  const [homeOpen,setHomeOpen] = useState(false);

  const router = useRouter();
  return (
    <>
    <nav className='menu d-block'>
    <Link href='/'><div onClick={() => setHomeOpen(true)} className={ homeOpen ? 'nav-button-active ':'nav-button '} ><span className='fontType'>sum(NEWS)</span></div></Link>
        <div className='Nav '>
        

        <Link href='/TopNews/World'><div  className={router.query.Category ? 'nav-button-active ':'nav-button '} ><span className='d-flex d-md-none justify-content-center align-items-center'><IconContext.Provider value={{className:"menuIcon "}}> <FaGlobeAsia/></IconContext.Provider> </span><span className='d-md-flex d-none'> World News</span></div></Link>
       {/* Bangladesh */}
       <Link href='/BDnews' ><div><div className='d-flex d-md-none'><IconContext.Provider value={{className:"menuIcon text-success"}}> <TbLetterB/></IconContext.Provider>
       <IconContext.Provider value={{className:"menuIcon text-danger"}}> <TbLetterD/></IconContext.Provider>
       </div><span className='d-md-block d-none'>Bangladesh</span></div></Link>

       {/*     
       
        {
        bdOpen &&
          
            
        <div className='submenu'>
        <Link href='/BDnews/International'><div  className={router.asPath == "/BDnews/International" ? 'nav-button-active':'nav-button intMedia'} ><span >International Media</span></div></Link>
        
        
       <div onClick={() => setBdNatOpen(!bdNatOpen)} className={bdNatOpen?'nav-button-active':'nav-button'}><span>Local Media(en)</span><IconContext.Provider value={{className:"fa-bounce mt-2 navIconNat"}}> <FaAngleDown/></IconContext.Provider></div>

{bdNatOpen &&  <div className='submenu2'>
 <Link href='/BDnews/Divisional/Dhaka'><div  className={router.query.National ? 'nav-button-active':'nav-button'} ><span >Divisional</span></div></Link>
 <Link href='/BDnews/Categorical/news'><div  className={router.query.CategoryBd ? 'nav-button-active':'nav-button'} ><span >Categorical</span></div></Link>



</div>  }
 
 <Link href='BDnews/BanglaNews/ঢাকা'>
   <div  className={router.query.Division ? 'nav-button-active':'nav-button'} >
   <span >বাংলা</span>


   </div>
   
   </Link>

</div>
}
       
       
       */}
      
       
        <div>
        <Link href='/Summarize'><div  className={router.asPath == '/Summarize' ? 'nav-button-active':'nav-button'} ><span >Summarizer</span></div></Link>

        </div>
      
         </div>

    </nav>

    </>
  )
}

export default NavBar