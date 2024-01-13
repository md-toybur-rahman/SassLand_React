import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Home_4_Blog_Card = () => {
    const location = useLocation();
    return (
        <div>
            <div>
                <img data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="0"
                    data-aos-easing="ease-in-out" src="../../../public/images/Blog-image1.png" alt="" />
            </div>
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 mt-5">
                <div className="flex items-center gap-1">
                    <img src="../../../public/images/icons/calendar_clock.svg" alt="" />
                        <p className="text-sm text-[#EC9E85]">July 21, 2023</p>
                </div>
                <div className="flex items-center gap-1">
                    <img src="../../../public/images/icons/account_circle.svg" alt="" />
                        <p className="text-sm text-[#EC9E85]">John Smith</p>
                </div>
                <div className="flex items-center gap-1">
                    <img src="../../../public/images/icons/add_comment.svg" alt="" />
                        <p className="text-sm text-[#EC9E85]">2 Comments</p>
                </div>
            </div>
            <div className="max-w-[655px] mt-2">
                <h1 className="font-semibold text-[18px] md:text-[24px] text-[#262729] mb-3">How to Clean Your
                    Home
                    Faster and More Efficiently</h1>
                <p className="text-sm md:text-base text-[#646464] font-medium mb-[32px] md:leading-[24px]">Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat […]
                </p>
                {
                    location.pathname == '/Home_4/Blog' ?
                <Link to="/Home_4/Blog_Details">
                    <button
                        className="bg-[#E35C30] w-[170px] h-[44px] text-white text-base font-semibold rounded-full">See
                        all</button>
                </Link>
                : ''
                }
            </div>
        </div>
    );
};

export default Home_4_Blog_Card;