// import React from 'react';

import Home_1_Banner_Title from "../../Sections/Home_1_Banner_Title";
import Our_Team from "../../Sections/Our_Team";
import Simple_Software from "../../Sections/Simple_Software";
import Time_Is_Money from "../../Sections/Time_Is_Money";
import Trusted_Companies from "../../Sections/Trusted_Companies";
import Footer_1 from "./Footer_1";

const About_Us_1 = () => {
    return (
        <div>
            <div>
                <Home_1_Banner_Title title="About Us."></Home_1_Banner_Title>
            </div>
            <div>
                <Simple_Software></Simple_Software>
            </div>
            <section className="bg-[#6A26DA] lg:px-[150px] px-5 py-[80px] md:py-[124px] mt-[100px] md:mt-[162px]">
                <div className="flex items-center justify-center gap-12 md:max-w-[750px] mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                        <div className="text-center" data-aos="fade-in" data-aos-duration="1000" data-aos-easing="ease-in-out"
                            data-aos-delay="0">
                            <h1 className="text-[36px] md:text-[48px] text-[#F5EFFF] font-bold mb-4">10+</h1>
                            <p className="text-sm md:text-base text-[#EFEFEF]">Years of Operation</p>
                        </div>
                        <div className="w-[1px] h-[51px] bg-[#7C7C7C] hidden md:block"></div>
                        <div className="text-center" data-aos="fade-in" data-aos-duration="1000" data-aos-easing="ease-in-out"
                            data-aos-delay="100">
                            <h1 className="text-[36px] md:text-[48px] text-[#F5EFFF] font-bold mb-4">150</h1>
                            <p className="text-sm md:text-base text-[#EFEFEF]">Happy Customer</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                        <div className="w-[1px] h-[51px] bg-[#7C7C7C] hidden md:block"></div>
                        <div className="text-center" data-aos="fade-in" data-aos-duration="1000" data-aos-easing="ease-in-out"
                            data-aos-delay="200">
                            <h1 className="text-[36px] md:text-[48px] text-[#F5EFFF] font-bold mb-4">12</h1>
                            <p className="text-sm md:text-base text-[#EFEFEF]">Team Member</p>
                        </div>
                        <div className="w-[1px] h-[51px] bg-[#7C7C7C] hidden md:block"></div>
                        <div className="text-center" data-aos="fade-in" data-aos-duration="1000" data-aos-easing="ease-in-out"
                            data-aos-delay="300">
                            <h1 className="text-[36px] md:text-[48px] text-[#F5EFFF] font-bold mb-4">26</h1>
                            <p className="text-sm md:text-base text-[#EFEFEF]">Award</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="mx-auto max-w-[1150px]  px-5 md:px-0 mt-[70px] md:mt-[150px]">
                <Our_Team
                    facebook_image="facebook-blue.svg"
                    twitter_image="twitter-blue.svg"
                    linkedin_image="linkedin-blue.svg"
                    instagram_image="instagram-blue.svg"
                ></Our_Team>
            </div>
            <div className="mt-[70px] md:mt-[156px]">
                <Time_Is_Money></Time_Is_Money>
            </div>
            <div>
                <Trusted_Companies></Trusted_Companies>
            </div>
        </div>
    );
};

export default About_Us_1;