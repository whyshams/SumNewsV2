import { useState } from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
    const [clicked,setClicked] = useState(false)
  
    const handleClick = () => {
      setClicked(!clicked)
      window.scrollTo(0,0)
    }
  
    return (
      <nav className=''>
        <ul className='pagination '>
          {pageNumbers.map(number => (
            <li onClick={handleClick} key={number} className=' page-item '>
              <a onClick={() => paginate(number)} className='btn page-link  d-flex justify-content-center align-items-center'>
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

export default Pagination