import React from 'react'
import { Link } from 'react-router-dom'
import { data } from '../utils/product'
import Cart from './Cart'
import { INSTA } from '../utils/helper'

const Shop = () => {
  return (
    <>
        <div>
            <h1 className='font-volkhov text-center font-medium text-2xl mt-5'>Fashion</h1>
            <div className='font-poppins text-xs mt-5 text-center'>
                <Link to="/">Home</Link> 
                <span className='mx-2'>&gt;</span>
                <Link to="/shop">Fashion</Link>
            </div>
            <div className='flex flex-wrap justify-start gap-10 mt-20'>
                {
                    data.map(item => <Cart key={item.id} data={item}/>)
                }
            </div>
            <section className='py-24'>
                <INSTA/>
            </section>
        </div>
    </>
  )
}

export default Shop