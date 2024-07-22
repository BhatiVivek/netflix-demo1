import React from 'react'
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const Login = () => {
  const navigate = useNavigate();

  const handdleOnLinkClick = (e) => {
    navigate("/login");
  }

  return (
    <div>
        <Header />
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_small.jpg" 
                alt="image-logo"
            />
        </div>
        <div className='w-9/12 p-12 absolute bg-black mx-auto left-0 right-0 my-36 opacity-90 text-white flex'>
            <form className='w-6/12'>
                <div className="w-full flex">
                    <h1 className='py-4 font-bold text-3xl w-full'>
                    Sign Up
                    </h1>
                </div>
                <div className='w-full flex'>
                    <input type="text" placeholder='First Name' className='w-6/12 p-4 my-4 bg-inherit border-2 rounded-md border-slate-700'/>
                    <input type="text" placeholder='Last Name' className='w-6/12 ml-8 p-4 my-4 bg-inherit border-2 rounded-md border-slate-700'/>
                </div>
                <div className='w-full flex'>
                    <input type="text" placeholder='Email Id' className='w-6/12 p-4 my-4 bg-inherit border-2 rounded-md border-slate-700'/>
                    <input type="text" placeholder='Phone Number' className='w-6/12 ml-8 p-4 my-4 bg-inherit border-2 rounded-md border-slate-700'/>
                </div>
                <div className='w-full flex'>
                    <input type="text" placeholder='Password' className='w-6/12 p-4 my-4 bg-inherit border-2 rounded-md border-slate-700'/>
                    <input type="text" placeholder='Confirm Password' className='w-6/12 ml-8 p-4 my-4 bg-inherit border-2 rounded-md border-slate-700'/>
                </div>
                <div className="m-auto left-0 right-0  w-6/12">
                    <button className="w-full p-4 my-4 bg-red-700 rounded-lg font-bold">
                        Sign Up
                    </button>
                </div>
            </form>
            <div className='h-full w-6/12'>
                <div className='border-2 m-8 p-6 border-white border-solid rounded-lg bg-white opacity-80'>
                    <label className="w-4/12 text-center text-black">
                        Already registered User
                    </label>
                    <button className="hover:underline text-red-500 font-bold ml-8" onClick={(e) => handdleOnLinkClick(e)}>
                        SignIn here
                    </button>
                </div>
                <div className='border-2 m-8 p-6 border-white border-solid rounded-lg bg-white opacity-80'>
                    <div className='font-bold text-xl text-black'>Registration Guide</div>
                    <hr className="mt-8 mb-8"/>
                    <div className='text-black'>To register, please provide the following details:</div>
                    <ul className='text-black'>
                        <li>First Name</li>
                        <li>Last Name</li>
                        <li>Email Address</li>
                        <li>Phone Number</li>
                        <li>Password</li>
                        <li>Confirm Password</li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Login;