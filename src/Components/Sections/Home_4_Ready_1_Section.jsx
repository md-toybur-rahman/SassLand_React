import React from 'react';
import { useLocation } from 'react-router-dom';

const Home_4_Ready_1_Section = () => {
    const location = useLocation();
    return (
        <section>
            <div
                className="mx-auto max-w-[1142px] w-full flex flex-wrap xl:flex-nowrap md:gap-6 xl:gap-[133px] items-center justify-center">
                <div className="max-w-[505px]">
                    <h1 className="text-[20px] md:text-[24px] font-semibold text-white mb-6">Ready to get started?</h1>
                    <p className="text-sm md:text-base text-[#EDEDED] font-medium leading-[153.5%]">Amet minim mollit non
                        deserunt ullamco est
                        sit
                        aliqua sint. velit officia consequat.</p>
                </div>
                <div className="rounded-md max-w-[496px] mt-7 md:mt-0">
                    <div className="flex flex-wrap sm:flex-nowrap items-center gap-2">
                        <div className={`h-[56px] w-[333px] flex items-center ${location.pathname == '/Home_4/About_Us' ? 'bg-[#FFF1EC]' : 'bg-[#ED987D]'}  rounded-full px-6`}>
                            <input className={`outline-none text-xs md:text-sm font-semibold bg-transparent ${location.pathname == '/Home_4/Pricing_Plans' ? 'placeholder_style' : ''}`} type="email"
                                placeholder="email address" />
                        </div>
                        <button
                            className="h-[56px] w-[163px] bg-[#33302F] text-sm md:text-base font-semibold text-white rounded-full">Subscribe
                            now</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home_4_Ready_1_Section;