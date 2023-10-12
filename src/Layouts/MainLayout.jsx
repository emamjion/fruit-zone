import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';

const MainLayout = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register'); 
    
    return (
        <div>
            {noHeaderFooter || <Header/>}
            <Outlet/>
            {noHeaderFooter || <Footer/>}
        </div>
    );
};

export default MainLayout;