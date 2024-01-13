import React from 'react';
import Home_4_Features_Card from '../../Sections/Home_4_Features_Card';
import Trusted_Companies from '../../Sections/Trusted_Companies';
import Home_4_Client_Think_Section from '../../Sections/Home_4_Client_Think_Section';
import FAQ_Medium_Card from '../../Sections/FAQ_Medium_Card';

const Home_4 = () => {
    return (
        <div className='mb-[80px] md:mb-[119px]'>
            <section>
                <div className="bg-[#FEF8F7] h-[300px] flex items-center justify-center px-5">
                    <div
                        className=" flex flex-wrap items-center justify-center lg:justify-between gap-6 max-w-[1010px] w-full mx-auto px-10 md:px-0">
                        <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="0" data-aos-easing="ease-in-out"
                            className="text-center">
                            <h1 className="text-[48px] lg:text-[85px] text-[#F9C242] font-bold mb-4">53K</h1>
                            <p className="text-sm md:text-[18px] text-[#A09C9B]">Cool Number</p>
                        </div>
                        <div className="w-[1px] h-[104px] bg-[#E8E8E9]"></div>
                        <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="100" data-aos-easing="ease-in-out"
                            className="text-center">
                            <h1 className="text-[48px] lg:text-[85px] text-[#F9C242] font-bold mb-4">10K</h1>
                            <p className="text-sm md:text-[18px] text-[#A09C9B]">Projects Done</p>
                        </div>
                        <div className="w-[1px] h-[104px] bg-[#E8E8E9]"></div>
                        <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200" data-aos-easing="ease-in-out"
                            className="text-center">
                            <h1 className="text-[48px] lg:text-[85px] text-[#F9C242] font-bold mb-4">120</h1>
                            <p className="text-sm md:text-[18px] text-[#A09C9B]">Cool Number</p>
                        </div>
                    </div>
                </div>
            </section>
            <main className="max-w-[1142px] mx-auto  px-5 xl:px-0">
                <section className="mt-[80px] md:mt-[106px] max-w-[1176px] px-5 xl:px-0">
                    <div className="flex flex-col items-center justify-center mb-[51px]">
                        <p className="font-semibold text-sm md:text-base text-[#70B7FE] mb-6">WHAT WE DO</p>
                        <h1 className="font-semibold text-3xl md:text-[57px] text-[#14202D] mb-4">Our Best Features</h1>
                    </div>
                    <div className="flex items-center gap-[44px] flex-wrap justify-center">
                        <div data-aos="flip-left" data-aos-duration="1000" data-aos-delay="0" data-aos-easing="ease-in-out">
                            <Home_4_Features_Card image="../../../../public/images/icons/Designer1-home4.svg" title="Design & Vreatives"></Home_4_Features_Card>
                        </div>
                        <div data-aos="flip-left" data-aos-duration="1000" data-aos-delay="200" data-aos-easing="ease-in-out">
                            <Home_4_Features_Card image="../../../../public/images/icons/Designer2-home4.svg" title="Team Accounts"></Home_4_Features_Card>
                        </div>
                        <div data-aos="flip-left" data-aos-duration="1000" data-aos-delay="400" data-aos-easing="ease-in-out">
                            <Home_4_Features_Card image="../../../../public/images/icons/Designer3-home4.svg" title="Branding"></Home_4_Features_Card>
                        </div>
                    </div>
                </section>
                <section
                    className="flex flex-wrap md:flex-nowrap items-center justify-center lg:justify-between gap-[86px] mt-[100px] md:mt-[150px]">
                    <div>
                        <img data-aos="fade-right" data-aos-duration="1000" data-aos-delay="0" data-aos-easing="ease-in-out" src="../../../../public/images/Sleek-slider-image.png" alt="" />
                    </div>
                    <div className="max-w-[553px]">
                        <div className="mb-6">
                            <h1 className="font-bold text-[24px] md:text-[36px] text-[#242221] mb-4 leading-[54px]">Create Sleek
                                Slides Faster Than
                                Ever</h1>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-2">
                                <img src="../../../../public/images/icons/mini-check.svg" alt="" />
                                <p className="font-medium text-sm md:text-base text-[#4E5B69]">Quickly add photos, icons, logos, and
                                    videos.</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src="../../../../public/images/icons/mini-check.svg" alt="" />
                                <p className="font-medium text-sm md:text-base text-[#4E5B69]">Build layouts with shortcuts and
                                    smart tools.</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src="../../../../public/images/icons/mini-check.svg" alt="" />
                                <p className="font-medium text-sm md:text-base text-[#4E5B69]">Collaborate with others in real time.
                                </p>
                            </div>
                        </div>
                        <button
                            className="h-[56px] w-[201px] flex items-center justify-center bg-[#E35C30] text-white font-semibold mt-[56px] rounded-full">See
                            Details</button>
                    </div>
                </section>

                <section className="px-5 lg:px-0 mt-[100px] md:mt-[156px]">
                    <Home_4_Client_Think_Section></Home_4_Client_Think_Section>
                </section>
                <section>
                    <Trusted_Companies></Trusted_Companies>
                </section>
                <section className="mt-[100px] md:mt-[150px] px-5 lg:px-0 ">
                    <div className="flex flex-col items-center justify-center mb-[86px]">
                        <h1 className="font-bold text-[24px] md:text-[36px] text-[#242221] mb-6">Our Subscription Packages</h1>
                        <p
                            className="font-medium text-base md:text-[20px] text-[#676769] leading-[32px] mb-4 max-w-[730px] mx-auto text-center">
                            We partner closely with the most progressive companies in the woown version of that one call to
                            customer support.</p>
                    </div>
                    <div className="mt-[82px] flex items-end gap-[50px] lg:gap-[74px] flex-wrap justify-center">
                        <div data-aos="fade-down" data-aos-duration="1000" data-aos-delay="0" data-aos-easing="ease-in-out" className="bg-[#FEFBFA] border border-[#E5E8EC] rounded-2xl w-[313px] ps-[24px] pe-[18px] py-[34px]">
                            <div className="mb-6">
                                <h1 className="text-[24px] font-bold text-[#14202D] mb-2">Business</h1>
                                <p className="text-xs md:text-sm text-[#6F7A85]">Everything you need to control spend and optimize
                                    finance.</p>
                            </div>
                            <div className="mb-[42px]">
                                <h1 className="font-extrabold text-4xl md:text-4xl mb-2 tracking-tighter text-[#14202D]"><span
                                    className="text-base md:text-base font-bold">$</span>99<span
                                        className="text-sm md:text-base font-bold tracking-normal"> /mo</span></h1>
                                <p className="text-[#333333] font-medium text-xs md:text-sm mb-6">Save 20% when billed yearly
                                </p>
                                <button
                                    className="px-10 md:px-[62px] py-2 md:py-[11px] font-medium text-xs md:text-sm rounded-full bg-[#E35C30] text-white">Start
                                    free 7-day trial</button>
                            </div>
                            <div>
                                <h1 className="text-[#14202D] text-sm md:text-base font-semibold mb-[10px]">Creator includes:</h1>
                                <ul className="flex flex-col gap-[13.82px] text-[#77818B]">
                                    <li className="flex items-center gap-2">
                                        <img src="../../../../public/images/icons/mini-check.svg" alt="" />
                                        <h1 className="font-normal text-xs md:text-[13px]">Includes 1 seat</h1>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <img src="../../../../public/images/icons/mini-check.svg" alt="" />
                                        <h1 className="font-normal text-xs md:text-[13px]">1 Brand voice</h1>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <img src="../../../../public/images/icons/mini-check.svg" alt="" />
                                        <h1 className="font-normal text-xs md:text-[13px]">50+ Templates</h1>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <img src="../../../../public/images/icons/mini-check.svg" alt="" />
                                        <h1 className="font-noraml text-xs md:text-[13px]">Access SEO mode</h1>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <img src="../../../../public/images/icons/mini-check.svg" alt="" />
                                        <h1 className="font-normal text-xs md:text-[13px]">Use AI everywhere with browser
                                            extension</h1>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0" data-aos-easing="ease-in-out" className="bg-[#FEFBFA] border border-[#E5E8EC] rounded-2xl w-[363px] home4-middle-subscription-card">
                            <div className="h-[23px] bg-[#E35C30] rounded-t-2xl"></div>
                            <div className="ps-[24px] pe-[18px] pt-[15px] pb-[34px]">
                                <div className="mb-6">
                                    <h1 className="text-[36px] font-bold text-[#14202D] mb-2">Business</h1>
                                    <p className="text-sm md:text-base text-[#6F7A85]">Everything you need to control spend and
                                        optimize
                                        finance.</p>
                                </div>
                                <div className="mb-[42px]">
                                    <h1 className="font-extrabold text-[36px] md:text-[48px] mb-2 tracking-tighter text-[#E35C30]">
                                        $99
                                        <span className="font-medium">/mo</span>
                                    </h1>
                                    <p className="text-[#333333] font-medium text-xs md:text-sm mb-6">Save 20% when billed yearly
                                    </p>
                                    <button
                                        className="px-14 md:px-[72px] py-2 md:py-3 font-medium text-sm md:text-[17px] rounded-full bg-[#E35C30] text-white">Start
                                        free 7-day trial</button>
                                </div>
                                <div>
                                    <h1 className="text-[#14202D] text-sm md:text-base font-semibold mb-[10px]">Creator includes:
                                    </h1>
                                    <ul className="flex flex-col gap-[16.7px] text-[#77818B]">
                                        <li className="flex items-center gap-2">
                                            <img className="w-[17px] h-[18px]" src="../../../../public/images/icons/mini-check.svg" alt="" />
                                            <h1 className="font-normal text-xs md:text-[15px]">Includes 1 seat</h1>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <img className="w-[17px] h-[18px]" src="../../../../public/images/icons/mini-check.svg" alt="" />
                                            <h1 className="font-normal text-xs md:text-[15px]">1 Brand voice</h1>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <img className="w-[17px] h-[18px]" src="../../../../public/images/icons/mini-check.svg" alt="" />
                                            <h1 className="font-normal text-xs md:text-[15px]">50+ Templates</h1>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <img className="w-[17px] h-[18px]" src="../../../../public/images/icons/mini-check.svg" alt="" />
                                            <h1 className="font-noraml text-xs md:text-[15px]">Access SEO mode</h1>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <img className="w-[17px] h-[18px]" src="../../../../public/images/icons/mini-check.svg" alt="" />
                                            <h1 className="font-normal text-xs md:text-[15px]">Use AI everywhere with browser
                                                extension</h1>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-down" data-aos-duration="1000" data-aos-delay="0" data-aos-easing="ease-in-out" className="bg-[#FEFBFA] border border-[#E5E8EC] rounded-2xl w-[313px] ps-[24px] pe-[18px] py-[34px]">
                            <div className="mb-6">
                                <h1 className="text-[24px] font-bold text-[#14202D] mb-2">Business</h1>
                                <p className="text-xs md:text-sm text-[#6F7A85]">Everything you need to control spend and optimize
                                    finance.</p>
                            </div>
                            <div className="mb-[42px]">
                                <h1 className="font-extrabold text-4xl md:text-4xl mb-2 tracking-tighter text-[#14202D]"><span
                                    className="text-base md:text-base font-bold">$</span>99<span
                                        className="text-sm md:text-base font-bold tracking-normal"> /mo</span></h1>
                                <p className="text-[#333333] font-medium text-xs md:text-sm mb-6">Save 20% when billed yearly
                                </p>
                                <button
                                    className="px-10 md:px-[62px] py-2 md:py-[11px] font-medium text-xs md:text-sm rounded-full bg-[#E35C30] text-white">Start
                                    free 7-day trial</button>
                            </div>
                            <div>
                                <h1 className="text-[#14202D] text-sm md:text-base font-semibold mb-[10px]">Creator includes:</h1>
                                <ul className="flex flex-col gap-[13.82px] text-[#77818B]">
                                    <li className="flex items-center gap-2">
                                        <img src="../../../../public/images/icons/mini-check.svg" alt="" />
                                        <h1 className="font-normal text-xs md:text-[13px]">Includes 1 seat</h1>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <img src="../../../../public/images/icons/mini-check.svg" alt="" />
                                        <h1 className="font-normal text-xs md:text-[13px]">1 Brand voice</h1>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <img src="../../../../public/images/icons/mini-check.svg" alt="" />
                                        <h1 className="font-normal text-xs md:text-[13px]">50+ Templates</h1>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <img src="../../../../public/images/icons/mini-check.svg" alt="" />
                                        <h1 className="font-noraml text-xs md:text-[13px]">Access SEO mode</h1>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <img src="../../../../public/images/icons/mini-check.svg" alt="" />
                                        <h1 className="font-normal text-xs md:text-[13px]">Use AI everywhere with browser
                                            extension</h1>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-[86px] md:mt-[150px] max-w-[631px] mx-auto px-5 md:px-0">
                    <div className="">
                        <h1 className="text-[24px] md:text-[text-36px] font-semibold text-[#262729] text-center mb-4">FAQ</h1>
                        <p className="max-w-[461px] text-[#606086] leading-[32px] mx-auto text-center text-base">Everything you need
                            to
                            control spend and optimize finance operations, all on a single platform.</p>
                    </div>
                    <div className="mt-[42px]">
                        <FAQ_Medium_Card
                            question="Can I use Albino for my clients???"
                            answer="With lots of unique blocks, you can easily build a page without
                        coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a
                        porta. Aliquam sagittis interdum Melisandre.."
                            index="0"></FAQ_Medium_Card>

                        <FAQ_Medium_Card
                            question="Can I use Albino for my clients???"
                            answer="With lots of unique blocks, you can easily build a page without
                        coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a
                        porta. Aliquam sagittis interdum Melisandre.."
                            index="1"></FAQ_Medium_Card>

                        <FAQ_Medium_Card
                            question="Can I use Albino for my clients???"
                            answer="With lots of unique blocks, you can easily build a page without
                        coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a
                        porta. Aliquam sagittis interdum Melisandre.."
                            index="2"></FAQ_Medium_Card>
                    </div>
                    <div className="flex flex-wrap gap-2 items-center justify-center mt-[55px]">
                        <button
                            className="bg-[#E35C30] rounded-full text-white w-[201px] h-[56px] font-semibold text-sm md:text-base">See
                            all FAQs</button>
                        <button
                            className="bg-transparent border border-[#8D8D8E] rounded-full text-[#242221] w-[201px] h-[56px] font-semibold text-sm md:text-base">Get
                            in touch</button>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home_4;