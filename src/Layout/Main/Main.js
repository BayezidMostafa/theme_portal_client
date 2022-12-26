import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Common/Footer/Footer';
import NavBar from '../../Pages/Common/NavBar/NavBar';
const Main = () => {
    return (
        <div>
            <NavBar/>
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Main;