import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { login } from '../store/userSlice';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLogin(){
    dispatch(login());
    navigate('/');
  }
  
  return (
    <div className={`login-bg bg-cover h-[100vh] flex justify-center items-center`}>
      <div className='flex flex-col items-center justify-center gap-4 p-16 rounded-md bg-[rgba(0,0,0,0.8)] w-96 text-white'>
        <h1 className='w-[100%] text-3xl font-semibold mb-3'>Sign In</h1>
        <input className='bg-slate-600 p-4 w-[100%] rounded-md text-base focus:outline-none' type="email" placeholder='Email or Phone Number' />
        <input className='bg-slate-600 p-4 w-[100%] rounded-md text-base focus:outline-none' type="password" placeholder='Password' />
        <button className='bg-red-600 text-center w-[100%] p-4 rounded-md text-base font-semibold mt-3' onClick={handleLogin}> Sign In </button>
      </div>  
    </div>
  )
}

export default Login