import React from 'react'

import Login from './Login';
import Browse from './Browse';
import SignUp from "./SignUp";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Body = () => {

  const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Browse /> 
    },
    {
        path: "/login",
        element: <Login /> 
    },
    {
      path: "/signUp",
      element: <SignUp /> 
  },
  ]);
  return (
    <RouterProvider router={appRouter} />
  )
}

export default Body;