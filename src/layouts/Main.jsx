import React from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import Banner from '../banner/Banner';
import Home from '../pages/Home/Home/Home';
import { Outlet } from 'react-router-dom';


const Main = () => {
    return (
        <div>
           <Header></Header> 
           <Home></Home>
           <Outlet></Outlet>
          
           <Footer></Footer>
        </div>
    );
};

export default Main;