import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Header from './Header';
import { auth } from '../utils/firebase';
import BgImage from '../utils/images/netflix-bg-image.jpg';

const Login = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({ email: "", password: ""});

  const handdleOnLinkClick = (e) => {
    navigate("/login");
  }

  const handleOnSignUpClick = (e) => {
    e.preventDefault();
    console.log(userDetails);
    
    createUserWithEmailAndPassword(auth, userDetails.email, userDetails.password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log("user", user);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error", errorMessage)
    });
  }

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
        ...userDetails,
        [name]: value,
    })
  }

  return (
    <div>
        <Header />
        <div className='absolute'>
            <img src={BgImage} 
                alt="image-logo"
            />
        </div>
        <div className='lg:w-9/12 sm:w-full p-12 absolute bg-black mx-auto left-0 right-0 my-36 opacity-90 text-white flex'>
            <form onSubmit={handleOnSignUpClick} className='lg:w-6/12 sm:w-full'>
                <div className="w-full flex">
                    <h1 className='py-4 font-bold text-3xl w-full'>
                    Sign Up
                    </h1>
                </div>
                <div className='w-full flex'>
                    <input type="text" placeholder='First Name' onChange={handleOnChange} name="f_name" className='w-6/12 p-4 my-4 bg-inherit border-2 rounded-md border-slate-700'/>
                    <input type="text" placeholder='Last Name' onChange={handleOnChange} name="l_name" className='w-6/12 ml-8 p-4 my-4 bg-inherit border-2 rounded-md border-slate-700'/>
                </div>
                <div className='w-full flex'>
                    <input type="text" placeholder='Email Id' name="email" onChange={handleOnChange} className='w-6/12 p-4 my-4 bg-inherit border-2 rounded-md border-slate-700'/>
                    <input type="text" placeholder='Phone Number' name="phone" onChange={handleOnChange} className='w-6/12 ml-8 p-4 my-4 bg-inherit border-2 rounded-md border-slate-700'/>
                </div>
                <div className='w-full flex'>
                    <input type="text" placeholder='Password' onChange={handleOnChange} name="password" className='w-6/12 p-4 my-4 bg-inherit border-2 rounded-md border-slate-700'/>
                    <input type="text" placeholder='Confirm Password' onChange={handleOnChange} name="confirm_password" className='w-6/12 ml-8 p-4 my-4 bg-inherit border-2 rounded-md border-slate-700'/>
                </div>
                <div className="m-auto left-0 right-0  w-6/12">
                    <button className="w-full p-4 my-4 bg-red-700 rounded-lg font-bold">
                        Sign Up
                    </button>
                </div>
            </form>
            <div className='lg:w-6/12 sm:w-full h-full'>
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