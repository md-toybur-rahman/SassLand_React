import React, { useEffect, useState } from 'react';
import Navbar_3 from './Navbar_3';
import { Outlet, useLocation } from 'react-router-dom';
import Footer_3 from './Footer_3';

const Layout_3 = () => {
    const location = useLocation();
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const scroll = window.scrollY;
        setScrollPosition(scroll);
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);
    return (
        <div className={`${location.pathname != "/Home_3" ? "bg-[url('../../../../public/images/home3-banner.png')] bg-local bg-top bg-no-repeat" : ''} overflow-hidden relative`}>
            <div>
                <Navbar_3></Navbar_3>
                <Outlet></Outlet>
                <Footer_3></Footer_3>
            </div>
            <div onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }} className={`rounded-full bg-[#FEEFED] p-2 cursor-pointer fixed bottom-10 right-10 z-50 ${scrollPosition < 1200 ? 'hidden' : ''}`}>
                <img src="../../../../public/images/icons/go-to-top.gif" alt="" />
            </div>
        </div>
    );
};

export default Layout_3;