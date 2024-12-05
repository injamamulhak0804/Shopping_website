import React from 'react'
import { STAR } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../Redux/cartSlice'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Cart = ({data}) => {
    const dispatch = useDispatch()
    const {title, price, image} = data
    const handleClick = (item)=>{
      toast.success("Item Added successfully");
      dispatch(addToCart({item: [item, 1]}))
    }
  return (
    <div className='w-64 shadow-xl rounded-lg font-poppins p-2'>
              <img src={image} className='w-full object-contain h-[250px]' alt="" />
              <div>
                <div className='flex pt-2 justify-between items-start'>
                  <div>
                    <h3 className='text-[#484848] font-medium'>{title.length > 10 ? `${title.slice(0, 12)}...` : title}</h3>
                    <p className='text-[#484848] font-medium text-xs opacity-60'>Al Karam</p>
                  </div>
                  <div className='flex'>
                    <img src={STAR} className='w-4' alt="" />
                    <img src={STAR} className='w-4' alt="" />
                    <img src={STAR} className='w-4' alt="" />
                    <img src={STAR} className='w-4' alt="" />
                    <img src={STAR} className='w-4' alt="" />
                  </div>
                </div>
                <p className='text-[10px] text-[#484848] py-3'>(4.1k) Customer Reviews</p>
                <div className='flex justify-between items-center'>
                    <p className='text-md text-[#484848] font-semibold'>${price}</p>
                    <button  
                      onClick={()=> handleClick(data)}
                      className='text-[12px] px-3 py-2 bg-black font-extralight font-poppins text-white rounded-md hover:bg-white hover:text-black hover:font-medium hover:shadow transition duration-500 ease-in-out'>
                      Add to cart
                    </button>
                </div>
              </div>
            </div>
  )
}

export default Cart