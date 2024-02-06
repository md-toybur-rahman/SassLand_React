// import React from 'react';

import useTitle from "../../../Custom_Hooks/useTitle";
import Comment_Card from "../../Sections/Comment_Card";
import Home_1_Banner_Title from "../../Sections/Home_1_Banner_Title";
import Message_Box from "../../Sections/Message_Box";
import Footer_1 from "./Footer_1";

const Blog_Details_1 = () => {
    useTitle('Blog Details');
    return (
        <div>
            <div>
                <Home_1_Banner_Title title="Blog Details."></Home_1_Banner_Title>
            </div>
            <section
                className="lg:flex items-center justify-between px-6 md:px-[70px] xl:px-[150px]">
                <div className="flex flex-col items-center justify-center w-full">
                    <div className="max-w-[946px] text-center">
                        <h1
                            className="font-bold text-[#262729] text-[24px] sm:text-[36px] lg:text-[57px] mb-7 md:mb-14 md:leading-[85px]">
                            How can
                            SaaS companies boost user engagements video marketing?</h1>
                        <p className="text-sm md:text-base lg:text-[20px] font-medium text-[#676769] md:leading-[32px]">We
                            partner
                            closely with the most progressive companies in the world to improve their customer support
                            operations. As consumers, we all have our own version of that one call to customer support.
                        </p>
                    </div>
                </div>
            </section>
            <main className="max-w-[1156px]  mx-auto px-5 xl:px-0">
                {/* Blog Details Section */}
                <section>
                    <div data-aos="fade-in" data-aos-duration="2000" className="mt-[50px] md:mt-[131px]">
                        <img src="../../../../public/images/blog-details.svg" alt="" />
                    </div>
                    <div className="mt-[50px] md:mt-[102px]">
                        <p className="text-sm md:text-base text-[#646464]">At this point, you need to consider which platforms to
                            publish the content on. Beyond publishing to
                            your brand website or embedding in marketing emails, video content can be posted on a best variety
                            of social media platforms. <br />
                            “The best free way for SaaS companies to start leveraging video is using free social media tools
                            like Facebook Live or Instagram,” said Caneva. These platforms let you post with your phone, so your
                            company doesn’t need to invest in anything to get started. The algorithms of these a media
                            platforms, she believes, also value video content more than other content. Telling engagi stories
                            through videos, therefore, could generate greater leads on these platforms than written content.
                            <br />
                            The great thing about video content is that it’s reusable. Your organization can find its footing in
                            video and quickly scale, especially with the right video technology behind them,” explained best
                            Laczynski. You can publish the videos you create across a wide variety of digital touchpoints.
                        </p>
                    </div>
                </section>
                {/* End Blog Details Section */}

                {/* Quote Section */}
                <section>
                    <div className="px-5 md:px-[97px] py-[34px] bg-[#6A26DA] mt-20">
                        <img src="../../../../public/images/icons/qutation.svg" alt="" />
                        <p className="text-base md:text-lg font-medium text-white mt-4">“The best free way for SaaS companies to
                            start leveraging video is using free social media tools like Facebook Live or Instagram,” said
                            Caneva. </p>
                    </div>
                </section>
                {/* End Quote Section */}


                {/* Management Quote */}
                <section>
                    <div className="border border-[#C9C9C9] rounded-lg mt-[104px]">
                        <p className="text-sm md:text-base text-[#646464] p-6">At this point, you need to consider which platforms
                            to publish the content on. Beyond publishing to your brand website or embedding in marketing emails,
                            video content can be posted on a best variety of social media platforms. <br />
                            “The best free way for SaaS companies to start leveraging video is using free social media tools
                            like Facebook Live or Instagram,” said Caneva. These platforms let you post with your phone, so your
                            company doesn’t need to invest in anything to get started. The algorithms of these a media
                            platforms, she believes, also value video content more than other content. Telling engagi stories
                            through videos, therefore, could generate greater leads on these platforms than written content.
                            <br />
                            The great thing about video content is that it’s reusable. Your organization can find its footing in
                            video and quickly scale, especially with the right video technology behind them,” explained best
                            Laczynski. You can publish the videos you create across a wide variety of digital touchpoints.
                        </p>
                        <hr className="border-t border-[#DEDEDE] ms-6" />
                        <div className="flex items-center gap-2 p-6">
                            <div className="min-w-[50px] min-h-[50px] md:w-[74px] md:h-[74px] profile3 bg-cover rounded-full">
                            </div>
                            <div>
                                <h1 className="text-[#262729] font-bold text-lg md:text-[22px] mb-1">Ralph Edwards</h1>
                                <p className="text-[10px] md:text-[13px]">Management</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Management Quote */}
                {/* Comment Section */}
                <section className="mt-[104px] max-w-[505px]">
                    <h1 className="text-[#262729] text-base md:text-[20px] font-bold">Comments<span>(3)</span></h1>
                    <div className="mt-12 flex flex-col gap-8">
                        <div>
                            <Comment_Card></Comment_Card>
                        </div>
                        <div>
                            <Comment_Card></Comment_Card>
                        </div>
                        <div>
                            <Comment_Card></Comment_Card>
                        </div>
                    </div>
                </section>
                {/* End Comment Section */}

                <div className="mt-[102px] mb-[80px] md:mb-[179px]">
                    <Message_Box></Message_Box>
                </div>
            </main>
        </div>
    );
};

export default Blog_Details_1;