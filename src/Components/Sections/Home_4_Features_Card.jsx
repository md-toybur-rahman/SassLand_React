import React from 'react';
import { Link } from 'react-router-dom';

const Home_4_Features_Card = (props) => {
    return (
        <div className="px-[24px] pt-[68px] pb-[44px] max-w-[343px] bg-white border border-[#EDEDED] rounded-2xl">
            <img className="mb-8 max-w-[126px]" src={props.image} alt="" />
            <h1 className="text-lg md:text-2xl font-semibold text-[#14202D] mb-6">{props.title}</h1>
            <p className="text-sm md:text-base text-[#74889C] leading-[22.7px] mb-[52px]">Amet minim mollit non
                deserunt ullamco est
                sit aliqua dolor do amet sint velit of a </p>
            <Link className="text-xs md:text-sm py-[11px] rounded-full border border-[#E35C30] font-normal flex items-center justify-center text-[#E35C30] max-w-[273px]"
                href="#">Get Started</Link>
        </div>
    );
};

export default Home_4_Features_Card;