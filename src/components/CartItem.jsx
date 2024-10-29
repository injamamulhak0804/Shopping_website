import React, { useEffect, useState } from 'react'
import { CARTIMG } from '../utils/constant'
import { useDispatch } from 'react-redux';
import { removeCart } from '../Redux/cartSlice';

const CartItem = ({data, idx, handleIncrease, handleDecrease}) => {
    
    const {title, price, image, id} = data[0]; 
    const dispatch = useDispatch()

    const handleRemove = (index)=>{
        dispatch(removeCart(index))
    }



    
  return (
    <>
        <div className='flex items-start justify-between'>
            <div className='flex gap-2'>
                <img src={image} className='w-[120px] h-auto overflow-hidden' alt="" />
                <div className='max-w-[100px]'>
                    <h2 className='font-volkhov text-sm'>{title.length > 20 ? `${title.slice(0, 45)}...` : title}</h2>
                    <p onClick={()=>handleRemove(idx)} className='font-poppins hover:text-red-500 hover:opacity-100 cursor-pointer text-xs underline opacity-25'>Remove</p>
                </div>
                <p className='font-volkhov ps-12'>${price}</p>
            </div>
            <div className='border flex gap-2 p-2'>
                <button className='select-none' onClick={()=> handleDecrease(id)}>-</button>
                <span className='select-none'>{data[1]}</span>
                <button className='select-none' onClick={()=> handleIncrease(id)}>+</button>
            </div>
            <p className='font-volkhov'>${(price * data[1]).toFixed(2)}</p>
        </div>


    </>
  )
}

export default CartItem