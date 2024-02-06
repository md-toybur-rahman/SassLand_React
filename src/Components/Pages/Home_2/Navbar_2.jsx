import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar_2 = () => {
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
    return (
        <div>
            <section className={`${location.pathname == "/Home_2" ? 'home2-banner' : ''} bg-cover`}>
                <nav className="mx-6 md:mx-[70px] xl:mx-[150px] py-[18px] flex items-center justify-between">
                    {/* mobile menubar */}
                    <ul id="homeMenubar"
                        className="flex lg:hidden justify-center absolute top-14 -left-[1024px] duration-500 px-5 py-1 w-full items-center gap-4 md:gap-10 text-[14px] font-semibold text-[#2C2003]">
                        <li>
                            <div className="dropdown_parent">
                                <label className="">
                                    <div className="flex items-center gap-1">
                                        <div className="">Home </div>
                                        <img className="py-1 cursor-pointer" src="../../../../public/images/icons/arrow_black_drop_down.svg"
                                            alt="" />
                                    </div>
                                </label>
                                <ul className="dropdown_content absolute z-40 menu rounded-box w-40 bg-white px-2">
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
                                <label className="">
                                    <div className="flex items-center gap-1">
                                        <div className="">Pages </div>
                                        <img className="py-1 cursor-pointer" src="../../../../public/images/icons/arrow_black_drop_down.svg"
                                            alt="" />
                                    </div>
                                </label>
                                <ul className="dropdown_content absolute z-40 menu rounded-box w-40 bg-white px-2">
                                    <li><Link to="/Home_2/About_Us">About us</Link></li>
                                    <li><Link>Account</Link></li>
                                    <li><Link to="/Home_2/Pricing_Plans">Pricing plans</Link></li>
                                    <li><Link>Utility</Link></li>
                                    <li><Link to="/Home_2/Gallery">Gallery</Link></li>
                                    <li><Link to="/Home_2/ErrorPage">ErrorPage</Link></li>
                                    <li className="relative contact-variation-container">
                                        <div>Contact Us</div>
                                        <ul className="w-40 absolute mt-8 z-10 bg-white contact-variation">
                                            <li><Link to="/Home_2/Contact_Us">Contact Variation 1</Link></li>
                                            <li><Link to="/Home_2/Contact_Us_Variation">Contact Variation 2</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/Home_2/Blog">Blog</Link></li>
                                    <li><Link to="/Home_2/Trams_Conditions">Trams Conditions</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="dropdown_parent">
                                <label className="">
                                    <div className="flex items-center gap-1">
                                        <div className="">Components </div>
                                        <img className="py-1 cursor-pointer" src="../../../../public/images/icons/arrow_black_drop_down.svg"
                                            alt="" />
                                    </div>
                                </label>
                                <ul className="dropdown_content absolute z-40 menu rounded-box w-40 bg-white px-2">
                                    <li><Link>Components 1</Link></li>
                                    <li><Link>Components 2</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li className="p-2"><Link>Support</Link></li>
                    </ul>
                    {/* end mobile menubar */}
                    <div onClick={mobileMenubarHandler} className="lg:hidden cursor-pointer">
                        <img src="../../../../public/images/icons/align-justify-dark.svg" alt="" />
                    </div>
                    <Link to={location.pathname == "/Home_2" ? '/' : '/Home_2'} className="flex items-center gap-1">
                        <img className="w-[100px] md:w-auto" src="../../../../public/images/icons/Home2-logo.svg" alt="" />
                    </Link>
                    <ul className="hidden lg:flex items-center gap-2 md:gap-6 text-[14px] font-semibold text-[#2C2003]">
                        <li>
                            <div className="dropdown_parent">
                                <label className="">
                                    <div className="flex items-center gap-1">
                                        <div className="">Home </div>
                                        <img className="p-2 cursor-pointer" src="../../../../public/images/icons/arrow_black_drop_down.svg"
                                            alt="" />
                                    </div>
                                </label>
                                <ul className="dropdown_content absolute z-40 menu rounded-box w-40 bg-white px-2">
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
                                <label className="">
                                    <div className="flex items-center gap-1">
                                        <div className="">Pages </div>
                                        <img className="p-2 cursor-pointer" src="../../../../public/images/icons/arrow_black_drop_down.svg"
                                            alt="" />
                                    </div>
                                </label>
                                <ul className="dropdown_content absolute z-40 menu rounded-box w-40 bg-white px-2">
                                    <li><Link to="/Home_2/About_Us">About Us</Link></li>
                                    <li><Link>Account</Link></li>
                                    <li><Link to="/Home_2/Pricing_Plans">Pricing plans</Link></li>
                                    <li><Link>Utility</Link></li>
                                    <li><Link to="/Home_2/Gallery">Gallery</Link></li>
                                    <li><Link to="/Home_2/ErrorPage">ErrorPage</Link></li>
                                    <li className="relative contact-variation-container">
                                        <div>Contact Us</div>
                                        <ul className="w-48 absolute ms-14 mt-8 z-10 bg-white contact-variation text-sm rounded-box">
                                            <li><Link to="/Home_2/Contact_Us">Contact Variation 1</Link></li>
                                            <li><Link to="/Home_2/Contact_Us_Variation">Contact Variation 2</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/Home_2/Blog">Blog</Link></li>
                                    <li><Link to="/Home_2/Trams_Conditions">Trams Conditions</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="dropdown_parent">
                                <label className="">
                                    <div className="flex items-center gap-1">
                                        <div className="">Components </div>
                                        <img className="p-2 cursor-pointer" src="../../../../public/images/icons/arrow_black_drop_down.svg"
                                            alt="" />
                                    </div>
                                </label>
                                <ul className="dropdown_content absolute z-40 menu rounded-box w-40 bg-white px-2">
                                    <li><Link>Components 1</Link></li>
                                    <li><Link>Components 2</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li className="p-2"><Link>Support</Link></li>
                    </ul>
                    <div>
                        <Link to="/Home_2/Sign_In"
                            className="bg-[#FFB200] rounded-full text-[#2C2003] px-4 md:px-6 py-2 md:py-[13px] font-normal md:font-medium text-xs md:text-sm">Get
                            Started
                            Free</Link>
                    </div>
                </nav>
                {/* Banner Section */}
                {
                    location.pathname == "/Home_2" ?
                        <section className="lg:pt-[51px] pb-[69px] lg:flex items-center gap-[54px] lg:me-[70px] xl:me-[150px]">
                            <div
                                className="flex justify-start mt-10 lg:block lg:mt-0 w-full lg:w-[50%] h-[200px] md:h-[361px] rounded-e-xl relative lg:min-w-[600px]">
                                <img className="absolute right-6 top-[37px] w-[300px] md:w-auto" src="../../../../public/images/Group 361.svg" alt="" />
                            </div>
                            <div className="lg:max-w-[558px] mt-20 lg:mt-0 px-5">
                                <div className="relative flex items-end gap-6 max-w-[479px] mb-[50px] lg:mb-[133px]">
                                    <img className="hidden lg:block absolute -left-32" src="../../../../public/images/icons/Group 233.svg" alt="" />
                                    <div>
                                        <h1 className="text-sm md:text-base text-[#6A26DA] font-medium">Meetings from anywhere</h1>
                                        <p className="max-w-[346px] text-xs md:text-sm text-[#676769] mt-3">We share
                                            common
                                            trends and strategies for improving your rental income.</p>
                                    </div>
                                </div>
                                <h1 className="font-bold text-[#25373F] text-[36px] xl:text-[48px] mb-12">Organize any project and team</h1>
                                <button
                                    className="bg-[#6A26DA] rounded-full text-white px-9 md:px-9 py-4 md:py-[18px] font-normal md:font-semibold text-sm md:text-base">Get
                                    Started Free</button>
                            </div>
                        </section>
                        : ''
                }
                {/* End Banner Section */}
            </section>
            {/* End Menubar and Banner Section */}
        </div>
    );
};

export default Navbar_2;