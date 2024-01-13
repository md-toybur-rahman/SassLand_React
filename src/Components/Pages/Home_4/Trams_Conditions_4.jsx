import React from 'react';
import Home_4_Banner from '../../Sections/Home_4_Banner';
import Home_4_Ready_2_Section from '../../Sections/Home_4_Ready_2_Section';

const Trams_Conditions_4 = () => {
    return (
        <div className='mb-[80px] md:mb-[153px]'>
            <section>
                <Home_4_Banner
                    max_width="640"
                    title="Terms & Conditions"
                    title_size="57"
                    description="By accessing and
                placing an order with UXTheme, you confirm that you are in agreement with and bound by the terms and
                conditions"
                    des_color="text-[#676769]"></Home_4_Banner>
            </section>
            <main className="max-w-[1138px] mx-auto">
                <section className="mt-[30px] md:mt-[30px] px-5 xl:px-0">
                    <p className="max-w-[1043px] text-sm md:text-base leading-[24px] font-medium text-[#676769]">By accessing and
                        placing an order with UXTheme, you confirm that you are in agreement with and bound by the terms and
                        conditions contained in the Terms Of Use outlined below. These terms apply to the entire website and any
                        email or other type of communication between you and UXTheme. Under no circumstances shall UXTheme team
                        be liable for any direct, indirect, special, incidental or consequential damages, including, but not
                        limited to, loss of data or profit, arising out of the use, or the inability to use, the materials on
                        this site, even if UXTheme team or an authorized representative has been advised of the possibility of
                        such damages. If your use of materials from this site results in the need for servicing, repair or
                        correction of equipment or data, you assume any costs thereof. UXTheme will not be responsible for any
                        outcome that may occur during the course of usage of our resources.</p>


                    <div>
                        <div className="mt-10 md:mt-[83px]">
                            <p className="font-semibold text-[#454545] text-sm md:text-base">1.Our Website</p>
                            <p className="max-w-[1043px] text-sm md:text-base leading-[24px] font-medium text-[#676769] mt-6">By
                                accessing and placing an order with UXTheme, you confirm that you are in agreement with and
                                bound by the terms and conditions contained in the Terms Of Use outlined below. These terms
                                apply to</p>
                        </div>
                        <div className="mt-10 md:mt-[83px]">
                            <p className="font-semibold text-[#454545] text-sm md:text-base">2.Data You Provide to Us</p>
                            <p className="max-w-[1043px] text-sm md:text-base leading-[24px] font-medium text-[#676769] mt-6">By
                                accessing and placing an order with UXTheme, you confirm that you are in agreement with and
                                bound by the terms and conditions contained in the Terms Of Use outlined below. These terms
                                apply to</p>
                        </div>
                        <div className="mt-10 md:mt-[83px]">
                            <p className="font-semibold text-[#454545] text-sm md:text-base">3. How We Get Data About You</p>
                            <p className="max-w-[1043px] text-sm md:text-base leading-[24px] font-medium text-[#676769] mt-6">By
                                accessing and placing an order with UXTheme, you confirm that you are in agreement with and
                                bound by the terms and conditions contained in the Terms Of Use outlined below. These terms
                                apply to</p>
                        </div>
                        <div className="mt-10 md:mt-[83px]">
                            <p className="font-semibold text-[#454545] text-sm md:text-base">4. What We Use Your Data For</p>
                            <p className="max-w-[1043px] text-sm md:text-base leading-[24px] font-medium text-[#676769] mt-6">By
                                accessing and placing an order with UXTheme, you confirm that you are in agreement with and
                                bound by the terms and conditions contained in the Terms Of Use outlined below. These terms
                                apply to</p>
                        </div>

                    </div>
                </section>
            </main>
            <section className="rounded-2xl mt-[50px] md:mt-[111px] max-w-[1142px] mx-auto px-5 xl:px-0">
                <Home_4_Ready_2_Section></Home_4_Ready_2_Section>
            </section>
        </div>
    );
};

export default Trams_Conditions_4;