import React from 'react'
import { CARTIMG, IMG, IMG1, IMG2, IMG3, LOGO, LOGO1, LOGO2, LOGO3, LOGO4, STAR } from '../utils/constant'
import { INSTA } from '../utils/helper'
import { data } from '../utils/product'
import { Link } from 'react-router-dom'
import ShowCart from './ShowCart'

const Hero = () => {


  const filterWomenData = data.filter(item=> item.category === "women clothing")
  // console.log(filterWomen);
  
  return (
    <>
        <div className='flex items-center mt-10'>
            <img src={IMG} className='w-56' alt="" />
            <div className='flex flex-col w-fit items-center'>
                <img src={IMG1} className='w-[69%]' alt="" />
                <div className='py-5 text-center'>
                <h2 className='font-poppins text-[#484848]   font-medium text-4xl text-center'>ULTIMATE</h2>
                <h1 className='font-poppins text-8xl text-center text-transparent text-stroke'>SALE</h1>
                <p className='font-poppins text-center text-xs mb-2'>NEW COLLECTION</p>
                <Link to="/shop">
                  <button className='px-3 py-2 bg-black text-white rounded-lg text-xs'>SHOP NOW</button>
                </Link>
                </div>
                <img src={IMG2} className='w-[69%]' alt="" />
            </div>
            <img src={IMG3} className='w-56' alt="" />
        </div>
        <div className='flex items-center gap-10'>
            <img src={LOGO} className='w-40' alt="" />  
            <img src={LOGO2} className='w-40' alt="" />  
            <img src={LOGO3} className='w-40' alt="" />  
            <img src={LOGO4} className='w-40' alt="" />  
        </div>

        <section className='pt-10'>
          <div className='text-center'>
            <h2 className='font-volkhov text-[#484848] text-2xl my-5'>New Arrivals</h2>
            <p className='font-poppins text-[#484848] opacity-55 text-xs'>Explore stylish clothing and accessories that elevate your everyday look. Whether you’re after casual comfort or elegant evening wear, our new pieces are designed to make a statement.</p>
          </div>
          <div className='flex flex-col items-center gap-y-8'>
            <div className='pt-10 flex flex-wrap justify-between gap-y-10'>
              {
                filterWomenData.map(data=> <ShowCart key={data.id} data={data} />)
              }
            </div>
            <Link to="/shop">
              <button className='px-6 py-2 bg-black text-white rounded-lg'>View more</button>
            </Link>
          </div>
        </section>

        <section className='pt-20'>
          <INSTA/>
        </section>
        
    </>
  )
}

export default Hero