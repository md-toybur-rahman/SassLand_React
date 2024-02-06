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
import Home_1_FAQ from "../../Sections/Home_1_FAQ";
import Features_Card from "../../Sections/Features_Card";
import Home_1_Pricing_Card from "../../Sections/Home_1_Pricing_Card";
import People_Rating_Card from "../../Sections/People_Rating_Card";
import Simple_Software from "../../Sections/Simple_Software";
import Time_Is_Money from "../../Sections/Time_Is_Money";
import Trusted_Companies from "../../Sections/Trusted_Companies";

const Home_1 = () => {
    useTitle('Home')

    return (
        <div>
            <main className="max-w-[1142px]  mx-auto px-5 xl:px-0">
                <div className="mt-[48px]">
                    <Trusted_Companies></Trusted_Companies>
                </div>
                <div className="mt-[60px] md:mt-[150px]">
                    <Simple_Software></Simple_Software>

                </div>
                {/* Our Best Features */}
                <section className="mt-[80px] md:mt-[156px] max-w-[1176px] px-5 xl:px-0">
                    <div className="max-w-[648px] mx-auto text-center mb-12">
                        <h1 className="font-semibold text-[24px] md:text-[36px] text-[#25373F] mb-6">Our Best Features</h1>
                        <p className="font-medium text-base md:text-[20px] text-[#676769]">Everything you need to control spend and
                            optimize
                            finance operations, all on a single platform.</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-[22px]">
                        <div data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="400">
                            <Features_Card image="../../../../public/images/Rectangle32.svg" title="Web design" designation="Project management"></Features_Card>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="200">
                            <Features_Card image="../../../../public/images/Rectangle37.svg" title="Branding" designation="Clean Coding"></Features_Card>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out">
                            <Features_Card image="../../../../public/images/Rectangle39.svg" title="Business" designation="Business Research"></Features_Card>
                        </div>
                    </div>
                </section>
                {/* End Our Best Features */}


                {/* Love us */}
                <section
                    className="flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between gap-6 md:gap-10 mt-[80px] md:mt-[156px] max-w-[1057px] px-5 xl:px-0 lg:ms-[56px]">
                    <div className="max-w-[547px] text-center lg:text-start">
                        <h1 className="text-[24px] md:text-[36px] text-[#262729] font-bold mb-4">Hundreds of people already love us
                        </h1>
                        <p className="font-medium text-base md:text-[20px] text-[#676769]">But do not just take our word for it.</p>
                    </div>

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
                </section>
                {/* End Love Us */}
            </main >
            {/* Pricing And Plans */}
            <section className="bg-[#162126] mt-[114px] px-5 lg:px-0 pb-[86px]">
                <div className="pt-[86px] mb-[56px] text-center">
                    <h1 className="text-2xl md:text-[36px] text-white font-semibold mb-6">Pricing & Plans</h1>
                    <p className="text-base md:text-[20px] font-medium text-[#E9EBEB]">Everything you need to control spend and
                        optimize finance.
                    </p>
                </div>
                <div className="flex items-center gap-6 flex-wrap justify-center">
                    <div data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="400">
                        <Home_1_Pricing_Card category="BASIC" price="10" day="14"></Home_1_Pricing_Card>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="200">
                        <Home_1_Pricing_Card category="STANDARD" price="49" day="14"></Home_1_Pricing_Card>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out">
                        <Home_1_Pricing_Card category="PREMIUM" price="99" day="14"></Home_1_Pricing_Card>
                    </div>
                </div>
            </section>
            {/* End Pricing and Plans */}
            <div>
                <Home_1_FAQ></Home_1_FAQ>
            </div>
            <div className="mt-7">
                <Time_Is_Money></Time_Is_Money>
            </div>
        </div >
    );
};

export default Home_1;