// import React from 'react';

import Home_2_Banner_Title from "../../Sections/Home_2_Banner_Title";
import Home_2_Ready_Section from "../../Sections/Home_2_Ready_Section";

const Gallery_2 = () => {
    return (
        <div>
            <div className="mt-[50px] md:mt-[86px]">
                <Home_2_Banner_Title
                    max_width="640"
                    title="Gallery"
                    title_min_size="24"
                    title_max_size="36"
                    space="16"
                    description="Everything you need to control spend and optimize finance operations, all on a single platform."
                    des_min_size="14"
                    des_max_size="16"
                    leading="32"></Home_2_Banner_Title>
            </div>
            <main className="max-w-[1142px]  mx-auto px-5 xl:px-0">
                <div className="flex gap-2 sm:gap-5 md:gap-8 items-end mt-[50px] md:mt-[102px]">
                    <div className="flex flex-col items-end gap-3 sm:gap-5 md:gap-8">
                        <img data-aos="fade-down-right" data-aos-duration="1000" data-aos-easing="ease-in-out"
                            data-aos-delay="0" src="../../../../public/images/gallery1-home2.png" alt="" />
                        <img data-aos="fade-up-right" data-aos-duration="1000" data-aos-easing="ease-in-out"
                            data-aos-delay="0" className="w-[100px] md:w-[180px] lg:w-[272px]"
                            src="../../../../public/images/gallery4-home2.png" alt="" />
                    </div>
                    <div>
                        <img data-aos="fade-in" data-aos-duration="2000" className="min-h-[175px]"
                            src="../../../../public/images/gallery2-home2.png" alt="" />
                    </div>
                    <div className="flex flex-col items-start gap-2 sm:gap-[10px] md:gap-[17px]">
                        <img data-aos="fade-down-left" data-aos-duration="1000" data-aos-easing="ease-in-out"
                            data-aos-delay="0" className="w-[100px] md:w-[180px] lg:w-[272px]"
                            src="../../../../public/images/gallery3-home2.png" alt="" />
                        <img data-aos="fade-up-left" data-aos-duration="1000" data-aos-easing="ease-in-out"
                            data-aos-delay="0" src="../../../../public/images/gallery5-home2.png" alt="" />
                    </div>
                </div>
                <div className="mt-[80px] md:mt-[120px]">
                    <Home_2_Ready_Section></Home_2_Ready_Section>
                </div>
            </main>
        </div>
    );
};

export default Gallery_2;