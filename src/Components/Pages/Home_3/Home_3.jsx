import React from 'react';
import Home_3_Features_Card from '../../Sections/Home_3_Features_Card';
import Home_3_Pricing_Card from '../../Sections/Home_3_Pricing_Card';
import Home_3_Customer_Feedback_Card from '../../Sections/Home_3_Customer_Feedback_Card';
import Trusted_Companies from '../../Sections/Trusted_Companies';

const Home_3 = () => {
    function handleInstallmentToggle() {
        const monthly = document.getElementById('monthly');
        const yearly = document.getElementById('yearly');
        const installmentToggle = document.getElementById('installmentToggle');
        if (!installmentToggle.classList.contains('right-0')) {
            installmentToggle.classList.remove('left-0');
            installmentToggle.classList.add('right-0');
            monthly.classList.remove('text-white');
            monthly.classList.add('text-[#BABAC6]');
            yearly.classList.remove('text-[#BABAC6]');
            yearly.classList.add('text-white');
        }
        else {
            installmentToggle.classList.remove('right-0');
            installmentToggle.classList.add('left-0');
            yearly.classList.remove('text-white');
            yearly.classList.add('text-[#BABAC6]');
            monthly.classList.remove('text-[#BABAC6]');
            monthly.classList.add('text-white');
        }
    }
    return (
        <div>
            <section className="mt-[60px] md:mt-[160px] mx-auto px-5">
                <img className="w-full max-w-[1298px] mx-auto" src="../../../../public/images/home3-video-image.png" alt="" />
            </section>
            <main className="max-w-[1142px] mx-auto  px-5 xl:px-0">
                <section className="flex flex-wrap md:flex-nowrap items-center gap-[69px] mt-[100px] md:mt-[156px]">
                    <div data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="0">
                        <img src="../../../../public/images/Group 402.svg" alt="" />
                    </div>
                    <div>
                        <h1 className="font-semibold text-[#212121] text-[24px] sm:text-[36px] lg:text-[57px] mb-6 max-w-[553px]">
                            Top Slack Tips To
                            Boost Productivity</h1>
                        <p className="font-medium text-base md:text-[20px] text-[#000000] max-w-[461px] mb-12">Amet minim mollit non
                            deserunt ullamco est sit aliqua dolor do amet sint velit of a officia</p>
                        <button className="bg-[#FE79A1] px-[59px] py-[18px] rounded-md text-base font-medium text-white">
                            See all features
                        </button>
                    </div>
                </section>

                <section className="mt-[80px] md:mt-[106px] max-w-[1176px] px-5 xl:px-0">
                    <div className="mx-auto mb-[96px] text-center max-w-[507px]">
                        <h1 className="font-semibold text-2xl md:text-[36px] text-[#000000] mb-4">Our Best Features</h1>
                        <p className="font-medium text-sm md:text-base text-[#000000]">Everything you need to control spend and
                            optimize
                            finance operations, all on a single platform.</p>
                    </div>
                    <div className="flex items-center gap-[78px] flex-wrap justify-center">
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
            <section className="bg-[#2E2E52] mt-[100px] md:mt-[156px] px-5 lg:px-0 pb-[86px]">
                <div className="pt-[88px] mb-[56px] text-center">
                    <h1 className="text-2xl md:text-[36px] text-white font-semibold mb-6">Our Subscription Packages</h1>
                    <div onClick={handleInstallmentToggle} className="mt-8 flex items-center justify-center gap-6">
                        <h1 id="monthly" className="text-white text-sm font-semibold">Monthly</h1>
                        <div className="w-9 relative">
                            <div className="w-full h-3 border-4 rounded-full">
                                <div id="installmentToggle"
                                    className="h-[19px] w-[19px] border-4 rounded-full bg-[#2E2E52] absolute -top-1 left-0"></div>
                            </div>
                        </div>
                        <h1 id="yearly" className="text-[#BABAC6] text-sm font-semibold">Yearly</h1>
                    </div>
                </div>
                <div className="mt-[82px] flex items-center gap-6 flex-wrap justify-center">
                    <div data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="200">
                        <Home_3_Pricing_Card price="99"></Home_3_Pricing_Card>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="400">
                        <Home_3_Pricing_Card price="99"></Home_3_Pricing_Card>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="600">
                        <Home_3_Pricing_Card price="99"></Home_3_Pricing_Card>
                    </div>
                </div>
            </section>
            <main className="max-w-[1137px] mx-auto px-5">
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
            <section
                className="home3-banner bg-cover h-[498px] lg:px-[150px] px-5 py-[100px] md:py-[194px] mt-[100px] md:mt-[168px]">
                <div className="mx-auto max-w-[1137px] flex flex-wrap gap-6 items-center justify-between">
                    <div className="max-w-[505px]">
                        <h1 className="text-2xl md:text-[36px] font-semibold text-[#ECECEC] mb-3">Ready to get started?</h1>
                        <p className="text-sm md:text-base text-[#EDEDED] font-medium">Amet minim mollit non deserunt ullamco est
                            sit
                            aliqua sint. velit officia consequat.</p>
                    </div>
                    <div className="rounded-md max-w-[496px] mt-7 md:mt-0">
                        <h1 className="font-medium text-base md:text-[20px] mb-[26px] text-white">Subscribe to our newsletter</h1>
                        <div className="flex flex-wrap items-center gap-6">
                            <div className="h-[56px] w-[236px] flex items-center justify-center bg-[#3C3C6B] rounded-md px-6">
                                <input className="outline-none text-xs md:text-sm font-medium px-2 bg-transparent" type="email"
                                    placeholder="email address" />
                            </div>
                            <button
                                className="h-[56px] py-2 md:py-[14px] w-[130px] md:w-[149px] bg-[#FF6AC2] text-sm md:text-base font-semibold text-white rounded-md">Subscribe
                                now</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home_3;