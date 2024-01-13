import React from 'react';
import { Link } from 'react-router-dom';
import Home_3_Related_Post_Card from '../../Sections/Home_3_Related_Post_Card';

const Blog_Details_3 = () => {
    return (
        <div className='mb-[80px] md:mb-[137px]'>
            <main className="max-w-[1142px] mx-auto  px-5 xl:px-0">
                <section className="mt-[82px]">
                    <div className="mt-8 flex flex-wrap lg:flex-nowrap items-start justify-center lg:justify-between gap-10 lg:gap-5">
                        <div className="max-w-[553px]">
                            <img data-aos="fade-in" data-aos-duration="1000" data-aos-delay="0"
                                src="../../../../public/images/blog-post1-home3.png" alt="" />
                            <div className="mt-6">
                                <p className="text-[#6B6B6B] text-[11px] font-medium">Hunter A., -20 jan 2023</p>
                                <Link to="/Home-3/Blog_Details" className="flex items-center justify-between gap-5">
                                    <h1 className="text-[20px] md:text-[24px] font-bold text-[#5A5B5C]">Our mission is to transform
                                        the design</h1>
                                    <img className="cursor-pointer" src="../../../../public/images/icons/arrow_outward.svg" alt="" />
                                </Link>
                                <p className="mt-4 font-medium text-xs md:text-sm text-[#646464]">At this point, you need to
                                    consider which platforms to publish the content on.We partner closely with the most
                                    progressive companies in the world to improve their customer support operations.</p>

                                <div className="mt-[74px]">
                                    <p className="text-[#646464] text-base leading-[24px]">
                                        At this point, you need to consider which platforms to publish the content on. Beyond
                                        publishing to your brand website or embedding in marketing emails, video content can be
                                        posted on a best variety of social media platforms. <br /> <br />

                                        “The best free way for SaaS companies to start leveraging video is using free social
                                        media tools like Facebook Live or Instagram,” said Caneva. These platforms let you post
                                        with your phone, so your company doesn’t need to invest in anything to get started. The
                                        algorithms of these a media platforms,
                                        <br /> <br />
                                        she believes, also value video content more than other content. Telling engagi stories
                                        through videos, therefore, could generate greater leads on these platforms than
                                    </p>
                                </div>

                                <div className="mt-[90px] h-[158px] home3-blog bg-cover ps-[31px] pe-[10px] pt-[51px]">
                                    <h1 className="font-medium text-white leading-[27px] text-lg">“The best free way for SaaS
                                        companies
                                        to start leveraging video is using free social media tools like Facebook Live or
                                        Instagram,”
                                        said Caneva. </h1>
                                </div>

                                <div className="mt-[82px]">
                                    <h1 className="text-[#262729] text-[20px] md:text-[24px] font-bold">Our Mission</h1>
                                    <p className="text-[#676769] text-base md:text-[20px] leading-[32px] mt-4">We partner closely
                                        with the most progressive companies in the world to improve their customer support
                                        operations. As consumers, we all have our own version of that one call to customer
                                        support.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-[20px] md:text-[24px] font-bold text-[#646566] text-center lg:text-start">Related
                                Posts</h1>
                            <div className='flex flex-col gap-[44px] mt-7'>
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
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Blog_Details_3;