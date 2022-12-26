import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Common/Footer/Footer';
import NavBar from '../../Pages/Common/NavBar/NavBar';
import { BodyBackground } from '../../Styles/Index';
const Main = () => {
    return (
        <BodyBackground>
            <NavBar/>
            <Outlet />
            <Footer/>
        </BodyBackground>
    );
};

export default Main;