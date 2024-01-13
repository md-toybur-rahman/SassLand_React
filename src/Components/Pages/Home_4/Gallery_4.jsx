import React from 'react';
import Home_4_Banner from '../../Sections/Home_4_Banner';
import Home_4_Client_Think_Section from '../../Sections/Home_4_Client_Think_Section';

const Gallery_4 = () => {
    return (
        <div className='mb-[80px] md:mb-[148px]'>
            <section>
                <Home_4_Banner
                    max_width="746"
                    title="Our Gallery"
                    title_size="36"
                    des_color="text-[#FFF5F2]"></Home_4_Banner>
            </section>
            <main className="max-w-[1140px] mx-auto ">
                <section className="mt-[70px] md:mt-[113px] px-5 xl:px-0">
                    <div className="flex items-center justify-center flex-wrap gap-6">
                        <div data-aos="fade-down-right" data-aos-duration="1000" data-aos-delay="0"
                            data-aos-easing="ease-in-out">
                            <img src="../../../../public/images/home4-gallery1.png" alt="" />
                        </div>
                        <div data-aos="fade-down" data-aos-duration="1000" data-aos-delay="0" data-aos-easing="ease-in-out">
                            <img src="../../../../public/images/home4-gallery2.png" alt="" />
                        </div>
                        <div data-aos="fade-down-left" data-aos-duration="1000" data-aos-delay="0"
                            data-aos-easing="ease-in-out">
                            <img src="../../../../public/images/home4-gallery3.png" alt="" />
                        </div>
                        <div data-aos="fade-up-right" data-aos-duration="1000" data-aos-delay="0" data-aos-easing="ease-in-out">
                            <img src="../../../../public/images/home4-gallery4.png" alt="" />
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0" data-aos-easing="ease-in-out">
                            <img src="../../../../public/images/home4-gallery5.png" alt="" />
                        </div>
                        <div data-aos="fade-up-left" data-aos-duration="1000" data-aos-delay="0" data-aos-easing="ease-in-out">
                            <img src="../../../../public/images/home4-gallery6.png" alt="" />
                        </div>
                    </div>
                </section>
                <section className='px-5 lg:px-0 mt-[100px] md:mt-[203px]'>
                    <Home_4_Client_Think_Section></Home_4_Client_Think_Section>
                </section>
            </main>
        </div>
    );
};

export default Gallery_4;