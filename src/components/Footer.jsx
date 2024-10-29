import React from 'react'
import { FOOTERIMG1, FOOTERIMG2 } from '../utils/constant'
import { Button } from '../utils/helper'

const Footer = () => {
  return (
    <>
        <div className='bg-[#f0f0f0]'>
        <div className='flex mt-20  items-center p-20'>
            <img className='w-[25%] object-cover' src={FOOTERIMG1} alt="" />
            <div>
                <div className='shadow-lg p-5'>
                    <h2 className='font-volkhov text-center text-[#484848] text-2xl my-5'>Subscribe To Our Newsletter</h2>
                    <p className='font-poppins text-center text-[#484848] opacity-55 text-xs'>Don’t miss out on the latest trends, exclusive deals, and special events—subscribe to our newsletter today. Join our newsletter and unlock a world of shopping possibilities! Sign up now and enjoy a special welcome offer on your next purchase! 🛍️💌</p>
                    <p className='text-[#484848] pt-5 opacity-60 text-md'>zamam@mail.com</p>
                </div>
                <div className='pt-5'><Button text="Subscribe Now" /></div>
            </div>
            <img className='w-[23%] object-cover' src={FOOTERIMG2} alt="" />
        </div>
        <div className='h-[2px] bg-white w-[95%] mb-5 rounded-2xl mx-auto'></div>
        <div className='bg-[#f0f0f0]'>
            <div className='flex justify-between px-10'>
                <div className='font-volkhov text-xl'>BrowserBuzz</div>
                <div>
                    <ul className='font-poppins items-center opacity-50 flex gap-7 text-xs'>
                        <li>Support Center</li>
                        <li>Invoicing</li>
                        <li>Contract</li>
                        <li>Careers</li>
                        <li>Blog </li>
                    </ul>
                </div>
            </div>
            <p className='font-poppins text-center py-3  text-[10px]'>Copyright © 2022 Xpro . All Rights Reseved.</p>
        </div>
        </div>
    </>
  )
}

export default Footer