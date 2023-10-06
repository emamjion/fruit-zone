import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/images/logo/logo.png'
import { BsSearch } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";

const Header = () => {
    const links = [
        {name: 'Home', links: '/'},
        {name: 'About Us', links: '/about'},
        {name: 'Shop', links: '/shop'},
        {name: 'Orders', links: '/orders'},
        {name: 'Contact Us', links: '/contact'}
    ]
    const [open, setOpen] = useState(false);
    
    return (
        <nav className=''>
            <div className='md:flex items-center justify-between md:bg-[#F85559] py-4 md:px-10 px-7 md:rounded-[50px]'>
                <Link to='/' className='flex items-center gap-2 text-2xl md:text-white font-semibold cursor-pointer'>
                    <img src={logo} />
                    <h1>Fruit Zone</h1>
                </Link>
                <div onClick={() => setOpen(!open)} className='text-3xl md:text-white absolute right-8 top-6 cursor-pointer md:hidden'>
                    {open? < FaTimes /> : < HiMenu />}
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-6 bg-[#F85559] absolute md:static md:z-auto z-50 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px] md:opacity-100 opacity-0'} `}>
                    {
                        links.map((link, index) => (
                            <li 
                                key={index}
                                className='md:ml-8 text-white font-medium text-lg md:my-0 my-7'
                            >
                                <NavLink to={link.links}>{link.name}</NavLink>
                            </li>
                        ))
                    }
                    <div className='relative md:ml-12'>
                    <input 
                        type="text"
                        placeholder='Search Here'
                        className='border-0 px-5 py-2 rounded-[50px]'
                    />
                        <span className='absolute md:right-5 right-36 mt-3 z-[1]'> < BsSearch /> </span>
                    </div>
                </ul>
                
            </div>
        </nav>
    );
};

export default Header;