import React from 'react';
import Header from '../Shared/Header/Header';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;