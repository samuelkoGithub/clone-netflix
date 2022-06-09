import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { user, logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await logIn(email, password);
      navigate('/');
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <>
      <div className='w-full h-screen' >
        <img 
          className='hidden sm:block absolute w-full h-full object-cover' 
          src='https://assets.nflxext.com/ffe/siteui/vlv3/5ea364b1-8e59-4693-8ad8-f0eaee32d1bf/de52a56c-a62e-473a-ae33-0e0d9dd7f665/GB-en-20220530-popsignuptwoweeks-perspective_alpha_website_small.jpg' 
          alt='/' 
        />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
          {/* Draw the black retengle with w=450px and h=600px */}
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold'>Login</h1>
              { error ? <p className='p-3 bg-red-400' >{error}</p> : null}
              {/* The following setting w-full flex flex-col py-4 make the input boxes align the same width with the form */}
              <form onSubmit={handleSubmit} className='w-full flex flex-col py-4' >
                {/* The below setting make the input boxes grey, seperated and round corners */}
                <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' 
                  type='email' placeholder='Email' autoComplete='email' />

                {/* The below setting make the input boxes grey, seperated and round corners */}
                <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-2 bg-gray-700 rounded'
                  type='password' placeholder='Password' autoComplete='current-password' />
        
                <button className='bg-red-600 py-3 my-6 rounded font-bold' >Login</button>
                <div className='flex justify-between items-center text-sm text-gray-600'>
                  <p><input className='mr-2' type='checkbox' />Remember me</p>
                  <p>Need Help?</p>
                </div>
                <p className='py-4'>
                  <span className='text-gray-600'>
                     New to Netflix? 
                  </span>{' '}
                  <Link to='/signup' >Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;