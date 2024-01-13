// import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

import useTitle from "../../../Custom_Hooks/useTitle";
import Features_Card from "../../Sections/Features_Card";
import Trusted_Companies from "../../Sections/Trusted_Companies";
import People_Rating_Card from '../../Sections/People_Rating_Card';

const Home_2 = () => {
    useTitle('Home_2')
    return (
        <div>
            <div>
                <Trusted_Companies></Trusted_Companies>
            </div>
            <div>
                <div>
                    <section
                        className="flex flex-col items-center justify-center lg:grid grid-cols-2 gap-10 lg:gap-[97px] mt-[60px] md:mt-[120px] max-w-[1140px] mx-auto px-5">
                        <div data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out">
                            <img src="../../../../public/images/Group366.jpg" alt="" />
                        </div>
                        <div className="lg:max-w-[485px]">
                            <h1 className="font-semibold text-[24px] md:text-[36px] text-[#25373F] mb-6">We Are The Leader in Web Design
                            </h1>
                            <p className="text-base md:text-[20px], font-medium text-[#676769] mb-11">Amet minim mollit non deserunt
                                ullamco est sit aliqua dolor do amet sint velit of a officia</p>
                            <div className=" flex items-center justify-center lg:justify-start gap-6">
                                <div className="text-center" data-aos="fade-in" data-aos-duration="1000" data-aos-easing="ease-in-out"
                                    data-aos-delay="0">
                                    <h1 className="text-[36px] md:text-[48px] text-[#F9C242] font-bold mb-4">53K</h1>
                                    <p className="text-sm md:text-base text-[#676769]">Cool Number</p>
                                </div>
                                <div className="w-[1px] h-[51px] bg-[#E8E8E9]"></div>
                                <div className="text-center" data-aos="fade-in" data-aos-duration="1000" data-aos-easing="ease-in-out"
                                    data-aos-delay="100">
                                    <h1 className="text-[36px] md:text-[48px] text-[#F9C242] font-bold mb-4">10K</h1>
                                    <p className="text-sm md:text-base text-[#676769]">Projects Done</p>
                                </div>
                                <div className="w-[1px] h-[51px] bg-[#E8E8E9]"></div>
                                <div className="text-center" data-aos="fade-in" data-aos-duration="1000" data-aos-easing="ease-in-out"
                                    data-aos-delay="300">
                                    <h1 className="text-[36px] md:text-[48px] text-[#F9C242] font-bold mb-4">120</h1>
                                    <p className="text-sm md:text-base text-[#676769]">Cool Number</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <div>
                <section className="bg-[#F6F5F8] mt-[114px] px-5 lg:px-0 pb-[104px]">
                    <div className="pt-[86px] mb-[56px] text-center flex flex-col justify-center items-center">
                        <h1 className="text-2xl md:text-[36px] text-[#25373F] font-semibold mb-6">Our Best Features</h1>
                        <p className="text-sm md:text-base font-medium text-[#676769] max-w-[473px]">Everything you need to control
                            spend and optimize finance operations, all on a single platform.</p>
                    </div>
                    <div className="flex items-center gap-6 flex-wrap justify-center">
                        <div data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="400">
                            <Features_Card image="../../../../public/images/icons/Design-icon.svg" title="Design & Verities"></Features_Card>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="200">
                            <Features_Card image="../../../../public/images/icons/Account-icon.svg" title="Team Accounts"></Features_Card>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="0">
                            <Features_Card image="../../../../public/images/icons/branding-icon.svg" title="Branding"></Features_Card>
                        </div>
                    </div>
                </section>
            </div>
            <div>
                <section className="bg-[#F9C242] px-5 lg:px-0 pb-[86px]">
                    <div className="pt-[86px] flex items-center gap-[100px] lg:gap-[215px] flex-wrap justify-center max-w-[1140px]  mx-auto">
                        <div>
                            <h1 className="text-2xl md:text-[36px] text-[#2C2003] font-semibold mb-6">Pricing & Plans</h1>
                            <p className="text-sm md:text-base font-medium text-[#2C2003] mb-[84px] max-w-[460px]">Everything you need
                                to control spend and optimize finance operations, all on a single platform.
                            </p>

                            {/* Carousel */}
                            <div className='max-w-[422px] rounded-2xl m-5'>
                                <Swiper
                                    spaceBetween={30}
                                    effect={'fade'}
                                    scrollbar={{ draggable: true }}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    navigation={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[EffectFade, Navigation, Pagination, Autoplay]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <div className='pb-6'>
                                            <People_Rating_Card image="profile3"></People_Rating_Card>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='pb-6'>
                                            <People_Rating_Card image="profile2"></People_Rating_Card>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='pb-6'>
                                            <People_Rating_Card image="profile"></People_Rating_Card>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            {/* End Carousel */}
                        </div>
                        <div data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in-out" className="bg-white rounded-2xl w-[433px] py-[45px]">
                            <div className="px-[59px] border-b border-[#DADADA] text-center">
                                <h1 className="font-extrabold text-4xl md:text-6xl mb-4 tracking-tighter"><span
                                    className="text-base md:text-xl font-medium">$</span>99<span
                                        className="text-sm md:text-base font-bold tracking-normal"> /mo</span></h1>
                                <p className="text-[#464646] font-medium text-sm md:text-base mb-6">Save 20% when billed yearly
                                </p>
                            </div>
                            <div className="px-[59px]">
                                <ul className="flex flex-col gap-4 text-[#25373F] text-[15px] items-center mt-10">
                                    <li>Unlimited updates & projects</li>
                                    <li>Custom permissions</li>
                                    <li>Custom instructors</li>
                                    <li>Access SEO mode</li>
                                    <li>Custom designs & features</li>
                                </ul>
                                <div className="flex justify-center mt-[42px]">
                                    <button
                                        className="px-[50px] md:px-[110px] py-[9px] md:py-[13px] rounded-full bg-[#F9C242] text-[#2C2003] text-sm md:text-base">Get
                                        Started</button>
                                </div>
                                <p className="text-xs md:text-sm text-[#ADB5B7] mt-[11px] text-center">No credit card
                                    required
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="max-w-[1137px] mx-auto">
                <section className="rounded-[35px] overflow-hidden  mt-[50px] md:mt-[157px] mx-5">
                    <div className="home2-frame bg-cover py-[50px] md:py-[105px] md:ps-[84px] px-5 md:px-0">
                        <h1 className="text-[24px] md:text-[36px] text-[#ECECEC] font-semibold mb-6">Ready to get started?</h1>
                        <p className="text-base md:text-[20px] text-[#EDEDED] font-medium mb-12 max-w-[405px]">Amet minim mollit non
                            deserunt
                            ullamco est sit aliqua sint. velit officia consequat duis enim velit mollit. </p>
                        <button className="bg-[#F9C242] text-sm md:text-base px-[54px] py-[13px] rounded-full text-white">Get
                            Started</button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home_2;