import React, { useEffect, useState } from 'react'
import {auth} from "../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../Redux/userSlice';
const SignUp = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userdata = useSelector((store)=> store.user.userName)

    

    useEffect(()=>{
        if(userdata){
            navigate("/")
        }
    }, [])

    

    const handleSignUp = () =>{
        dispatch(addUser(email))
        createUserWithEmailAndPassword(auth, email, password) 
        navigate("/")
    }

  return (
    <>
        <div className="w-full max-w-xs pt-10 rounded-xl  mx-auto">
            <form className="bg-white shadow rounded px-8 pt-6 pb-8 mb-4">
                    <h2 className='text-2xl font-semibold my-3 text-center'>Sign Up</h2>
                    <div className="my-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        User Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                    </div>
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Email
                    </label>
                    <input value={email} onChange={(e)=> setEmail(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="useremail" type="email" placeholder="Email" />
                    </div>
                    <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input value={password} onChange={(e)=> setPassword(e.target.value)}  className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                    {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
                    </div>
                    <div className="flex items-center justify-between">
                    <button onClick={handleSignUp} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                       Sign Up
                    </button>
                </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
                &copy;2020 Acme Corp. All rights reserved.
            </p>
        </div>
    </>
  )
}

export default SignUp