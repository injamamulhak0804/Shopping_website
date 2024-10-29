import React from 'react'
import { STAR } from '../utils/constant'

const ShowCart = ({data}) => {
    const {title, price, image} = data
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
                <p className='text-md text-[#484848] font-semibold'>${price}</p>
              </div>
            </div>
  )
}

export default ShowCart