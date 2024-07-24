import React from 'react'
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const Login = () => {
  const navigate = useNavigate();

  const handdleOnLinkClick = (e) => {
    navigate("/signUp");
  }

  return (
    <div>
        <Header />
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_small.jpg" 
                alt="image-logo"
            />
        </div>
        <form className='lg:w-3/12 sm:w-full p-12 absolute bg-black mx-auto left-0 right-0 lg:my-36 opacity-90 text-white'>
            <h1 className='py-4 font-bold text-3xl w-full'>
              Sign In
            </h1>
            <input type="text" placeholder='Email or Phone Nubmer' className='p-4 my-4 w-full bg-inherit border-2 rounded-md border-slate-700'/>
            <input type="text" placeholder='Password' className='p-4 my-4 w-full bg-inherit border-2 rounded-md border-slate-700'/>
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