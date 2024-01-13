import React from 'react';
import { Link } from 'react-router-dom';

const Home_3_Gallery_Section = (props) => {
    return (
        <section className={`${props.top_space}`}>
            <div
                className={`flex flex-wrap ${props.flex_position} md:flex-nowrap gap-6 lg:gap-[50px] items-center justify-center md:justify-between`}>
                <div className="max-w-[456px] md:max-w-[400px] lg:max-w-[456px] text-center md:text-start">
                    <h1 className=" text-[24px] md:text-[36px] text-[#262729] font-bold max-w-[947px] mx-auto">Our Company
                        work</h1>
                    <p className="text-sm md:text-base text-[#606086] font-medium mx-auto mt-6">By accessing and placing an
                        order with UXTheme, you confirm that you are in agreement with and bound by the terms and
                        conditions contained in the Terms Of Use outlined below. These terms apply to the entire website
                        and any email or other type of communication between you and UXTheme. Under no circumstances
                        shall</p>
                    <Link className="text-sm md:text-base font-semibold flex items-center justify-center md:justify-start gap-4 text-[#FF6AC2] mt-4 md:mt-[50px]">Read More <img src="../../../public/images/icons/arrow_outward.svg" alt="" /></Link>
                </div>
                <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="0" data-aos-easing="ease-in-out">
                    <p className="text-[#676769] font-medium text-base mb-[23px] text-end">By accessing and </p>
                    <img src="../../../public/images/gallery_image-home3.png" alt="" />
                </div>
            </div>
        </section>
    );
};

export default Home_3_Gallery_Section;