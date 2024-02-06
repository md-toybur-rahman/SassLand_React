// import React from 'react';

import useTitle from "../../../Custom_Hooks/useTitle";
import Home_2_Banner_Title from "../../Sections/Home_2_Banner_Title";
import Home_2_Ready_Section from "../../Sections/Home_2_Ready_Section";

const About_Us_2 = () => {
    useTitle('About Us');

    return (
        <div>
            <div className="mt-[50px] md:mt-[128px]">
                <Home_2_Banner_Title
                    max_width="746"
                    title="About Us"
                    title_min_size="36"
                    title_max_size="57"
                    space="32"
                    description="We partner closely
                with the most progressive companies in the world to improve their customer support
                operations. As consumers, we all have our"
                    des_min_size="16"
                    des_max_size="20"
                    leading="32"></Home_2_Banner_Title>
            </div>

            <main className="max-w-[1142px]  mx-auto px-5 xl:px-0">
                <div>
                    <div className="flex justify-center mt-[30px] md:mt-[86px]" data-aos="fade-in"
                        data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="0">
                        <img src="../../../../../public/images/home2-about-us-banner.jpg" alt="" />
                    </div>
                </div>
                {/* Innovative Solutions */}
                <section className="flex items-center mt-[50px] lg:mt-[128px] px-5 xl:px-0">
                    <div>
                        <h1 className="text-xl md:text-[24px] text-[#F9C242] font-semibold mb-4 md:mb-[25px]">Innovative Solutions
                        </h1>
                        <div className="flex flex-wrap items-center justify-center gap-[30px] md:gap-[86px]">
                            <h1
                                className="text-[24px] md:text-[36px] font-bold text-[#2C2003] leading-[36px] md:leading-[54px] max-w-[1104px]">
                                “The
                                best free way for SaaS companies to start leveraging video is using free social media tools like
                                Facebook Live or Instagram,” said Caneva. </h1>
                        </div>
                    </div>
                </section>
                {/* End Innovative Solutions */}

                {/* Why SassLand */}
                <section className="mt-[80px] md:mt-[155px] max-w-[1176px] px-5 xl:px-0">
                    <div className="flex flex-wrap items-start justify-center gap-14 md:gap-[100px] lg:gap-[166px]">
                        <div className="max-w-[560px]">
                            <h1 className="font-bold text-3xl md:text-[48px] text-[#262729] mb-4 md:mb-8">Why SassLand?</h1>
                            <p className="font-medium text-base md:text-[20px] text-[#676769] leading-[32px]">We partner closely with the most
                                progressive companies in the world to improve their customer support operations. As consumers,
                                we all have our own version of that one call to customer support.</p>
                        </div>
                        <div className="flex flex-col items-center gap-8 flex-wrap justify-center">
                            <div className="max-w-[416px] flex items-start gap-4">
                                <img className="mb-7 max-w-[126px]" src="../../../../public/images/icons/about-check.svg" alt="" />
                                <div className="max-w-[356px]">
                                    <h1 className="text-lg md:text-2xl font-semibold text-[#262729] mb-2">Innovative Solutions</h1>
                                    <p className="text-sm md:text-base">We partner closely with the most progressive companies
                                        in the world to improve their </p>
                                </div>
                            </div>
                            <div className="max-w-[416px] flex items-start gap-4">
                                <img className="mb-7 max-w-[126px]" src="../../../../../public/images/icons/about-check.svg" alt="" />
                                <div className="max-w-[356px]">
                                    <h1 className="text-lg md:text-2xl font-semibold text-[#262729] mb-2">Devices With Quality</h1>
                                    <p className="text-sm md:text-base">We partner closely with the most progressive companies
                                        in the world to improve their </p>
                                </div>
                            </div>
                            <div className="max-w-[416px] flex items-start gap-4">
                                <img className="mb-7 max-w-[126px]" src="../../../../../public/images/icons/about-check.svg" alt="" />
                                <div className="max-w-[356px]">
                                    <h1 className="text-lg md:text-2xl font-semibold text-[#262729] mb-2">Customizable Interface
                                    </h1>
                                    <p className="text-sm md:text-base">We partner closely with the most progressive companies
                                        in the world to improve their </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Why SassLand*/}
            </main>
            <section className="mt-[100px] md:mt-[156px] px-5 md:px-10 pt-[104px] border-t border-[#DEDEDE]">
                <div className="flex flex-wrap items-center justify-center gap-14 md:gap-[100px] lg:gap-[194px]">
                    <div className="max-w-[461px]">
                        <h1 className="font-semibold text-lg md:text-[24px] mb-8">Growing since 2020</h1>
                        <p className="font-medium text-base md:text-[20px] text-[#676769]">We partner closely with the most
                            progressive companies in the world to improve their customer support operations. As consumers,
                            we all have our own version of that one call to customer support.</p>
                    </div>
                    <div className="max-w-[483px] bg-[#F9C242] p-8 rounded-xl">
                        <h1 className="font-semibold text-lg md:text-[24px] mb-8">Helping small businesses</h1>
                        <p className="font-medium text-base md:text-[20px] text-[#676769]">We partner closely with the most
                            progressive companies in the world to improve their customer support operations. As consumers,
                            we all have our own version of that one call to customer support.</p>
                    </div>
                </div>
            </section>
            {/* End description */}


            {/* Ready to Started */}
            <div className="mt-[50px] md:mt-[157px]">
                <Home_2_Ready_Section></Home_2_Ready_Section>
            </div>
        </div>
    );
};

export default About_Us_2;