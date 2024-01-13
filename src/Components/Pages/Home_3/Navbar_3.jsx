import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar_3 = () => {
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
            {
                location.pathname == "/Home_3" ?
                    <img className="w-full min-h-[400px] max-h-[923px] absolute top-0 -z-10" src="../../../../public/images/Group-620.png" alt="" />
                    : ''
            }

            <div>
                <section>
                    <nav className="mx-6 md:mx-[70px] xl:mx-[150px] py-[18px] flex items-center justify-between">
                        {/* mobile menubar */}
                        <ul id="homeMenubar"
                            className={`flex lg:hidden justify-center absolute top-14 -left-[1024px] duration-500 px-5 py-1 w-full items-center gap-4 md:gap-10 text-[14px] font-semibold ${location.pathname == "/Home_3" ? 'text-[#E1E1FF]' : 'text-[#262729]'} `}>
                            <li>
                                <div className="dropdown_parent">
                                    <div className="">
                                        <div className="flex items-center gap-1">
                                            <h1 className="">Home </h1>
                                            {
                                                location.pathname == "/Home_3" ?
                                                    <img className="py-1 cursor-pointer" src="../../../../public/images/icons/arrow_drop_down.svg" alt="" />
                                                    : <img className="py-1 cursor-pointer" src="../../../../public/images/icons/arrow_black_drop_down.svg" alt="" />

                                            }
                                        </div>
                                    </div>
                                    <ul className={`dropdown_content absolute z-40 menu rounded-box w-40 ${location.pathname == "/Home_3" ? 'bg-[#2E2E52]' : 'bg-white'}  px-2`}>
                                        <li><Link to="/Home_1">Home 1</Link></li>
                                        <li><Link to="/Home_2">Home 2</Link></li>
                                        <li><Link to="/Home_3">Home 3</Link></li>
                                        <li><Link to="/Home_4">Home 4</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="dropdown_parent">
                                    <div className="">
                                        <div className="flex items-center gap-1">
                                            <h1 className="">Pages </h1>
                                            {
                                                location.pathname == "/Home_3" ?
                                                    <img className="py-1 cursor-pointer" src="../../../../public/images/icons/arrow_drop_down.svg" alt="" />
                                                    : <img className="py-1 cursor-pointer" src="../../../../public/images/icons/arrow_black_drop_down.svg" alt="" />

                                            }
                                        </div>
                                    </div>
                                    <ul className={`dropdown_content absolute z-40 menu rounded-box w-40 ${location.pathname == "/Home_3" ? 'bg-[#2E2E52]' : 'bg-white'}  px-2`}>
                                        <li><Link to="/Home_3/About_Us">About Us</Link></li>
                                        <li><Link to="/Home_3/Blog">Blog</Link></li>
                                        <li><Link to="">Account</Link></li>
                                        <li><Link to="/Home_3/Pricing_Plans">Pricing plans</Link></li>
                                        <li><Link to="">Utility</Link></li>
                                        <li><Link to="/Home_3/Gallery">Gallery</Link></li>
                                        <li><Link to="/Home_3/ErrorPage">ErrorPage</Link></li>
                                        <li><Link to="/Home_3/Contact_Us">Contact us</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="dropdown_parent">
                                    <div className="">
                                        <div className="flex items-center gap-1">
                                            <h1 className="">Components </h1>
                                            {
                                                location.pathname == "/Home_3" ?
                                                    <img className="py-1 cursor-pointer" src="../../../../public/images/icons/arrow_drop_down.svg" alt="" />
                                                    : <img className="py-1 cursor-pointer" src="../../../../public/images/icons/arrow_black_drop_down.svg" alt="" />

                                            }
                                        </div>
                                    </div>
                                    <ul className={`dropdown_content absolute z-40 menu rounded-box w-40 ${location.pathname == "/Home_3" ? 'bg-[#2E2E52]' : 'bg-white'}  px-2`}>
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
                                location.pathname == "/Home_3" ?
                                    <img src="../../../../public/images/icons/align-justify.svg" alt="" />
                                    : <img src="../../../../public/images/icons/align-justify-dark.svg" alt="" />
                            }

                        </div>
                        <Link to={location.pathname == "/Home_3" ? '/' : '/Home_3'}>
                            {
                                location.pathname == "/Home_3" ?
                                    <img className="w-[100px] md:w-auto" src="../../../../public/images/icons/light-logo.svg" alt="" />
                                    : <img className="w-[100px] md:w-auto" src="../../../../public/images/icons/dark-logo.svg" alt="" />
                            }

                        </Link>
                        <ul className={`hidden lg:flex items-center gap-2 md:gap-6 text-[14px] font-semibold ${location.pathname == "/Home_3" ? 'text-[#E1E1FF]' : 'text-[#262729]'} `}>
                            <li>
                                <div className="dropdown_parent">
                                    <div className="">
                                        <div className="flex items-center gap-1">
                                            <h1 className="">Home </h1>
                                            {
                                                location.pathname == "/Home_3" ?
                                                    <img className="p-2 cursor-pointer" src="../../../../public/images/icons/arrow_drop_down.svg" alt="" />
                                                    : <img className="p-2 cursor-pointer" src="../../../../public/images/icons/arrow_black_drop_down.svg" alt="" />

                                            }
                                        </div>
                                    </div>
                                    <ul className={`dropdown_content absolute z-40 menu rounded-box w-40 ${location.pathname == "/Home_3" ? 'bg-[#2E2E52]' : 'bg-white'}  px-2`}>
                                        <li><Link to="/Home_1">Home 1</Link></li>
                                        <li><Link to="/Home_2">Home 2</Link></li>
                                        <li><Link to="/Home_3">Home 3</Link></li>
                                        <li><Link to="/Home_4">Home 4</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="dropdown_parent">
                                    <div className="">
                                        <div className="flex items-center gap-1">
                                            <h1 className="">Pages </h1>
                                            {
                                                location.pathname == "/Home_3" ?
                                                    <img className="p-2 cursor-pointer" src="../../../../public/images/icons/arrow_drop_down.svg" alt="" />
                                                    : <img className="p-2 cursor-pointer" src="../../../../public/images/icons/arrow_black_drop_down.svg" alt="" />

                                            }
                                        </div>
                                    </div>
                                    <ul className={`dropdown_content absolute z-40 menu rounded-box w-40 ${location.pathname == "/Home_3" ? 'bg-[#2E2E52]' : 'bg-white'}  px-2`}>
                                        <li><Link to="/Home_3/About_Us">About Us</Link></li>
                                        <li><Link to="/Home_3/Blog">Blog</Link></li>
                                        <li><Link to="">Account</Link></li>
                                        <li><Link to="/Home_3/Pricing_Plans">Pricing plans</Link></li>
                                        <li><Link to="">Utility</Link></li>
                                        <li><Link to="/Home_3/Gallery">Gallery</Link></li>
                                        <li><Link to="/Home_3/ErrorPage">ErrorPage</Link></li>
                                        <li><Link to="/Home_3/Contact_Us">Contact us</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="dropdown_parent">
                                    <div className="">
                                        <div className="flex items-center gap-1">
                                            <h1 className="">Components </h1>
                                            {
                                                location.pathname == "/Home_3" ?
                                                    <img className="p-2 cursor-pointer" src="../../../../public/images/icons/arrow_drop_down.svg" alt="" />
                                                    : <img className="p-2 cursor-pointer" src="../../../../public/images/icons/arrow_black_drop_down.svg" alt="" />

                                            }
                                        </div>
                                    </div>
                                    <ul className={`dropdown_content absolute z-40 menu rounded-box w-40 ${location.pathname == "/Home_3" ? 'bg-[#2E2E52]' : 'bg-white'}  px-2`}>
                                        <li><Link to="">Components 1</Link></li>
                                        <li><Link to="">Components 2</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="p-2"><Link to="">Support</Link></li>
                        </ul>
                        <div>
                            <Link to="/Home_3/Sign_In" className={`bg-[#FE79A1] text-white rounded-md  px-4 md:px-6 py-2 md:py-[13px] font-medium className="xs md:className="sm`}>Get
                                Started
                                Free</Link>
                        </div>
                    </nav>

                    {
                        location.pathname == "/Home_3" ?
                            <section
                                className="pt-5 md:pt-[50px] lg:pt-[104px] pb-5 md:pb-[50px] lg:flex items-center justify-between mx-6 md:mx-[70px] xl:mx-[150px]">
                                <div className="flex flex-col items-center justify-center w-full">
                                    <div className="max-w-[703px] text-center">
                                        <h1 className="font-bold text-white text-[24px] md:text-[36px] lg:text-[57px] mb-8">Organize
                                            your
                                            work and life,
                                            finally.</h1>
                                        <p className="text-sm md:text-base lg:text-lg font-medium text-[#E9EBEB]">Clarity gives
                                            you
                                            the blocks & components you need to create a truly professional website, landing page or
                                            admin panel for SaaS</p>
                                    </div>
                                </div>
                            </section>
                            : ''
                    }
                </section>
                {
                    location.pathname == "/Home_3" ?
                        <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="0"
                            className="flex items-center justify-center px-[30px] lg:px-0">
                            <img className="w-[450px] md:w-auto" src="../../../../public/images/Dashboard13.svg" alt="" />
                        </div>
                        : ''
                }
                {/* End Menubar and Banner Section */}
            </div>
        </div>
    );
};

export default Navbar_3;