import React from 'react';
import { useNavigate } from 'react-router-dom';

import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';

const Header = () => {
  const navigate = useNavigate();

  const handleOnSignOut = () => {
      signOut(auth).then(() => {
        console.log("user signed out successfully");
        navigate("/login");
      }).catch((error) => {
        console.log(error);
    });
  };

  const handleOnLogoClick = () => {
    navigate("/");
  }

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex space-x-32'>
        <img
            onClick={handleOnLogoClick}
            className='w-44'
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
            alt="image-logo"
        />
        <button className='text-red-700 font-bold right-0' onClick={handleOnSignOut}>Sign Out</button>
    </div>
  )
}

export default Header;
