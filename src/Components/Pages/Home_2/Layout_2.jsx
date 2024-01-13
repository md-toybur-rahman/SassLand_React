// import React from 'react';

import { Outlet } from "react-router-dom";
import Navbar_2 from "./Navbar_2";
import Footer_2 from "./Footer_2";
import { useEffect, useState } from "react";

const Layout_2 = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const scroll = window.scrollY;
        setScrollPosition(scroll);
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);
    return (
        <div className="overflow_hidden relative">
            <div>
                <Navbar_2></Navbar_2>
                <Outlet></Outlet>
                <Footer_2></Footer_2>
            </div>
            <div onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }} className={`rounded-full bg-[#FEEFED] p-2 cursor-pointer fixed bottom-10 right-10 z-50 ${scrollPosition < 1200 ? 'hidden' : ''}`}>
                <img src="../../../../public/images/icons/go-to-top.gif" alt="" />
            </div>
        </div>
    );
};

export default Layout_2;