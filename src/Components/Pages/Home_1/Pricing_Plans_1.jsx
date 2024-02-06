// import React from 'react';

import useTitle from "../../../Custom_Hooks/useTitle";
import Home_1_FAQ from "../../Sections/Home_1_FAQ";
import Home_1_Pricing_Card from "../../Sections/Home_1_Pricing_Card";
import Time_Is_Money from "../../Sections/Time_Is_Money";

const Pricing_Plans_1 = () => {
    useTitle('Pricing Plan');
    return (
        <div>
            <section className="mt-[40px] md:mt-[88px] mb-[64px] px-5 lg:px-0">
                <div className="mb-[56px] text-center">
                    <h1 className="text-2xl md:text-[36px] text-[#262729] font-semibold mb-6">Our Subscription Packages</h1>
                    <p className="text-base md:text-[20px] font-medium text-[#676769] max-w-[640px] mx-auto">Everything you need to
                        control spend and optimize finance operations, all on a single platform.
                    </p>
                </div>
                <div className="flex items-center gap-6 flex-wrap justify-center">
                    <div data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="400">
                        <Home_1_Pricing_Card price="99"></Home_1_Pricing_Card>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="200">
                        <Home_1_Pricing_Card price="99"></Home_1_Pricing_Card>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="0">
                        <Home_1_Pricing_Card price="99"></Home_1_Pricing_Card>
                    </div>
                </div>
            </section>
            <div>
                <Home_1_FAQ></Home_1_FAQ>
            </div>
            <div className="mt-[80px] md:mt-[150px] mb-[80px] md:mb-[158px]">
                <Time_Is_Money></Time_Is_Money>
            </div>
        </div>
    );
};

export default Pricing_Plans_1;