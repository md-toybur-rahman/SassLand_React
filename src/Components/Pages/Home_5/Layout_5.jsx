import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar_5 from './Navbar_5';
import Footer_5 from './Footer_5';

const Layout_5 = () => {
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
        <div className={`${location.pathname == '/Home_4/Blog_Details' ? 'bg-[#F8F8FA]' : ''} overflow-hidden relative`}>
            <div>
                <Navbar_5></Navbar_5>
                <Outlet></Outlet>
				<Footer_5></Footer_5>
            </div>
            <div onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }} className={`rounded-full bg-[#FEEFED] p-2 cursor-pointer fixed bottom-10 right-10 z-50 ${scrollPosition < 1200 ? 'hidden' : ''}`}>
                <img src="../../../../public/images/icons/go-to-top.gif" alt="" />
            </div>
        </div>
    );
};

export default Layout_5;