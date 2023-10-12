import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='bg-rose-50 h-screen flex items-center justify-center'>
            <div className='w-[600px] shadow-md bg-white p-8 rounded-md'>
                <h1 className='text-center font-medium text-3xl'>Register</h1>
                <form className='mt-6'>
                    <div className='text-center'>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder='Your Name'
                            className='border-2 p-2 w-1/2 rounded-md'
                        />
                    </div>
                    <div className='text-center mt-2'>
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
                            value="Register" 
                            className='px-3 py-2 md:px-6 md:py-2.5 text-white bg-[#F85559] rounded-md cursor-pointer'
                        />
                    </div>
                </form>
                <div className='mt-4 flex items-center justify-center gap-1'>
                    <p className='text-sm text-[#757575]'>Already a User?</p><Link to='/login' className='text-sm text-[#F85559]'>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;