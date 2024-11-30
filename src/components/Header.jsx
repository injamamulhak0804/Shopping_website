import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const cartData = useSelector(store=> store.cart.items)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };
  
  const handleClick = (e) =>{
    setIsMenuOpen(false)
  }
  
  return (
    <div className='flex pt-5 px-5 md:px-0 justify-between'>
      <Link className=' z-10' to="/">
        <div className='font-volkhov text-xl'>BrowserBuzz</div>
      </Link>
        <div className='md:hidden z-10'>
          <button onClick={toggleMenu} className='p-2 z-20'>
            {/* Hamburger icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <div className={`absolute md:relative bg-white p-10 md:p-0 w-full text-center ${isMenuOpen ? 'block' : 'hidden' } md:block`}>
            <ul className='font-poppins flex flex-col md:justify-end items-center md:items-center md:flex-row md:flex gap-7 text-sm'>
                <Link onClick={handleClick} to="/">Home</Link>
                <Link onClick={handleClick} to="/shop">Shop</Link>
                <Link onClick={handleClick} to="/cart">Cart ({cartData.length})</Link>
                {/* <Link to="/login">Login</Link> */}
                <Link to="/signup"><button className='px-4 py-2 bg-black text-white text-xs font-extralight rounded-lg'>Sign Up</button></Link>
                
            </ul>
        </div>
    </div>
  )
}

export default Header