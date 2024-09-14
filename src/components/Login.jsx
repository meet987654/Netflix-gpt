import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const[isSignInForm,setIsSignInForm]=useState(true);
  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
      <Header/>
      <div className='absolute filter brightness-50'>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_large.jpg' alt='bg-image'></img>
    </div>

    <form className='absolute w-3/12 py-16 px-5 text-white bg-gray-950 bg-opacity-70  my-36 mx-auto right-0 left-0'>
      <p className='text-3xl font-bold font-jakarta mx-5  mb-8 text-white'>{isSignInForm?"Sign In":"Sign Up"}</p>
      {!isSignInForm && (<input type='text' placeholder='Name' className='rounded-md bg-zinc-800 w-10/12 mx-5 p-3 my-2 '></input>)}
      {!isSignInForm && (<input type='digit' placeholder='Phone Number' className='rounded-md bg-zinc-800 w-10/12 mx-5 p-3 my-2 '></input>)}
      <input type='email' placeholder='Email Address' className='rounded-md bg-zinc-800 w-10/12 mx-5 p-3 my-2 '></input>
      <input type='password' placeholder='Password' className='rounded-md bg-zinc-800 w-10/12 mx-5 p-3 my-2 '></input>
      <button className=' rounded-md bg-red-600 w-10/12 mx-5 p-3 my-2'>{isSignInForm?"Sign In":"Sign Up"}</button>
      <p className='mx-6 cursor-pointer hover:text-blue-600' onClick={toggleSignInForm}>
      {isSignInForm?"New to Netflix? Sign Up Now":"Already registered?Sign In Now"}</p>
    </form>
    </div>
  )
}

export default Login
