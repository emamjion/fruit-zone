import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/images/logo/logo.png'
import { BsSearch } from "react-icons/bs";

const Header = () => {
    return (
        <div className='bg-[#F85559] md:rounded-[50px]'>
            <div className='flex items-center justify-between px-6  py-4 md:px-12  md:h-24 mt-3'>
                <ul className='md:flex items-center gap-6 justify-center'>
                    <li className='text-white font-medium'>
                        <NavLink to='/'> Home </NavLink>
                    </li>
                    <li className='text-white font-medium'>
                        <NavLink to='/about'> About Us </NavLink>
                    </li>
                    <li className='text-white font-medium'>
                        <NavLink to='shop'> Shop </NavLink>
                    </li>
                    <li className='text-white font-medium'>
                        <NavLink> All Fruits </NavLink>
                    </li>
                </ul>
                <div className='flex items-center gap-2'>
                    <img src={logo} />
                    <h2 className='font-medium text-white text-xl md:text-3xl'>Fruit Zone</h2>
                </div>
                <div className='relative flex items-center'>
                    <input type="text" placeholder='Search Here' className='px-4 py-2 rounded-[50px]' />
                    <span className='absolute right-3'>< BsSearch /></span>
                </div>
            </div>
        </div>
    );
};

export default Header;