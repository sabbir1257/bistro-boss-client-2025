import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import NavBar from '../pages/Shared/NavBar/NavBar';

const Main = () => {
    return (
        <div className='grid grid-rows-[1fr_auto] min-h-screen'>
            <NavBar/>
            <Outlet/> 
            <Footer/>
        </div>
    );
};

export default Main;