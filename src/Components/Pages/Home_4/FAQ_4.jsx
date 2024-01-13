import React from 'react';
import Home_4_Banner from '../../Sections/Home_4_Banner';
import Home_4_Ready_2_Section from '../../Sections/Home_4_Ready_2_Section';
import FAQ_Medium_Card from '../../Sections/FAQ_Medium_Card';

const FAQ_4 = () => {
    return (
        <div className='mb-[80px] md:mb-[141px]'>
            <section>
                <Home_4_Banner
                    max_width="746"
                    title="FAQs"
                    title_size="36"
                    des_color="text-[#FFF5F2]"></Home_4_Banner>
            </section>

            <main className="max-w-[1138px] mx-auto">
                <section className="mt-[60px] md:mt-[60px] px-5 xl:px-0">
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <div data-aos="flip-left" data-aos-duration="1000" data-aos-delay="0" data-aos-easing="ease-in-out"
                            className="w-[171px] h-[119px] py-6 flex items-end justify-center px-5 mini-card hover:bg-[#E35C30] rounded-lg text-center">
                            <div>
                                <p className="text-base text-[#676769] font-medium">Getting Started</p>
                            </div>
                        </div>
                        <div data-aos="flip-left" data-aos-duration="1000" data-aos-delay="0" data-aos-easing="ease-in-out"
                            className="w-[171px] h-[119px] py-6 flex items-end justify-center px-5 mini-card hover:bg-[#E35C30] rounded-lg text-center">
                            <div>
                                <p className="text-base text-[#676769] font-medium">Pricing & Planes</p>
                            </div>
                        </div>
                        <div data-aos="flip-left" data-aos-duration="1000" data-aos-delay="0" data-aos-easing="ease-in-out"
                            className="w-[171px] h-[119px] py-6 flex items-end justify-center px-5 mini-card hover:bg-[#E35C30] rounded-lg text-center">
                            <div>
                                <p className="text-base text-[#676769] font-medium">Sales Question</p>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-[640px] mx-auto text-center mt-[42px]">
                        <h1 className="font-semibold text-[24px] md:text-[36px] text-[#262729] mb-4">Frequently Asked Questions</h1>
                        <p className="text-sm md:text-base text-[#676769] font-medium md:leading-[32px]">Everything
                            you need to control spend and optimize finance operations, all on a single platform.</p>
                    </div>
                    <div className="mt-[74px] max-w-[1138px] mx-auto px-5 md:px-0">
                        <div className="">
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
                        <div className="flex flex-wrap gap-2 items-center justify-center mt-6">
                            <p className="text-[#808080] text-sm font-medium">Haven’t got your answer? <a className="text-[#E35C30]"
                                href="Contact_US.html">Contact our support now</a></p>
                        </div>
                    </div>
                </section>
            </main>
            <section className="rounded-2xl mt-[50px] md:mt-[120px] max-w-[1142px] mx-auto px-5 xl:px-0">
                    <Home_4_Ready_2_Section></Home_4_Ready_2_Section>
            </section>
        </div>
    );
};

export default FAQ_4;