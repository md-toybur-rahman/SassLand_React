import React from 'react';
import Home_3_Features_Card from '../../Sections/Home_3_Features_Card';
import useTitle from '../../../Custom_Hooks/useTitle';

const About_Us_3 = () => {
    useTitle('About Us');

    return (
        <div className='mb-[80px] md:mb-[126px]'>
            <section className="">
                <div
                    className="h-[51px] w-[123px] border border-[#FE79A1] flex items-center justify-center rounded-full mx-auto mt-[50px] md:mt-[81px] font-semibold text-[#1F1F38]">
                    About</div>

                <div>
                    <h1
                        className=" text-[24px] md:text-[36px] text-[#676769] font-semibold max-w-[947px] mx-auto text-center mt-[56px]">
                        We partner closely with the most progressive companies in the world to improve their customer
                    </h1>
                    <p className="text-base md:text-[20px] text-[#676769] max-w-[823px] mx-auto text-center mt-4 md:mt-8">We partner
                        closely with the most progressive companies in the world to improve their customer support
                        operations. As consumers</p>
                </div>
            </section>
            <main className="max-w-[1142px] mx-auto  px-5 xl:px-0">
                <section>
                    <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="0" className="mt-[70px] md:mt-[104px] flex items-center justify-center">
                        <img src="../../../../public/images/home3-about-banner.png" alt="" />
                    </div>
                </section>
                <section className="mt-[70px] md:mt-[157px] max-w-[746px]">
                    <div>
                        <h1 className="text-[#FF6AC2] text-[24px] md:text-[36px] font-semibold">Vision</h1>
                        <p className="mt-6 text-base md:text-[20px] font-medium leading-[32px]">We partner closely with the most
                            progressive
                            companies in the world to improve their customer support operations. As consumers</p>
                    </div>
                    <div className="mt-[64px]">
                        <h1 className="text-[#FF6AC2] text-[24px] md:text-[36px] font-semibold">Mission</h1>
                        <p className="mt-6 text-base md:text-[20px] font-medium leading-[32px]">We partner closely with the most
                            progressive
                            companies in the world to improve their customer support operations. As consumers</p>
                        <p className="mt-4 text-base md:text-[20px] font-medium leading-[32px]">We partner closely with the most
                            progressive
                            companies in the world to improve their customer support operations. As consumers</p>
                    </div>
                </section>
                <section className="mt-[70px] md:mt-[164px] px-5 lg:px-0">
                    <div className="mb-[56px] text-center flex flex-col justify-center items-center">
                        <h1 className="text-2xl md:text-[36px] text-[#25373F] font-semibold mb-6">Our Best Features</h1>
                        <p className="text-sm md:text-base font-medium text-[#676769] max-w-[473px]">Everything you need to control
                            spend and optimize finance operations, all on a single platform.</p>
                    </div>
                    <div className="flex items-center gap-[78px] flex-wrap justify-center mt-[86px]">
                        <div data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="400">
                            <Home_3_Features_Card title="Design & Vreatives" image="../../../../public/images/icons/home3-design-icon.svg"></Home_3_Features_Card>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="200">
                            <Home_3_Features_Card title="Team Accounts" image="../../../../public/images/icons/home3-account-icon.svg"></Home_3_Features_Card>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="0">
                            <Home_3_Features_Card title="Branding" image="../../../../public/images/icons/home3-varient-icon.svg"></Home_3_Features_Card>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default About_Us_3;