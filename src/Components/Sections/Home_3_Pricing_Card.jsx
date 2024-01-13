import React from 'react';

const Home_3_Pricing_Card = (props) => {
    return (
        <div
                className="bg-white rounded-2xl w-[361px] px-[40px] pt-[42px] pb-[34px]">
                <div className="mb-[56px]">
                    <h1 className="font-extrabold text-[30px] md:text-[47px] tracking-tighter text-[#1F1F38]"><span
                            className="text-sm font-bold">$ </span>{props.price}<span className="text-sm font-bold tracking-normal">
                            /mo</span></h1>
                    <p className="text-[#464646] font-medium text-sm md:text-base">Save 20% when billed yearly
                    </p>
                </div>
                <div>
                    <h1 className="text-[#3C3C3C] text-lg font-bold mb-[6px]">Creator includes:</h1>
                    <ul className="flex flex-col gap-[14px] text-[#3D3D3D]">
                        <li className="flex items-center gap-2">
                            <img src="../../../public/images/icons/black-check.svg" alt="" />
                            <h1 className="font-normal text-xs md:text-[12.49px]">Includes 1 seat</h1>
                        </li>
                        <li className="flex items-center gap-2">
                            <img src="../../../public/images/icons/black-check.svg" alt="" />
                            <h1 className="font-normal text-xs md:text-[12.49px]">1 Brand voice</h1>
                        </li>
                        <li className="flex items-center gap-2">
                            <img src="../../../public/images/icons/black-check.svg" alt="" />
                            <h1 className="font-normal text-xs md:text-[12.49px]">50+ Templates</h1>
                        </li>
                        <li className="flex items-center gap-2">
                            <img src="../../../public/images/icons/black-check.svg" alt="" />
                            <h1 className="font-noraml text-xs md:text-[12.49px]">Access SEO mode</h1>
                        </li>
                        <li className="flex items-center gap-2">
                            <img src="../../../public/images/icons/black-check.svg" alt="" />
                            <h1 className="font-normal text-xs md:text-[12.49px]">Use AI everywhere with browser
                                extension</h1>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="flex justify-center mt-[30px]">
                        <button
                            className="px-[30px] md:px-[67px] py-[9px] md:py-[13px] rounded-md bg-[#FF6AC2] text-white text-xs md:text-sm font-semibold">Start
                            free 7-day trial</button>
                    </div>
                    <p className="text-[10px] md:text-xs text-[#DBDBFF] mt-[10px] text-center">(No credit card
                        required)
                    </p>
                </div>
            </div>
    );
};

export default Home_3_Pricing_Card;