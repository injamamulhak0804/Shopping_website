import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
  const cartData = useSelector(store=> store.cart.items)
  console.log(cartData.length);
  
  return (
    <div className='flex pt-5 justify-between'>
        <div className='font-volkhov text-xl'>BrowserBuzz</div>
        <div>
            <ul className='font-poppins items-center flex gap-7 text-sm'>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/cart">Cart ({cartData.length})</Link>
                <li>sigin</li>
                <button className='px-4 py-2 bg-black text-white text-xs font-extralight rounded-lg'>Sign Up</button>
            </ul>
        </div>
    </div>
  )
}

export default Header