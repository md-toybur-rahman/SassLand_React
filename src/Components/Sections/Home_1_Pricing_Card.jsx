import React from 'react';
import { useLocation } from 'react-router-dom';

const Home_1_Pricing_Card = (props) => {
    const location = useLocation();
    return (
        <div>
            {
                location.pathname == "/Home_1" ?
                    <div className="px-[30px] md:px-[42px] pt-[20px] md:pt-[37px] pb-[50px] md:pb-[71px] bg-white rounded-2xl max-w-[363px]">
                        <h1 className="text-[#6A26DA] text-sm md:text-base font-medium mb-[30px] md:mb-[42px]">{props.category}</h1>
                        <h1 className="font-extrabold text-2xl md:text-4xl mb-4 tracking-tighter">$
                            {props.price}<span className="text-sm md:text-base font-bold tracking-normal"> /mo</span></h1>
                        <p className="text-[#676769] font-medium text-xs md:text-sm mb-[42px]">first {props.day} days free</p>
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-center gap-2">
                                <img src="../../../../public/images/icons/Check.svg" alt="" />
                                <h1 className="font-semibold text-xs md:text-sm text-[#3D3D3D]">Includes 1 seat</h1>
                            </li>
                            <li className="flex items-center gap-2">
                                <img src="../../../../public/images/icons/Check.svg" alt="" />
                                <h1 className="font-semibold text-xs md:text-sm text-[#3D3D3D]">1 Brand voice</h1>
                            </li>
                            <li className="flex items-center gap-2">
                                <img src="../../../../public/images/icons/Check.svg" alt="" />
                                <h1 className="font-semibold text-xs md:text-sm text-[#3D3D3D]">50+ Templates</h1>
                            </li>
                            <li className="flex items-center gap-2">
                                <img src="../../../../public/images/icons/Unchecked.svg" alt="" />
                                <h1 className="font-noraml text-xs md:text-sm text-[#3D3D3D]">Access SEO mode</h1>
                            </li>
                            <li className="flex items-center gap-2">
                                <img src="../../../../public/images/icons/Unchecked.svg" alt="" />
                                <h1 className="font-normal text-xs md:text-sm text-[#3D3D3D]">Use AI everywhere with browser
                                    extension</h1>
                            </li>
                        </ul>
                        <div className="flex justify-center mt-[42px]">
                            <button
                                className="px-[30px] md:px-[50px] py-[10px] md:py-[17px] rounded-md bg-[#6A26DA] text-white text-sm md:text-base">Get
                                started for free</button>
                        </div>
                        <p className="font-medium text-xs md:text-sm text-[#828282] mt-[11px] text-center">No credit card required
                        </p>
                    </div>
                    : ''
            }
            {
                location.pathname == "/Home_1/Pricing_Plans" ?
                    <div className="bg-[#FBFBFB] border border-[#E5E8EC] rounded-3xl w-[362px] ps-[19px] pe-[10px] pt-[43px] pb-[67px]">
                        <div className="mb-8">
                            <h1 className="text-[38px] font-bold text-[#262729] mb-2">Business</h1>
                            <p className="text-sm md:text-[17px] text-[#676769]">Everything you need to control spend and optimize
                                finance.</p>
                        </div>
                        <div className="mb-[32px]">
                            <h1 className="font-extrabold text-4xl md:text-4xl mb-2 tracking-tighter text-[#262729]"><span
                                className="text-base md:text-base font-bold">$</span>{props.price}<span
                                    className="text-sm md:text-base font-bold tracking-normal"> /mo</span></h1>
                            <p className="text-[#676769] font-normal text-sm md:text-base mb-6">Save 20% when billed yearly
                            </p>
                            <button
                                className="max-w-[311px] w-full py-2 md:py-3 font-medium text-sm md:text-base rounded-md bg-[#6A26DA] text-white">Start
                                free 7-day trial</button>
                        </div>
                        <div>
                            <h1 className="text-[#262729] text-lg md:text-[21px] font-bold mb-[10px]">Creator includes:</h1>
                            <ul className="flex flex-col gap-[17px] text-[#676769]">
                                <li className="flex items-center gap-2">
                                    <img src="../assets/images/icons/mini-check26.svg" alt="" />
                                    <h1 className="font-normal text-sm md:text-[15px]">Includes 1 seat</h1>
                                </li>
                                <li className="flex items-center gap-2">
                                    <img src="../assets/images/icons/mini-check26.svg" alt="" />
                                    <h1 className="font-normal text-sm md:text-[15px]">1 Brand voice</h1>
                                </li>
                                <li className="flex items-center gap-2">
                                    <img src="../assets/images/icons/mini-check26.svg" alt="" />
                                    <h1 className="font-normal text-sm md:text-[15px]">50+ Templates</h1>
                                </li>
                                <li className="flex items-center gap-2">
                                    <img src="../assets/images/icons/mini-check26.svg" alt="" />
                                    <h1 className="font-normal text-sm md:text-[15px]">Access SEO mode</h1>
                                </li>
                                <li className="flex items-center gap-2">
                                    <img src="../assets/images/icons/mini-check26.svg" alt="" />
                                    <h1 className="font-normal text-sm md:text-[15px]">Use AI everywhere with browser
                                        extension</h1>
                                </li>
                            </ul>
                        </div>
                    </div>
                    : ''

            }
        </div>
    );
};

export default Home_1_Pricing_Card;