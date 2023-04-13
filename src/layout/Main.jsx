import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Main = () => {
    return (
        <div style={{display:'flex', flexDirection:'column', justifyContent: 'center', alignItems:'center'}}>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;