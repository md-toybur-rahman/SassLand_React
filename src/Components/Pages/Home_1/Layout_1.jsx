// import React from 'react';

import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer_1 from "./Footer_1";
import { useEffect, useState } from "react";

const Layout_1 = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const scroll = window.scrollY;
        setScrollPosition(scroll);
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);
    return (
        <div className="overflow-hidden relative">
            <div>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer_1></Footer_1>
            </div>
            <div onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }} className={`rounded-full bg-[#FEEFED] p-2 cursor-pointer fixed bottom-10 right-10 z-50 ${scrollPosition < 1200 ? 'hidden' : ''}`}>
                <img src="../../../../public/images/icons/go-to-top.gif" alt="" />
            </div>
        </div>
    );
};

export default Layout_1;