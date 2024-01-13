// import React from 'react';

const Simple_Software = () => {
    return (
        <section
            className="flex flex-col items-center justify-center lg:grid grid-cols-2 gap-[97px] max-w-[1140px] mx-auto px-5">
            <div className="lg:max-w-[485px] text-center md:text-start">
                <h1 className="font-semibold text-[24px] md:text-[36px] text-[#262729] mb-6">Simple software that is easy to
                    use</h1>
                <p className="text-base md:text-[20px], font-medium text-[#676769] mb-12">These companies release their own
                    versions of
                    the operating systems with minor changes, and yet always with the same bottom line.</p>
                <button className="bg-[#6A26DA] px-[27px] py-[13px] text-sm font-medium rounded-md text-white">Get Started
                    Free</button>
            </div>
            <div data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in-out">
                <img src="../../../public/images/Group358.svg" alt="" />
            </div>
        </section>
    );
};

export default Simple_Software;