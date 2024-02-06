import React from 'react';
import Home_2_Blog_Category_Box from '../../Sections/Home_2_Blog_Category_Box';
import Home_2_Blog_Card from '../../Sections/Home_2_Blog_Card';
import useTitle from '../../../Custom_Hooks/useTitle';

const Blog_Details_2 = () => {
    useTitle('Blog Details');
    return (
        <main className="max-w-[1142px]  mx-auto px-0 mt-0 md:mt-[50px]">
            <section className="flex flex-wrap md:flex-nowrap justify-center items-start gap-10 md:gap-[25px] xl:gap-[32px]">
                <section className="bg-[#FFFCF6] pt-8 md:pt-0 p-4 md:p-8 pb-[85px] overflow-hidden">
                    <h1 className="font-bold text-[#2C2003] text-[36px] text-center md:text-start">Our mission is to transform
                        the design</h1>

                    <div className="mt-[32px] flex items-center justify-center md:justify-start gap-2">
                        <div className="profile2 min-w-[50px] md:min-w-[52px] h-[50px] md:h-[52px] rounded-full bg-cover">
                        </div>
                        <p className="text-[14px] text-[#FFB200]">Hunter A., Head of Growth</p>
                    </div>
                    <div data-aos="fade-in" data-aos-duration="2000" className="mt-[30px] md:mt-[64px]">
                        <img src="../../../../public/images/blog-details-home2.png" alt="" />
                    </div>
                    <div className="mt-6 md:mt-[44px]">
                        <p className="text-[#646464] ">At this point, you need to consider which platforms to publish the
                            content on. Beyond publishing to your brand website or embedding in marketing emails, video
                            content can be posted on a best variety of social media platforms.<br /><br />

                            “The best free way for SaaS companies to start leveraging video is using free social media tools
                            like Facebook Live or Instagram,” said Caneva. These platforms let you post with your phone, so
                            your company doesn’t need to invest in anything to get started. The algorithms of these a media
                            platforms, <br /> <br />

                            she believes, also value video content more than other content. Telling engagi stories through
                            videos, therefore, could generate greater leads on these platforms than </p>
                    </div>
                    <div
                        className="mt-[64px] h-auto md:h-[158px] home2-blog-bg bg-cover rounded-2xl px-5 py-10 md:px-0 md:py-0 md:ps-[31px] md:pe-[10px] md:pt-[51px]">
                        <h1 className="font-medium text-[#2C2003] leading-[27px] text-lg">“The best free way for SaaS companies
                            to start leveraging video is using free social media tools like Facebook Live or Instagram,”
                            said Caneva. </h1>
                    </div>

                    <div className="mt-[56px]">
                        <h1 className="text-[#2C2003] text-[24px] font-bold">Our Mission</h1>
                        <p className="mt-4 text-[20px] text-[#676769] leading-[32px]">We partner closely with the most
                            progressive companies in the world to improve their customer support operations. As consumers,
                            we all have our own version of that one call to customer support.</p>
                    </div>
                    <div className="flex gap-3 md:gap-[18px] items-end mt-6">
                        <div className="flex flex-col items-end gap-3 md:gap-[18px]">
                            <img data-aos="fade-down-right" data-aos-duration="1000" data-aos-easing="ease-in-out"
                                data-aos-delay="0" src="../../../../public/images/Rectangle46.png" alt="" />
                            <img data-aos="fade-up-right" data-aos-duration="1000" data-aos-easing="ease-in-out"
                                data-aos-delay="0" className="w-[100px] md:w-[156px]" src="../../../../public/images/Rectangle47.png"
                                alt="" />
                        </div>
                        <div>
                            <img data-aos="fade-in" data-aos-duration="2000" src="../../../../public/images/Rectangle45.png"
                                alt="" />
                        </div>
                        <div className="flex flex-col gap-[6px] md:gap-[10px]">
                            <img data-aos="fade-down-left" data-aos-duration="1000" data-aos-easing="ease-in-out"
                                data-aos-delay="0" className="w-[100px] md:w-[156px]" src="../../../../public/images/Rectangle48.png"
                                alt="" />
                            <img data-aos="fade-up-left" data-aos-duration="1000" data-aos-easing="ease-in-out"
                                data-aos-delay="0" src="../../../../public/images/Rectangle49.png" alt="" />
                        </div>
                    </div>
                </section>
                <section>
                    <Home_2_Blog_Category_Box></Home_2_Blog_Category_Box>
                </section>
            </section>

            <section className="mt-[70px] md:mt-[156px] px-5">
                <h1 className="text-[24px] font-bold text-[#2C2003] text-center lg:text-start">Related Posts</h1>
                <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-[34px] mt-[42px] pb-10">
                    <div data-aos="fade-down" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="0" className="blog-card rounded-lg">
                        <Home_2_Blog_Card></Home_2_Blog_Card>
                    </div>
                    <div data-aos="fade-down" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="200" className="blog-card rounded-lg">
                        <Home_2_Blog_Card></Home_2_Blog_Card>
                    </div>
                    <div data-aos="fade-down" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="400" className="blog-card rounded-lg">
                        <Home_2_Blog_Card></Home_2_Blog_Card>
                    </div>
                </div>
            </section>
        </main >
    );
};

export default Blog_Details_2;