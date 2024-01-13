// import React from 'react';
import { useLocation } from 'react-router-dom';

const Time_Is_Money = () => {
    const location = useLocation();

    return (
        <section className={`${location.pathname == "/Home_1" ? 'bg-white' : 'bg-[#6A26DA]'}  px-5 py-[80px] md:py-[124px]`}>
            <section
                className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-[80px] lg:gap-[136px] w-fit mx-auto">
                <div className="max-w-[413px] text-center lg:text-start">
                    <h1 className={`text-xl md:text-2xl font-semibold ${location.pathname == "/Home_1" ? 'text-[#25373F]' : 'text-white'} mb-3`}>Time is money. Save both.</h1>
                    <p className={`text-sm md:text-base ${location.pathname == "/Home_1" ? 'text-[#676769]' : 'text-[#C1C1F3]'} font-normal`}>With lots of unique blocks, you can easily
                        build a page
                        without coding. Build your next landing page.</p>
                </div>
                <div
                    className="p-[6px] border border-[#DCE0E0] rounded-md max-w-[450px] lg:w-[450px] flex justify-between items-center mt-7 md:mt-0 bg-[#FDFDFD]">
                    <input className="outline-none text-xs md:text-sm font-medium px-2" type="email"
                        placeholder="what's your work email?" />
                        <button
                            className="py-2 md:py-[14px] w-[100px] md:w-[149px] bg-[#6A26DA] text-sm md:text-base font-medium text-white rounded-md">Get
                            Started</button>
                </div>
            </section>
        </section>
    );
};

export default Time_Is_Money;