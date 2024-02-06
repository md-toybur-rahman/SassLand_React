import React from 'react';
import Home_3_Related_Post_Card from '../../Sections/Home_3_Related_Post_Card';
import { Link } from 'react-router-dom';
import useTitle from '../../../Custom_Hooks/useTitle';

const Blog_3 = () => {
    useTitle('Blog');

    return (
        <div className='mb-[80px] md:mb-[126px]'>
            <section className="">
                <div
                    className="h-[51px] w-[123px] border border-[#FE79A1] flex items-center justify-center rounded-full mx-auto mt-[50px] md:mt-[81px] font-semibold text-[#1F1F38]">
                    Blog</div>

                <div>
                    <h1
                        className=" text-[24px] md:text-[36px] text-[#676769] font-semibold max-w-[947px] mx-auto text-center mt-[56px]">
                        Our mission is to transform the design
                    </h1>
                    <p className="text-base md:text-[20px] text-[#676769] max-w-[783px] mx-auto text-center mt-4 md:mt-8">We partner
                        closely with the most progressive companies in the world to improve their customer support
                        operations. </p>
                </div>
                <div
                    className="p-2 border border-[#CED2DA] rounded-md mx-auto w-[300px] sm:w-[415px] flex gap-2 justify-between items-center mt-6 md:mt-6 bg-[#FDFDFD]">
                    <input className="outline-none text-sm md:text-base font-medium px-2 w-[150px] sm:w-auto" type="email"
                        placeholder="Enter your email" />
                    <button
                        className="py-2 md:py-[14px] w-[129px] bg-[#FF6AC2] text-sm md:text-base font-semibold text-white rounded-md">Subscribe</button>
                </div>
            </section>
            <main className="max-w-[1142px] mx-auto  px-5 xl:px-0">
                <section className="mt-[70px] md:mt-[112px]">
                    <h1 className="text-[20px] md:text-[24px] font-bold text-[#646566] text-center lg:text-start">Related Posts</h1>
                    <div className="mt-8 flex flex-wrap lg:flex-nowrap items-start justify-center lg:justify-between gap-10 lg:gap-5">
                        <Link to="/Home_3/Blog_Details" className="max-w-[553px]">
                            <img data-aos="fade-in" data-aos-duration="1000" data-aos-delay="0" src="../../../../public/images/blog-post1-home3.png" alt="" />
                            <div className="mt-6">
                                <p className="text-[#6B6B6B] text-[11px] font-medium">Hunter A., -20 jan 2023</p>
                                <div className="flex items-center justify-between gap-5">
                                    <h1 className="text-[20px] md:text-[24px] font-bold text-[#5A5B5C]">Our mission is to transform
                                        the design</h1>
                                    <img className="cursor-pointer" src="../../../../public/images/icons/arrow_outward.svg" alt="" />
                                </div>
                                <p className="mt-4 font-medium text-xs md:text-sm text-[#646464]">At this point, you need to
                                    consider which platforms to publish the content on.We partner closely with the most
                                    progressive companies in the world to improve their customer support operations. </p>
                                <div className="flex items-center justify-center sm:justify-start gap-4 mt-[33px]">
                                    <Link to="/Home_3/Blog"><button 
                                        className="w-[135px] h-[40px] text-sm text-[#9D9E9F] border border-[#CED2DA] rounded-lg">Digital
                                        Marketing</button></Link>
                                    <Link to="/Home_3/Blog"><button 
                                        className="w-[135px] h-[40px] text-sm text-[#9D9E9F] border border-[#CED2DA] rounded-lg">Digital
                                        Marketing</button></Link>
                                </div>
                            </div>
                        </Link>
                        <div className='flex flex-col gap-[44px]'>
                            <div data-aos="fade-left" data-aos-duration="1000">
                                <Home_3_Related_Post_Card></Home_3_Related_Post_Card>
                            </div>
                            <div data-aos="fade-left" data-aos-duration="1000">
                                <Home_3_Related_Post_Card></Home_3_Related_Post_Card>
                            </div>
                            <div data-aos="fade-left" data-aos-duration="1000">
                                <Home_3_Related_Post_Card></Home_3_Related_Post_Card>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="font-[plex] font-semibold flex items-center justify-center gap-5 text-[#B1B1B1] mt-10">
                    <Link to=""><span className="text-sm">Previous</span></Link>
                    <div id="pagination-container" className="flex items-center gap-5">
                        <Link className="text-[#262729]">1</Link>
                        <Link className="">2</Link>
                        <Link className="">3</Link>
                    </div>
                    <Link to=""><span className="text-sm text-[#262729]">Next</span></Link>
                </div>
            </main>
        </div>
    );
};

export default Blog_3;