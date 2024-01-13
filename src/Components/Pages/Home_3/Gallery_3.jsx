import React from 'react';
import Home_3_Gallery_Section from '../../Sections/Home_3_Gallery_Section';
import Home_3_Customer_Feedback_Card from '../../Sections/Home_3_Customer_Feedback_Card';
import Trusted_Companies from '../../Sections/Trusted_Companies';

const Gallery_3 = () => {
    return (
        <div className='mb-[80px] md:mb-[139px]'>
            <section className="mt-[50px] md:mt-[86px] px-5 md:px-0">
                <h1 className=" text-[24px] md:text-[36px] text-[#262729] font-semibold max-w-[947px] mx-auto text-center">Gallery</h1>
                <p className="text-base md:text-[20px] text-[#606086] max-w-[640px] mx-auto text-center mt-4">Everything you
                    need to control spend and optimize finance operations, all on a single platform.</p>
            </section>
            <section data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="0" data-aos-easing="ease-in-out" className="h-[396px] w-full home3-gallery bg-cover bg-center mt-[50px] md:mt-[86px]">
            </section>
            <main className="max-w-[1142px] mx-auto  px-5 xl:px-0">
                <Home_3_Gallery_Section top_space="mt-[141px]"></Home_3_Gallery_Section>
                <Home_3_Gallery_Section top_space="mt-[172px]" flex_position="flex-row-reverse"></Home_3_Gallery_Section>
                <section className="mt-[166px]">
                    <h1 className=" text-[24px] md:text-[36px] text-[#262729] font-semibold max-w-[947px] mx-auto text-center">
                        What Customers Saying</h1>
                    <p className="text-sm md:text-base text-[#606086] max-w-[428px] mx-auto text-center mt-4">Everything you
                        need to control spend and optimize finance operations, all on a single platform.</p>
                    <div className="mt-[56px] flex flex-wrap lg:flex-nowrap items-center gap-6 justify-center">
                        <div data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="0">
                            <Home_3_Customer_Feedback_Card name="Head of Growth" designation="Officer"></Home_3_Customer_Feedback_Card>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="200">
                            <Home_3_Customer_Feedback_Card name="Head of Growth" designation="Officer"></Home_3_Customer_Feedback_Card>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="400">
                            <Home_3_Customer_Feedback_Card name="Head of Growth" designation="Officer"></Home_3_Customer_Feedback_Card>
                        </div>
                    </div>
                </section>
                <section>
                    <Trusted_Companies></Trusted_Companies>
                </section>
            </main>
        </div>
    );
};

export default Gallery_3;