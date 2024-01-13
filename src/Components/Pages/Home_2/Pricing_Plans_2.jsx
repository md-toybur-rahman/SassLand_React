import React from 'react';
import Home_2_Banner_Title from '../../Sections/Home_2_Banner_Title';
import Home_2_Pricing_Card from '../../Sections/Home_2_Pricing_Card';
import { Link } from 'react-router-dom';
import FAQ_Medium_Card from '../../Sections/FAQ_Medium_Card';

const Pricing_Plans_2 = () => {
    return (
        <div>
            <div className="mt-[50px] md:mt-[86px]">
                <Home_2_Banner_Title
                    max_width="640"
                    title="Our Subscription Packages"
                    title_min_size="24"
                    title_max_size="36"
                    space="16"
                    description="Everything you need to control spend and optimize finance operations, all on a single platform."
                    des_min_size="14"
                    des_max_size="16"
                    leading="32"></Home_2_Banner_Title>
            </div>
            <main className="max-w-[1142px] mx-auto px-5 xl:px-0 mt-[50px] lg:mt-[86px]">
                <section className="flex gap-6 flex-wrap lg:flex-nowrap justify-center items-center mt-[42px]">
                    <Home_2_Pricing_Card category="STARTER" price="99" delay="0"></Home_2_Pricing_Card>
                    <Home_2_Pricing_Card category="STARTER" price="99" delay="200"></Home_2_Pricing_Card>
                    <Home_2_Pricing_Card category="STARTER" price="99" delay="400"></Home_2_Pricing_Card>
                </section>

                <section className="mt-[155px]">
                    <div className="max-w-[640px] mx-auto text-center">
                        <h1 className="font-bold text-[#2C2003] text-[24px] md:text-[36px] mb-4">Frequently Asked Questions</h1>
                        <p className="text-sm md:text-base font-medium text-[#676769]">Everything you need to control spend
                            and optimize finance operations, all on a single platform.</p>
                    </div>
                    <div className="mt-[44px]">
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
                    <div>
                        <p className="text-[#A69F8E] font-semibold text-sm mt-2 text-center">Haven’t got your answer? <Link
                            className="text-[#FFB200]" to="/Home_2/Contact_Us">Contact our support now</Link></p>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Pricing_Plans_2;