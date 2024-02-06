import React from 'react';
import Home_4_Banner from '../../Sections/Home_4_Banner';
import Message_Box from '../../Sections/Message_Box';
import useTitle from '../../../Custom_Hooks/useTitle';

const Contact_Us_4 = () => {
    useTitle('Contact Us');

    return (
        <div className='mb-[80px] md:mb-[110px]'>
            <section>
                <Home_4_Banner
                    max_width="746"
                    title="Contact Us"
                    title_size="36"
                    des_color="text-[#FFF5F2]"></Home_4_Banner>
            </section>
            <main className="max-w-[1138px] mx-auto">
                <section className="mt-[30px] md:mt-[64px] px-5 xl:px-0">
                    <h1 className="font-semibold text-[24px] md:text-[36px] text-[#262729] text-center mb-[61px]">Get In Touch With
                        Us
                    </h1>
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <div data-aos="flip-left" data-aos-duration="1000" data-aos-delay="0" data-aos-easing="ease-in-out"
                            className="w-[171px] h-[119px] flex items-center justify-center px-5 mini-card hover:bg-[#E35C30] rounded-lg text-center">
                            <div>
                                <img className="mx-auto black-image" src="../../../../public/images/icons/tour-black.svg" alt="" />
                                <img className="mx-auto white-image" src="../../../../public/images/icons/tour-white.svg" alt="" />
                                <h5 className="text-base my-1 text-[#2C2003] font-semibold">Our Address</h5>
                                <p className="text-sm text-[#676769]">32D, Jenmark road, Franklin. USA</p>
                            </div>
                        </div>
                        <div data-aos="flip-left" data-aos-duration="1000" data-aos-delay="0" data-aos-easing="ease-in-out"
                            className="w-[171px] h-[119px] flex items-center justify-center px-5 mini-card hover:bg-[#E35C30] rounded-lg text-center">
                            <div>
                                <img className="mx-auto black-image" src="../../../../public/images/icons/call-black.svg" alt="" />
                                <img className="mx-auto white-image" src="../../../../public/images/icons/call-white.svg" alt="" />
                                <h5 className="text-base my-1 text-[#2C2003] font-semibold">Contact</h5>
                                <p className="text-sm text-[#676769]">+1(135) 1984 2020</p>
                            </div>
                        </div>
                        <div data-aos="flip-left" data-aos-duration="1000" data-aos-delay="0" data-aos-easing="ease-in-out"
                            className="w-[171px] h-[119px] flex items-center justify-center px-5 mini-card hover:bg-[#E35C30] rounded-lg text-center">
                            <div>
                                <img className="mx-auto black-image" src="../../../../public/images/icons/mail-black.svg" alt="" />
                                <img className="mx-auto white-image" src="../../../../public/images/icons/mail-white.svg" alt="" />
                                <h5 className="text-base my-1 text-[#2C2003] font-semibold">Email</h5>
                                <p className="text-sm text-[#676769]">hello@edly.com</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='mt-[83px]'>
                    <Message_Box></Message_Box>
                </section>
            </main>
        </div>
    );
};

export default Contact_Us_4;