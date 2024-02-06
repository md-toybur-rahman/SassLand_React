import React from 'react';
import { Link } from 'react-router-dom';

const Footer_2 = () => {
    return (
        <div className='max-w-[1137px] mx-auto mb-[60px]'>
            <footer className="mt-[100px] md:mt-[152px]">
                <div className="flex flex-col md:flex-row gap-3 items-center justify-between mb-6 px-5">
                    <div className="md:hidden">
                        <img src="../../../../public/images/icons/align-justify.svg" alt="" />
                    </div>
                    <div className="flex items-center gap-1">
                        <img className="w-[120px] md:w-auto" src="../../../../public/images/icons/home2-logo.svg" alt="" />
                    </div>
                    <ul className="flex items-center gap-2 md:gap-6 text-[14px] font-semibold text-[#25373F]">
                        <li>
                            <div className="dropdown_parent relative">
                                <label className="">
                                    <div className="flex items-center gap-1">
                                        <Link className="">Home </Link>
                                        <img className="p-2 cursor-pointer" src="../../../../public/images/icons/arrow_black_drop_down.svg"
                                            alt="" />
                                    </div>
                                </label>
                                <ul className="dropdown_content absolute bottom-6 z-40 rounded-box w-56 bg-white px-2">
                                    <div className='menu grid grid-cols-2 gap-2 w-56'>
                                        <li><Link to="/Home_1">Home 1</Link></li>
                                        <li><Link to="/Home_2">Home 2</Link></li>
                                        <li><Link to="/Home_3">Home 3</Link></li>
                                        <li><Link to="/Home_4">Home 4</Link></li>
                                        <li><Link to="/Home_5">Home 5</Link></li>
                                    </div>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="dropdown_parent relative">
                                <label className="home2-footer-page-label">
                                    <div className="flex items-center gap-1">
                                        <Link className="">Pages </Link>
                                        <img className="p-2 cursor-pointer" src="../../../../public/images/icons/arrow_black_drop_down.svg"
                                            alt="" />
                                    </div>
                                </label>
                                <ul
                                    className="dropdown_content absolute bottom-6 z-40 menu rounded-box w-[275px] md:w-[400px] bg-white px-2 home2-footer-page-ul grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-5">
                                    <div className='menu grid grid-cols-2 md:grid-cols-3 gap-2 w-[275px] md:w-[400px]'>
                                        <li><Link to="/Home_2/About_Us">About Us</Link></li>
                                        <li><Link>Account</Link></li>
                                        <li><Link to="/Home_2/Pricing_Plans">Pricing plans</Link></li>
                                        <li><Link>Utility</Link></li>
                                        <li><Link to="/Home_2/Gallery">Gallery</Link></li>
                                        <li><Link to="/Home_2/ErrorPage">404</Link></li>
                                        <li className="relative contact-variation-container">
                                            <Link>Contact Us</Link>
                                            <ul className="w-48 absolute mt-8 z-10 bg-white contact-variation">
                                                <li><Link to="/Home_2/Contact_Us">Contact Variation 1</Link></li>
                                                <li><Link to="/Home_2/Contact_Us_Variation">Contact Variation 2</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link>Blog</Link></li>
                                    </div>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="dropdown_parent relative">
                                <label className="">
                                    <div className="flex items-center gap-1">
                                        <Link className="">Components </Link>
                                        <img className="p-2 cursor-pointer" src="../../../../public/images/icons/arrow_black_drop_down.svg"
                                            alt="" />
                                    </div>
                                </label>
                                <ul className="dropdown_content absolute bottom-6 z-40 menu rounded-box w-40 bg-white px-2">
                                    <li><Link>Components 1</Link></li>
                                    <li><Link>Components 2</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li className="p-2"><Link>Support</Link></li>
                    </ul>
                </div>
                <div
                    className="pt-10 flex flex-col md:flex-row gap-5 justify-between items-center border-t border-[#E5E8E8] px-5">
                    <div>
                        <p className="text-xs md:text-sm text-[#484848]">© 2021 Fastland By FinestDevs. All Rights Reserved</p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <Link><img src="../../../../public/images/icons/Facebook.svg" alt="" /></Link>
                        <Link><img src="../../../../public/images/icons/twitter.svg" alt="" /></Link>
                        <Link><img src="../../../../public/images/icons/linkedin.svg" alt="" /></Link>
                        <Link><img src="../../../../public/images/icons/instagram.svg" alt="" /></Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer_2;