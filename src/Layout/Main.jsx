import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import NavBar from '../pages/Shared/NavBar/NavBar';

const Main = () => {
    const location = useLocation();
    console.log(location);
    const noHeaderFooter = location.pathname.includes('login')
    return (
        <div className='grid grid-rows-[1fr_auto] min-h-screen'>
           {noHeaderFooter || <NavBar/>}
            <Outlet/> 
            {noHeaderFooter || <Footer/>}
        </div>
    );
};

export default Main;