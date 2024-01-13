import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Error_Content = () => {
    const location = useLocation();
    return (
        <section className="md:pt-[197px] md:pb-[306px]">
            <div className="flex flex-col items-center justify-center w-full h-[90vh] md:h-auto">
                <div className="max-w-[746px] text-center">
                    <h1 className="font-bold text-[#454545] text-[24px] sm:text-[36px] lg:text-[57px] mb-4">404</h1>
                    <p className="text-sm md:text-base font-semibold text-[#454545] mb-8">Page Not Found.</p>
                    <p className="text-sm md:text-base font-medium text-[#676769]">Sorry. we cant find the page your
                        looking for.</p>
                    <div>
                        <Link to={`${location.pathname == "/Home_1/ErrorPage" ? "/Home_1" : ''}${location.pathname == "/Home_2/ErrorPage" ? "/Home_2" : ''}${location.pathname == "/Home_3/ErrorPage" ? "/Home_3" : ''}${location.pathname == "/Home_4/ErrorPage" ? "/Home_4" : ''}`}><button
                            className={`${location.pathname == "/Home_1/ErrorPage" ? 'bg-[#6A26DA] rounded-md text-white' : ''} ${location.pathname == "/Home_2/ErrorPage" ? 'bg-[#FFB200] rounded-full text-[#2C2003]' : ''} ${location.pathname == "/Home_3/ErrorPage" ? 'bg-[#FF6AC2] rounded-md text-white' : ''} ${location.pathname == "/Home_4/ErrorPage" ? 'bg-[#E35C30] rounded-full text-white' : ''} max-w-[170px] w-full h-[48px] font-medium text-xs md:text-sm mt-[42px]`}>Back
                            to Home</button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Error_Content;