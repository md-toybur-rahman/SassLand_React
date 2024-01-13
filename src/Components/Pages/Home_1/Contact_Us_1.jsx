// import React from 'react';

import Contact_Details_Box from "../../Sections/Contact_Details_Box";
import Message_Box from "../../Sections/Message_Box";

const Contact_Us_1 = () => {
    return (
        <div>
            <section className="pt-[46px] lg:flex items-center justify-between mx-6 md:mx-[70px] xl:mx-[150px]">
                <div className="flex flex-col items-center justify-center w-full">
                    <div className="max-w-[746px] text-center">
                        <h1
                            className="font-bold text-[#454545] text-[24px] sm:text-[36px] lg:text-[57px] mb-5 md:mb-[46px]">
                            Contact
                            us</h1>
                        <p className="text-sm md:text-base lg:text-[20px] font-medium text-[#676769] md:leading-[32px]">We
                            partner closely with the most progressive companies in the world to improve their customer
                            support operations. As consumers, we all have our own version of that one call to customer
                            support.
                        </p>
                    </div>
                </div>
            </section>
            <main className="max-w-[1045px]  mx-auto px-5 xl:px-0">
                <section className="flex justify-center">
                    <div className="mt-[50px] md:mt-[125px] flex flex-col sm:flex-row flex-wrap sm:items-center justify-center gap-[81px]">
                        <div data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="400">
                            <Contact_Details_Box image="" title="Call Us" contact_first_line="+1-940-394-2948"
                                contact_second_line="+1-389-385-3807"></Contact_Details_Box>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="200">
                            <Contact_Details_Box image="" title="Email us" contact_first_line="support@grayic.com"
                                contact_second_line="contact@grayic.com"></Contact_Details_Box>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="0">
                            <Contact_Details_Box image="" title="Visit us" contact_first_line="34 Madison Street,NY,"
                                contact_second_line="USA 10005"></Contact_Details_Box>
                        </div>
                    </div>
                </section>

                <div className="mt-[50px] md:mt-[72px] mb-[100px] md:mb-[338px]">
                    <Message_Box></Message_Box>
                </div>
            </main>
        </div>
    );
};

export default Contact_Us_1;