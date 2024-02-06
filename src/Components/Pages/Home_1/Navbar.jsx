// import React from 'react';

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {

    const [activeNavbar, setActiveNavbar] = useState(false);
    function navbarClicked() {
        useEffect(() => {
            if (!activeNavbar) {
                setActiveNavbar(true);
            }
            else {
                setActiveNavbar(false)
            }
        }, [])
    }
    const mobileMenubarHandler = () => {
        const menubar = document.getElementById('homeMenubar');
        if (!menubar.classList.contains('left-0')) {
            menubar.classList.remove('-left-[1024px]');
            menubar.classList.add('left-0');
        }
        else {
            menubar.classList.remove('left-0');
            menubar.classList.add('-left-[1024px]');
        }
    }
    const location = useLocation();
    // console.log(location.pathname.includes('Home_1'));
    return (
        <div>
            <section className={`${location.pathname == "/Home_1" ? 'bg-[url(../../../../public/images/home1-banner.svg)] bg-cover' : ''}`}>
                <nav className="mx-6 md:mx-[70px] xl:mx-[150px] py-[18px] flex items-center justify-between">
                    {/* mobile menubar */}
                    <ul id="homeMenubar"
                        className={`flex lg:hidden justify-center absolute top-14 -left-[1024px] duration-500 px-5 py-1 w-full items-center gap-4 md:gap-10 text-[14px] font-semibold ${location.pathname == "/Home_1" ? 'text-white' : 'text-[#262729]'} `}>
                        <li>
                            <div className="dropdown_parent">
                                <div className="">
                                    <div className="flex items-center gap-1">
                                        <h1 className="">Home </h1>
                                        {
                                            location.pathname == "/Home_1" ?
                                                <img className="py-1 cursor-pointer" src="../../../../public/images/icons/arrow_drop_down.svg" alt="" />
                                                : <img className="py-1 cursor-pointer" src="../../../../public/images/icons/arrow_black_drop_down.svg" alt="" />

                                        }
                                    </div>
                                </div>
                                <ul className={`dropdown_content absolute z-40 menu rounded-box w-40 ${location.pathname == "/Home_1" ? 'bg-[#6A26DA]' : 'bg-white'}  px-2`}>
                                    <li><Link to="/Home_1">Home 1</Link></li>
                                    <li><Link to="/Home_2">Home 2</Link></li>
                                    <li><Link to="/Home_3">Home 3</Link></li>
                                    <li><Link to="/Home_4">Home 4</Link></li>
                                    <li><Link to="/Home_5">Home 5</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="dropdown_parent">
                                <div className="">
                                    <div className="flex items-center gap-1">
                                        <h1 className="">Pages </h1>
                                        {
                                            location.pathname == "/Home_1" ?
                                                <img className="py-1 cursor-pointer" src="../../../../public/images/icons/arrow_drop_down.svg" alt="" />
                                                : <img className="py-1 cursor-pointer" src="../../../../public/images/icons/arrow_black_drop_down.svg" alt="" />

                                        }
                                    </div>
                                </div>
                                <ul className={`dropdown_content absolute z-40 menu rounded-box w-40 ${location.pathname == "/Home_1" ? 'bg-[#6A26DA]' : 'bg-white'}  px-2`}>
                                    <li><Link to="/Home_1/About_Us">About Us</Link></li>
                                    <li><Link to="/Home_1/Blog">Blog</Link></li>
                                    <li><Link to="">Account</Link></li>
                                    <li><Link to="/Home_1/Pricing_Plans">Pricing plans</Link></li>
                                    <li><Link to="">Utility</Link></li>
                                    <li><Link to="/Home_1/Gallery">Gallery</Link></li>
                                    <li><Link to="/Home_1/ErrorPage">ErrorPage</Link></li>
                                    <li><Link to="/Home_1/Contact_Us">Contact us</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="dropdown_parent">
                                <div className="">
                                    <div className="flex items-center gap-1">
                                        <h1 className="">Components </h1>
                                        {
                                            location.pathname == "/Home_1" ?
                                                <img className="py-1 cursor-pointer" src="../../../../public/images/icons/arrow_drop_down.svg" alt="" />
                                                : <img className="py-1 cursor-pointer" src="../../../../public/images/icons/arrow_black_drop_down.svg" alt="" />

                                        }
                                    </div>
                                </div>
                                <ul className={`dropdown_content absolute z-40 menu rounded-box w-40 ${location.pathname == "/Home_1" ? 'bg-[#6A26DA]' : 'bg-white'}  px-2`}>
                                    <li><Link to="">Components 1</Link></li>
                                    <li><Link to="">Components 2</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li className="p-2"><Link to="">Support</Link></li>
                    </ul>
                    {/* end mobile menubar */}
                    <div onClick={mobileMenubarHandler} className="lg:hidden cursor-pointer">
                        {
                            location.pathname == "/Home_1" ?
                                <img src="../../../../public/images/icons/align-justify.svg" alt="" />
                                : <img src="../../../../public/images/icons/align-justify-dark.svg" alt="" />
                        }

                    </div>
                    <Link to={location.pathname == "/Home_1" ? '/' : '/Home_1'}>
                        {
                            location.pathname == "/Home_1" ?
                                <img className="w-[100px] md:w-auto" src="../../../../public/images/icons/light-logo.svg" alt="" />
                                : <img className="w-[100px] md:w-auto" src="../../../../public/images/icons/dark-logo.svg" alt="" />
                        }

                    </Link>
                    <ul className={`hidden lg:flex items-center gap-2 md:gap-6 text-[14px] font-semibold ${location.pathname == "/Home_1" ? 'text-white' : 'text-[#262729]'} `}>
                        <li>
                            <div className="dropdown_parent">
                                <div className="">
                                    <div className="flex items-center gap-1">
                                        <h1 className="">Home </h1>
                                        {
                                            location.pathname == "/Home_1" ?
                                                <img className="p-2 cursor-pointer" src="../../../../public/images/icons/arrow_drop_down.svg" alt="" />
                                                : <img className="p-2 cursor-pointer" src="../../../../public/images/icons/arrow_black_drop_down.svg" alt="" />

                                        }
                                    </div>
                                </div>
                                <ul className={`dropdown_content absolute z-40 menu rounded-box w-40 ${location.pathname == "/Home_1" ? 'bg-[#6A26DA]' : 'bg-white'}  px-2`}>
                                    <li><Link to="/Home_1">Home 1</Link></li>
                                    <li><Link to="/Home_2">Home 2</Link></li>
                                    <li><Link to="/Home_3">Home 3</Link></li>
                                    <li><Link to="/Home_4">Home 4</Link></li>
                                    <li><Link to="/Home_5">Home 5</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="dropdown_parent">
                                <div className=" cursor-pointer">
                                    <div className="flex items-center gap-1">
                                        <h1 className="">Pages </h1>
                                        {
                                            location.pathname == "/Home_1" ?
                                                <img className="p-2 cursor-pointer" src="../../../../public/images/icons/arrow_drop_down.svg" alt="" />
                                                : <img className="p-2 cursor-pointer" src="../../../../public/images/icons/arrow_black_drop_down.svg" alt="" />

                                        }
                                    </div>
                                </div>
                                <ul className={`dropdown_content absolute z-40 menu rounded-box w-40 ${location.pathname == "/Home_1" ? 'bg-[#6A26DA]' : 'bg-white'}  px-2`}>
                                    <li><Link to="/Home_1/About_Us">About Us</Link></li>
                                    <li><Link to="/Home_1/Blog">Blog</Link></li>
                                    <li><Link to="">Account</Link></li>
                                    <li><Link to="/Home_1/Pricing_Plans">Pricing plans</Link></li>
                                    <li><Link to="">Utility</Link></li>
                                    <li><Link to="/Home_1/Gallery">Gallery</Link></li>
                                    <li><Link to="/Home_1/ErrorPage">ErrorPage</Link></li>
                                    <li><Link to="/Home_1/Contact_Us">Contact us</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="dropdown_parent">
                                <div className="">
                                    <div className="flex items-center gap-1">
                                        <h1 className="">Components </h1>
                                        {
                                            location.pathname == "/Home_1" ?
                                                <img className="p-2 cursor-pointer" src="../../../../public/images/icons/arrow_drop_down.svg" alt="" />
                                                : <img className="p-2 cursor-pointer" src="../../../../public/images/icons/arrow_black_drop_down.svg" alt="" />

                                        }
                                    </div>
                                </div>
                                <ul className={`dropdown_content absolute z-40 menu rounded-box w-40 ${location.pathname == "/Home_1" ? 'bg-[#6A26DA]' : 'bg-white'}  px-2`}>
                                    <li><Link to="">Components 1</Link></li>
                                    <li><Link to="">Components 2</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li className="p-2"><Link to="">Support</Link></li>
                    </ul>
                    <div>
                        <Link to="/Home_1/Sign_In" className={`${location.pathname == "/Home_1" ? 'bg-white text-[#25373F]' : 'bg-[#6A26DA] text-white'} rounded-md  px-4 md:px-6 py-2 md:py-[13px] font-medium text-xs md:text-sm`}>Get
                            Started
                            Free</Link>
                    </div>
                </nav>

                {
                    location.pathname == "/Home_1" ?
                        <section className="pt-[51px] pb-[69px] lg:flex items-center justify-between ms-6 md:ms-[70px] xl:ms-[150px]">
                            <div className="lg:max-w-[590px]">
                                <h1
                                    className="font-bold text-white text-[24px] sm:text-[36px] lg:text-[57px] text-center md:text-start mb-6">
                                    Made for
                                    people.
                                    <span className="text-[#FCB900]">Built for productivity.</span>
                                </h1>
                                <p
                                    className="text-lg md:text-xl lg:text-2xl font-medium text-[#E9EBEB] text-center md:text-start mb-12 lg:max-w-[558px]">
                                    The first
                                    data tool you will
                                    love. And the
                                    last one you will ever need.</p>
                                <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-start items-center gap-4">
                                    <button
                                        className="bg-white rounded-md text-[#25373F] w-full max-w-[236px] py-4 md:py-[18px] font-semibold text-sm md:text-base">Get
                                        Started Free</button>
                                    <button
                                        className="bg-transparent border border-[#A67DE9] rounded-md text-white w-full max-w-[236px] py-4 md:py-[18px] font-medium text-sm md:text-base">Learn
                                        More</button>
                                </div>
                            </div>
                            <div className="flex justify-end mt-10 lg:block lg:mt-0">
                                <img src="../../../../public/images/Dashboard.svg" alt="" />
                            </div>
                        </section>
                        : ''
                }

            </section>
            {/* End Menubar and Banner Section */}
        </div>
    );
};

export default Navbar;