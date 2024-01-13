import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Features_Card = (props) => {
    const location = useLocation();
    return (
        <div>
            {
                location.pathname == "/Home_1" ?
                    <div className="p-4 md:p-6 border border-[#E4E7E7] rounded-lg max-w-[366px] features-card">
                        <div className="h-[197px] rounded-lg">
                            <img className="w-full h-full overflow-hidden" src={props.image} alt="" />
                        </div>
                        <div>
                            <h2 className="text-xs md:text-sm text-[#6A26DA] font-semibold mb-2 mt-4">{props.title}</h2>
                            <p className="text-[#25373F] text-sm md:text-base font-semibold">{props.designation}</p>
                        </div>
                    </div>
                    : ''
            }

            {
                location.pathname == "/Home_2" ?
                    <div className="px-[27px] pt-[27px] pb-[53px] max-w-[361px] bg-white border border-[#E6E9E9] rounded-2xl">
                        <img className="mb-7" src={props.image} alt="" />
                        <h1 className="text-lg md:text-2xl font-semibold text-[#25373F] mb-4">{props.title}</h1>
                        <p className="text-sm md:text-base text-[#676769] mb-[27px]">There are many variations passages of Lorem
                            lpsum
                            majority, some words don’t look believable if you are going to use.</p>
                        <Link className="text-sm md:text-base font-bold md:font-normal flex items-center gap-2 text-[#6A26DA]"
                        >Get Started <img src="../../../public/images/icons/Arrow Right.svg" alt="" /></Link>
                    </div>
                    : ''
            }
        </div>
    );
};

export default Features_Card;