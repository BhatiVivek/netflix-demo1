import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import Header from './Header';
import { auth } from '../utils/firebase';
import BgImage from '../utils/images/netflix-bg-image.jpg';

const Login = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({ email: "", password: ""});
  const [errorMsg, setErrorMsg] = useState("");

  const handdleOnLinkClick = (e) => {
    navigate("/signUp");
  }

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
        ...userDetails,
        [name]: value,
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("userDetails", userDetails)

    signInWithEmailAndPassword(auth, userDetails.email, userDetails.password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("user logged in", user);
      navigate("/");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("errorMessage", errorMsg);
      setErrorMsg(errorMessage);
    });

  }

  return (
    <div>
        <Header />
        <div className='absolute'>
            <img src={BgImage} 
                alt="image-logo"
            />
        </div>
        <form onSubmit={handleOnSubmit} className='lg:w-3/12 sm:w-full p-12 absolute bg-black mx-auto left-0 right-0 lg:my-36 opacity-90 text-white'>
            <span className='font-bold text-red-500'>{errorMsg}</span>
            <h1 className='py-4 font-bold text-3xl w-full'>
              Sign In
            </h1>
            <input type="text" placeholder='Email or Phone Nubmer' name="email" onChange={handleOnChange} className='p-4 my-4 w-full bg-inherit border-2 rounded-md border-slate-700'/>
            <input type="text" placeholder='Password' onChange={handleOnChange} name="password" className='p-4 my-4 w-full bg-inherit border-2 rounded-md border-slate-700'/>
            <button className='p-4 my-4 bg-red-700 w-full rounded-lg font-bold'>
              Sign In
            </button>
            <label>
                New to Netflix ?
            </label>
            <button className="hover:underline text-red-500 font-bold ml-8" onClick={(e) => handdleOnLinkClick(e)}>
                SignUp here
            </button>
        </form>
    </div>
  )
}

export default Login;