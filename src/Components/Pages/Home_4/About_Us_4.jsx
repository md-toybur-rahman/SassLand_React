import React from 'react';
import Home_4_Banner from '../../Sections/Home_4_Banner';
import Home_4_Client_Think_Section from '../../Sections/Home_4_Client_Think_Section';
import Trusted_Companies from '../../Sections/Trusted_Companies';
import Our_Team from '../../Sections/Our_Team';
import Home_4_Ready_1_Section from '../../Sections/Home_4_Ready_1_Section';

const About_Us_4 = () => {
    return (
        <div className='mb-[54px]'>
            <section>
                <Home_4_Banner
                    max_width="746"
                    title="About Us"
                    title_size="36"
                    description="We partner closely with the most progressive companies in the world to improve their customer
                support operations. As consumers, we all have our own version of that one call to customer support."
                    des_color="text-[#FFF5F2]"></Home_4_Banner>
            </section>
            <section className="mt-[50px] md:mt-[152px] max-w-full overflow-hidden">
                <div className="flex flex-wrap md:flex-nowrap items-center justify-center relative px-5 xl:px-0">
                    <div className="absolute right-0 bottom-0 md:-top-[64px] z-0">
                        <img src="../../../../public/images/helping-background.png" alt="" />
                    </div>
                    <div>
                        <h1
                            className="text-[#262729] text-[24px] md:text-[36px] font-bold leading-[32px] md:leading-[50.5px] text-center md:text-start max-w-[640px]">
                            Helping
                            businesses deliver exceptional buyer experiences.</h1>
                        <p
                            className="mt-6 text-[#676769] text-base md:text-[20px] font-medium leading-[32px] text-center md:text-start max-w-[554px]">
                            We
                            partner closely with the most progressive companies in the world to improve their.</p>
                        <div className="flex md:block items-center justify-center">
                            <button className="mt-[42px] w-[201px] h-[56px] font-semibold text-white rounded-full bg-[#E35C30]">
                                Get Started Free
                            </button>
                        </div>
                    </div>
                    <div className="mt-10 md:mt-0">
                        <img data-aos="fade-left" data-aos-duration="1000" data-aos-delay="0" data-aos-easing="ease-in-out"
                            src="../../../../public/images/Helping-image.png" alt="" />
                    </div>
                </div>
            </section>
            <main className="max-w-[1141px] mx-auto">
                <section className="px-5 lg:px-0 mt-[100px] md:mt-[156px]">
                    <Home_4_Client_Think_Section></Home_4_Client_Think_Section>
                </section>
                <section>
                    <Trusted_Companies></Trusted_Companies>
                </section>
                <section className="mt-[70px] md:mt-[152px] px-5 xl:px-0">
                    <Our_Team
                        facebook_image="Facebook-home4-leader.svg"
                        twitter_image="twitter-home4-leader.svg"
                        linkedin_image="linkedin-home4-leader.svg"
                        instagram_image="instagram-home4-leader.svg"
                    ></Our_Team>
                </section>
            </main>
            <section
                className="bg-[#E35C30] h-[300px] sm:h-[237px] lg:px-[71px] px-5 xl:px-0 flex items-center justify-center mt-[100px] md:mt-[124px] mx-0 md:mx-8 lg:mx-[77px] md:rounded-full">
                <Home_4_Ready_1_Section></Home_4_Ready_1_Section>
            </section>
            <section className="mt-[100px] md:mt-[150px]">
                <div className="max-w-[746px] mx-auto text-center px-5 xl:px-0">
                    <h1 className="font-semibold text-[24px] md:text-[36px] text-[#322F2F] mb-6">The Story of Vidyard</h1>
                    <p className="text-sm md:text-base text-[#676769] font-medium mb-[56px] md:leading-[24px]">We partner
                        closely
                        with
                        the most progressive companies in the world to improve their customer support operations. As
                        consumers,
                        we all have our own version of that one call to customer support.</p>
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="0" data-aos-easing="ease-in-out"
                    className="mt-[42px] h-[497px] w-full home4-about bg-cover bg-center">
                </div>
                <div className="max-w-[746px] mx-auto text-center mt-[42px] px-5 xl:px-0">
                    <p className="text-sm md:text-base text-[#676769] font-medium mb-[56px] md:leading-[24px]">We partner
                        closely
                        with
                        the most progressive companies in the world to improve their customer support operations. As
                        consumers,
                        we all have our own version of that one call to customer support.</p>
                </div>
            </section>
        </div>
    );
};

export default About_Us_4;