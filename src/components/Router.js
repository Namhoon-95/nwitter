import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import {useState} from "react";
import Home from '../routes/Home';
import Auth from '../routes/Auth';



function AppRouter() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    return (
        <BrowserRouter>
            <Routes>
                {isLoggedIn ?(
                    <Route exact path="/" element={<Home/>}/>
                ):(
                    <Route exact path="/" element={<Auth/>}/>
                )}
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;