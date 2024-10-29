import { INSTAIMG } from "./constant"

export const INSTA = ()=>{
    return (
        <>
        <div className='text-center'>
            <h2 className='font-volkhov text-[#484848] text-2xl my-2'>Follow Us On Instagram</h2>
            <p className='font-poppins text-[#484848] opacity-55 text-xs'>Stay connected and get inspired by following us on Instagram! 🌟</p>
            <div>
                <img src={INSTAIMG} className="pt-10 " alt="" />
            </div>
          </div>
        </>
    )
}

export const Button = ({text})=>{
    return <button className='px-6 py-3 bg-black text-[11px] font-extralight font-poppins text-white rounded-lg'>{text}</button>    
}