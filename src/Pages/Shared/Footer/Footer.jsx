import React from 'react';
import logo from '../../../assets/images/logo/logo.png';
import { Link } from 'react-router-dom';
import { FaApple, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    const links = [
        {name: 'Home', links: '/'},
        {name: 'Abou Us', links: '/about'},
        {name: 'Shop', links: '/shop'},
        {name: 'Blogs', links: '/blogs'},
        {name: 'All Fruits', links: '/all-fruits'},
        {name: 'Support', links: '/support'},
        {name: 'My Account', links: '/my-account'}
    ]
    
    return (
        <div className='mt-24 bg-[#151515] md:h-[400px] flex items-center justify-center'>
            <div>
                <Link to='/' className='flex items-center justify-center mb-12 gap-2 text-2xl text-white font-semibold cursor-pointer mt-6 md:mt-0'>
                    <img src={logo} />
                    <h1>Fruit Zone</h1>
                </Link>
                <ul className='flex items-center justify-center flex-wrap gap-10'>
                    {
                        links.map((link, index) => (
                            <li key={index} className='text-white'>
                                <Link to={link.links}>{link.name}</Link>
                            </li>
                        ))
                    }
                </ul>
                <div className='text-white flex items-center justify-center gap-10 mt-12 px-4 md:px-4 mb-10 md:mb-0'>
                    <span className='text-2xl cursor-pointer hover:text-[#F85559] duration-500'>< FaTwitter /></span>
                    <span className='text-2xl cursor-pointer hover:text-[#F85559] duration-500'>< FaFacebookF /></span>
                    <span className='text-2xl cursor-pointer hover:text-[#F85559] duration-500'>< FaYoutube /></span>
                    <span className='text-2xl cursor-pointer hover:text-[#F85559] duration-500'>< FaLinkedinIn /></span>
                    <span className='text-2xl cursor-pointer hover:text-[#F85559] duration-500'>< FaInstagram /></span>
                    <span className='text-2xl cursor-pointer hover:text-[#F85559] duration-500'>< FaApple /></span>
                </div>
            </div>
        </div>
    );
};

export default Footer;