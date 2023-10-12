import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='bg-rose-50 h-screen flex items-center justify-center'>
            <div className='w-[600px] shadow-md bg-white p-8 rounded-md'>
                <h1 className='text-center font-medium text-3xl'>Login</h1>
                <form className='mt-6'>
                    <div className='text-center'>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder='Your Email'
                            className='border-2 p-2 w-1/2 rounded-md'
                        />
                    </div>
                    <div className='text-center mt-2'>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder='Your password'
                            className='border-2 p-2 w-1/2 rounded-md'
                        />
                    </div>
                    <div className='text-center mt-4'>
                        <input 
                            type="submit" 
                            value="Login" 
                            className='px-3 py-2 md:px-6 md:py-2.5 text-white bg-[#F85559] rounded-md cursor-pointer'
                        />
                    </div>
                </form>
                <div className='mt-4 flex items-center justify-center gap-1'>
                    <p className='text-sm text-[#757575]'>Not Registered?</p><Link to='/register' className='text-sm text-[#F85559]'>Register</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;