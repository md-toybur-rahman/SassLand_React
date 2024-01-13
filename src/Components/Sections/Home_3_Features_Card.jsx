import React from 'react';
import { Link } from 'react-router-dom';

const Home_3_Features_Card = (props) => {
    return (
        <div
            className="max-w-[327px] flex gap-6 justify-between">
            <div className="w-[84px] h-[84px]">
                <img className="h-full w-full" src={props.image} alt="" />
            </div>
            <div className="max-w-[219px]">
                <h1 className="text-lg md:text-2xl font-semibold text-[#25373F] mb-4">{props.title}</h1>
                <p className="text-sm md:text-base text-[#676769] mb-[27px]">There are many variations passages of
                    Lorem
                    lpsum
                    majority, some words don’t look believable if you are going to use.</p>
                <Link className="text-sm md:text-base font-semibold flex items-center gap-2 text-[#FF6AC2]"
                    href="#">Get Started <img src="../../../public/images/icons/pink-arrow.svg" alt="" /></Link>
            </div>
        </div>
    );
};

export default Home_3_Features_Card;