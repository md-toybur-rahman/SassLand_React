import React from 'react';
import Home_2_Banner_Title from '../../Sections/Home_2_Banner_Title';
import Contact_Details_Box from '../../Sections/Contact_Details_Box';
import Message_Box from '../../Sections/Message_Box';

const Contact_Us_Variation_2 = () => {
    return (
        <div>
            <div className="mt-[50px] md:mt-[86px]">
                <Home_2_Banner_Title
                    max_width="746"
                    title="Contact Us"
                    title_min_size="36"
                    title_max_size="57"
                    space="32"
                    description="We partner closely
                with the most progressive companies in the world to improve their customer support
                operations. As consumers, we all have our"
                    des_min_size="16"
                    des_max_size="20"
                    leading="32"></Home_2_Banner_Title>
            </div>
            <main className="max-w-[1045px]  mx-auto px-5 xl:px-0">
                <section className="flex justify-center">
                    <div className="mt-[50px] md:mt-[125px] flex flex-col sm:flex-row flex-wrap sm:items-center justify-center gap-[81px]">
                        <div data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="400">
                            <Contact_Details_Box image="../../../../public/images/icons/call-yellow.svg" title="Call Us" contact_first_line="+1-940-394-2948"
                                contact_second_line="+1-389-385-3807"></Contact_Details_Box>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="200">
                            <Contact_Details_Box image="../../../../public/images/icons/mail-yellow.svg" title="Email us" contact_first_line="support@grayic.com"
                                contact_second_line="contact@grayic.com"></Contact_Details_Box>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="0">
                            <Contact_Details_Box image="../../../../public/images/icons/tour-yellow.svg" title="Visit us" contact_first_line="34 Madison Street,NY,"
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

export default Contact_Us_Variation_2;