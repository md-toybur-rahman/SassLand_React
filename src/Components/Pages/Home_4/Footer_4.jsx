import React from 'react';
import { Link } from 'react-router-dom';

const Footer_4 = () => {
    return (
        <footer className="pt-[50px] md:pt-[94px] px-[30px] lg:px-[150px] pb-[24px] bg-[#33302F]">
            <div className="flex flex-col md:flex-row md:justify-between gap-5 my-[56px]">
                <div className="max-w-[269px]">
                    <div className="">
                        <img className="w-[143px]" src="../../../../public/images/icons/home4-logo.svg" alt="" />
                    </div>
                    <div className="mt-6 mb-[42px]">
                        <p className="text-sm md:text-base text-white">With lots of unique blocks, you can easily build a
                            page
                            without
                            coding. Build your next landing page.</p>
                    </div>
                </div>
                <div>
                    <div className="mb-[42px]">
                        <h1 className="font-semibold text-white text-[20px] md:text-[24px]">Sign up for our newsletter</h1>
                        <div
                            className="p-[6px] border border-[#CED2DA] rounded-md max-w-[553px] lg:w-full flex justify-between items-center mt-6 bg-[#FFFFFF]">
                            <input className="outline-none text-xs md:text-sm font-medium px-2" type="email"
                                placeholder="what's your work email?" />
                            <button
                                className="py-2 md:py-[14px] w-[100px] md:w-[149px] bg-[#E35C30] text-sm md:text-base font-medium text-white rounded-md">Get
                                Started</button>
                        </div>
                    </div>
                    <div
                        className="flex flex-wrap md:flex-nowrap justify-between md:justify-start gap-10 md:gap-[55px] mt-10 md:mt-0">
                        <div>
                            <h1 className="font-semibold text-base text-white mb-4">Company</h1>
                            <ul className="flex flex-col gap-[6px] text-xs md:text-sm text-[#E7F3FF]">
                                <li><Link to="/Home_4/About_Us">About us</Link></li>
                                <li><Link to="/Home_4/Contact_Us">Contact us</Link></li>
                                <li><Link to="">Careers</Link></li>
                                <li><Link to="">Press</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h1 className="font-semibold text-base text-white mb-4">Product</h1>
                            <ul className="flex flex-col gap-[18px] text-xs md:text-sm text-[#E7F3FF]">
                                <li><Link to="">Features</Link></li>
                                <li><Link to="">Pricing</Link></li>
                                <li><Link to="">News</Link></li>
                                <li><Link to="">Help desk</Link></li>
                                <li><Link to="">Support</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h1 className="font-semibold text-base text-white mb-[25px]">Services</h1>
                            <ul className="flex flex-col gap-[6px] text-xs md:text-sm text-[#E7F3FF]">
                                <li><Link to="">Digital Marketing</Link></li>
                                <li><Link to="">Content Writing</Link></li>
                                <li><Link to="">SEO for Business</Link></li>
                                <li><Link to="">UI Design</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h1 className="font-semibold text-base text-white mb-[15px]">Legal</h1>
                            <ul className="flex flex-col gap-[6px] text-xs md:text-sm text-[#E7F3FF]">
                                <li><Link to="">Privacy Policy</Link></li>
                                <li><Link to="/Home_4/Trams_Conditions">Terms & Conditions</Link></li>
                                <li><Link to="">Return Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex text-sm items-center justify-center mt-[68px]">
                <p className="text-xs md:text-sm text-[#E8F3FF]">Copyright@ 2023 Sassland. All Right Reserved</p>
            </div>
        </footer>
    );
};

export default Footer_4;