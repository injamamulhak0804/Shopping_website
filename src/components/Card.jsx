import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CARTIMG, NOITEMSCART } from '../utils/constant'
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../utils/Helper'
import { decreaseCount, increaseCount } from '../Redux/cartSlice'

const Card = () => {
    const data = useSelector(store=> store.cart.items)
    const [prices, setPrices] = useState(0)
    const dispatch = useDispatch()


    const handleIncrease = (id)=>{
        // console.log(id);   
        dispatch(increaseCount(id))
    }
    const handleDecrease = (id)=>{
        // console.log(id);   
        dispatch(decreaseCount(id))
    }
    useEffect(()=>{
        setPrices(data.reduce((acc, curr)=> (acc + curr[0].price) * curr[1], 0))
        // console.log("loeed");
        
    })

  return (
    <div>
        {
            data.length > 0 ? 
            (<div>
                <h1 className='font-volkhov text-center font-medium text-2xl mt-12'>Shopping Cart</h1>
                <div className='font-poppins text-xs mt-5 text-center'>
                    <Link to="/">Home</Link> 
                    <span className='mx-2'>&gt;</span>
                    <Link to="/cart">Your Shopping Cart</Link>
                </div>
                <div className='flex justify-between pt-20'>
                    <h3 className='font-volkhov'>Product</h3>
                    <h3 className='font-volkhov'>Price</h3>
                    <h3 className='font-volkhov'>Quantity</h3>
                    <h3 className='font-volkhov'>Total</h3>
                </div>
                <div className='w-full h-[1px] bg-black opacity-20 my-8'></div>
                    <div className='flex flex-col gap-10'>
                        {
                            data.map((item, idx)=> <CartItem handleIncrease={handleIncrease} handleDecrease={handleDecrease} idx={idx} key={item[0].id} data={item}/>)
                        }
                    </div>
                <div className='w-full h-[1px] bg-black opacity-20 my-8'></div>
                <div className='max-w-md ms-auto'>
                    <div className='w-full h-[1px] bg-black opacity-20 mt-10 mb-3'></div>
                    <div className='p-2'>
                        <input type="checkbox" name="" className='me-2 font-poppins' id="wrap" />
                        <label htmlFor="wrap" className='opacity-30'>For <span className='opacity-100 text-black '>$10.00 </span>please wrap the product</label>
                        <div className='flex justify-between pt-4'>
                            <h3 className='font-volkhov'>Subtotal</h3> 
                            <h3 className='font-volkhov'>${(prices).toFixed(2)}</h3>
                        </div>
                        <button className='px-4 py-2 w-full mt-5 bg-black text-white text-xs font-extralight font-poppins rounded-lg'>checkout</button>
                        <Link to="/cart" className='font-volkhov underline'>
                            <p className='mt-5 text-center'>View Cart</p> 
                        </Link>
                    </div>
                </div>
            </div>) : (
                <div className='flex flex-col items-center gap-5'>
                    <img src={NOITEMSCART} className='w-[50%] mx-auto' alt="" />
                    <h2 className='font-poppins text-center'>Your cart is empty!</h2>
                    <div>
                        <Link to="/shop"><Button text="Shop Now" /></Link>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default Card