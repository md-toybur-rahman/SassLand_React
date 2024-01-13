import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Home_1_Blog_Card = (props) => {
    const location = useLocation();
    return (
        <div className={` ${location.pathname == '/Home_1/Blog' ? 'blog-card px-[11px] pt-2 pb-7 rounded-lg max-w-[364px]' : 'card px-[11px] pt-[11px] pb-[39px] border border-[#D9D9D9] rounded-lg max-w-[364px] mx-auto'}`}>
            <div className={`${location.pathname == "/Home_1/Gallery" ? 'h-[218px]' : 'h-[162px]'}  rounded-lg `}>
                <img className="w-full h-full overflow-hidden" src={props.image} alt="" />
            </div>
            <div className="ps-[14px] pt-6">
                <h2 className="text-[9px] md:text-[11px] text-[#6A26DA] font-semibold mb-3">Everything</h2>
                <h1 className="text-[#212121] text-lg md:text-[24px] font-bold md:leading-[36px]">{props.title}</h1>
                <Link to="/Home_1/Blog_Details">
                    <h2 className="text-xs md:text-sm text-[#6A26DA] font-semibold mt-6">Read More</h2>
                </Link>
            </div>
        </div>
    );
};

export default Home_1_Blog_Card;