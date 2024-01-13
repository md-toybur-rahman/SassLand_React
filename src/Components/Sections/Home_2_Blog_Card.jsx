import React from 'react';
import { Link } from 'react-router-dom';

const Home_2_Blog_Card = () => {
    return (
        <div className="card px-[9px] pt-[9px] pb-[30px] max-w-[364px]">
            <div className="h-[196px] rounded-lg">
                <img className="w-full h-full overflow-hidden" src="../../../public/images/home2-blog-img.png" alt="" />
            </div>
            <div className="ps-[7px] pt-6">
                <h2 className="text-[9px] md:text-[11px] text-[#FFB200] font-semibold mb-6">Everything</h2>
                <h1 className="text-[#2C2003] text-lg md:text-[29px] font-bold md:leading-[43.5px]">Top Slack tips to
                    boost productivity</h1>
                <p className="max-w-[259px] text-sm font-medium text-[#392904] mt-[9px]">We partner closely with the
                    most progressive companies in the world to improve</p>
                <Link to="/Home_2/Blog_Details" className="flex items-center gap-2 mt-6">
                    <h2 className="text-xs md:text-sm text-[#F9C242] font-semibold">Read More</h2>
                    <img src="../../../public/images/icons/yellow-right-arrow.svg" alt="" />
                </Link>
            </div>
        </div>
    );
};

export default Home_2_Blog_Card;