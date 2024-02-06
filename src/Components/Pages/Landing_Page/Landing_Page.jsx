// import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../Custom_Hooks/useTitle';
import FAQ_Medium_Card from '../../Sections/FAQ_Medium_Card';
const Landing_Page = () => {
    useTitle('Landing_Page');
    return (
        <div>
            <div className="">
                <section className="">
                    <nav className="mx-6 md:mx-[70px] xl:mx-[150px] py-[18px] flex items-center justify-between">

                        <div className="flex items-center gap-1">
                            <img className="w-[100px] md:w-auto" src="../../../../public/images/icons/Landing-logo.svg" alt="" />
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                className="w-[100px] md:w-[155px] h-[44px] md:h-[56px] flex items-center justify-center bg-[#6366F1] text-sm font-medium text-white rounded-md">Buy
                                Now</button>
                        </div>
                    </nav>


                    {/* Banner Section */}
                    <section
                        className="mt-[50px] md:mt-[104px] lg:flex items-center justify-between mx-6 md:mx-[70px] xl:mx-[150px]">
                        <div className="flex flex-col items-center justify-center w-full">
                            <div className="max-w-[746px] text-center">
                                <h1
                                    className="font-bold text-[#333765] text-[24px] sm:text-[36px] lg:text-[57px] leading-[50px] md:leading-[72px] mb-6">
                                    A Powerful &
                                    Modern Theme for Sass.</h1>
                                <p className="text-sm md:text-base lg:text-[20px] font-medium leading-[36px] text-[#807E7E]">We
                                    partner closely with the most progressive companies in the woown version of that one call to
                                    customer support.</p>
                            </div>
                            <div className="flex flex-wrap gap-4 items-center justify-center mt-[42px]">
                                <button
                                    className="bg-[#6366F1] rounded-md text-white w-[167px] py-3 md:py-[15px] font-medium text-xs md:text-sm">CHECK
                                    DEMOS</button>
                                <button
                                    className="bg-transparent border border-[#E2E2EB] rounded-md text-[#757575] w-[232px] py-3 md:py-[15px] font-medium text-xs md:text-sm">BUY
                                    SASSLAND NOW</button>
                            </div>
                        </div>
                    </section>
                    {/* End Banner Section */}
                </section>
                {/* End Menubar and Banner Section */}
            </div>


            {/* Top Main */}
            <main className="max-w-[1144px] mx-auto px-5 xl:px-0">

                <section className="mt-[50px] md:mt-[154px]">
                    <div className="text-center">
                        <h1 className="text-[24px] md:text-[36px] font-medium text-[#333765]">Explore the demos</h1>
                        <p className="text-base text-[#8C8CA6] mt-6">Create quick beautiful website pages using ready components</p>
                    </div>
                    <div className="flex items-center justify-center flex-wrap gap-x-6 gap-y-[42px] mt-[40px] md:mt-[86px]">
                        <Link to="/Home_1" className="sm:max-w-[541px]">
                            <div data-aos="flip-down" data-aos-duration="1000" data-aos-delay="0" data-aos-easing="ease-in-out" className="sm:w-[541px] sm:h-[292px] rounded-3xl overflow-hidden">
                                <img className="w-full h-full" src="../../../../public/images/home_1.png" alt="" />
                            </div>
                            <p className="mt-[32px] text-[18px] md:text-[24px] font-medium text-[#333765] text-center">Landing page
                                1</p>
                        </Link>
                        <Link to="/Home_2" className="sm:max-w-[541px]">
                            <div data-aos="flip-down" data-aos-duration="1000" data-aos-delay="0" data-aos-easing="ease-in-out" className="sm:w-[541px] sm:h-[292px] rounded-3xl overflow-hidden">
                                <img className="w-full h-full" src="../../../../public/images/home_2.png" alt="" />
                            </div>
                            <p className="mt-[32px] text-[18px] md:text-[24px] font-medium text-[#333765] text-center">Landing page
                                2</p>
                        </Link>
                        <Link to="/Home_3" className="sm:max-w-[541px]">
                            <div data-aos="flip-down" data-aos-duration="1000" data-aos-delay="200" data-aos-easing="ease-in-out" className="sm:w-[541px] sm:h-[292px] rounded-3xl overflow-hidden">
                                <img className="w-full h-full" src="../../../../public/images/home_3.png" alt="" />
                            </div>
                            <p className="mt-[32px] text-[18px] md:text-[24px] font-medium text-[#333765] text-center">Landing page
                                3</p>
                        </Link>
                        <Link to="/Home_4" className="sm:max-w-[541px]">
                            <div data-aos="flip-down" data-aos-duration="1000" data-aos-delay="200" data-aos-easing="ease-in-out" className="sm:w-[541px] sm:h-[292px] rounded-3xl overflow-hidden">
                                <img className="w-full h-full" src="../../../../public/images/home_4.png" alt="" />
                            </div>
                            <p className="mt-[32px] text-[18px] md:text-[24px] font-medium text-[#333765] text-center">Landing page
                                4</p>
                        </Link>
                        <Link to="/Home_5" className="sm:max-w-[541px]">
                            <div data-aos="flip-down" data-aos-duration="1000" data-aos-delay="200" data-aos-easing="ease-in-out" className="sm:w-[541px] sm:h-[292px] rounded-3xl overflow-hidden">
                                <img className="w-full h-full" src="../../../../public/images/Home_page5_landing.png" alt="" />
                            </div>
                            <p className="mt-[32px] text-[18px] md:text-[24px] font-medium text-[#333765] text-center">Landing page
                                5</p>
                        </Link>
                    </div>
                </section>

            </main>
            {/* End Top Main */}


            {/* Bottom Main */}
            <main className="max-w-[1137px] mx-auto">
                {/* FAQ Section */}
                <section className="mt-[86px] max-w-[631px] mx-auto px-5 md:px-0">
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
                    <div className="flex flex-wrap gap-4 items-center justify-center mt-[55px]">
                        <button
                            className="bg-[#6366F1] rounded-md text-white w-[201px] h-[56px] font-semibold text-sm md:text-base">See
                            all FAQs</button>
                        <button
                            className="bg-transparent border border-[#E2E2EB] rounded-md text-[#757575] w-[201px] h-[56px] font-semibold text-sm md:text-base">Get
                            in touch</button>
                    </div>
                </section>



                <section className="mt-[70px] md:mt-[140px] lg:flex items-center justify-between mx-6 md:mx-[70px] xl:mx-[150px]">
                    <div className="flex flex-col items-center justify-center w-full">
                        <div className="max-w-[427px] text-center">
                            <p className="text-sm md:text-base lg:text-[20px] font-medium leading-[36px] text-[#807E7E] mb-6">Start
                                building right now!</p>
                            <h1
                                className="font-bold text-[#333765] text-[24px] sm:text-[36px] lg:text-[57px] leading-[50px] md:leading-[72px]">
                                Build Fast, Launch Faster.</h1>
                        </div>
                        <div className="flex flex-wrap gap-4 items-center justify-center mt-[42px]">
                            <button
                                className="bg-[#6366F1] rounded-md text-white w-[232px] py-3 md:py-[15px] font-medium text-xs md:text-sm">BUY
                                SASSLAND NOW</button>
                        </div>
                    </div>
                </section>

            </main>
            {/* End Bottom Main */}





            {/* Footer */}
            <footer className="mt-[100px] md:mt-[262px] pb-[30px] md:pb-[93px]">
                <p className="text-sm font-medium text-[#807E7E] text-center">Made by Temfusion, a Sass Product</p>
            </footer>
            {/* End Footer */}

        </div>
    );
};

export default Landing_Page;