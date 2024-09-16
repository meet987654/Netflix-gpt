import React, { useRef, useState } from 'react';
import Header from './Header';
import { validate } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../utils/firebase';

import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { bgImage, photoUrl } from '../utils/constants';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => setIsSignInForm(!isSignInForm);
  const dispatch=useDispatch()
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [errorMsg, setErrorMsg] = useState('');


  const handleButtonClick = () => {
    const mess = validate(email.current.value, password.current.value);
    setErrorMsg(mess);

    if (mess) return;

    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(auth.currentUser, {
            displayName: name.current.value, 
            photoURL: {photoUrl},
          })
          .then(() => {
            const{uid,email,displayName,photoUrl}=auth.currentUser
            dispatch(addUser({uid:uid,email:email,displayName:displayName}))
            
          })
          .catch((error) => {
            setErrorMsg(error.message); // Correct the error message usage
          });
        })
        .catch((error) => {
          setErrorMsg(`${error.code}: ${error.message}`);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
         
        })
        .catch((error) => {
          setErrorMsg(`${error.code}: ${error.message}`);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className='absolute filter brightness-50'>
        <img
          src={bgImage}
          alt='bg-image'
        />
      </div>

      <form onSubmit={(e) => e.preventDefault()} className='absolute w-3/12 py-16 px-5 text-white bg-gray-950 bg-opacity-70 my-36 mx-auto right-0 left-0'>
        <p className='text-3xl font-bold font-jakarta mx-5 mb-8 text-white'>{isSignInForm ? 'Sign In' : 'Sign Up'}</p>

        {!isSignInForm && (
          <input
            ref={name}
            type='text'
            placeholder='Name'
            className='rounded-md bg-zinc-800 w-10/12 mx-5 p-3 my-2'
          />
        )}
        {!isSignInForm && (
          <input
            type='text'
            placeholder='Phone Number'
            className='rounded-md bg-zinc-800 w-10/12 mx-5 p-3 my-2'
          />
        )}

        <input
          ref={email}
          type='email'
          placeholder='Email Address'
          className='rounded-md bg-zinc-800 w-10/12 mx-5 p-3 my-2'
        />
        <input
          ref={password}
          type='password'
          placeholder='Password'
          className='rounded-md bg-zinc-800 w-10/12 mx-5 p-3 my-2'
        />

        <p className='text-red-600 font-semibold p-2 mx-3'>{errorMsg}</p>

        <button
          className='rounded-md bg-red-600 w-10/12 mx-5 py-3 px-3 my-2 hover:w-9/12  hover:mx-7 transition-all'
          onClick={handleButtonClick}
        >
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>

        <p className='mx-6 cursor-pointer hover:text-blue-600' onClick={toggleSignInForm}>
          {isSignInForm ? 'New to Netflix? Sign Up Now' : 'Already registered? Sign In Now'}
        </p>
      </form>
    </div>
  );
};

export default Login;
