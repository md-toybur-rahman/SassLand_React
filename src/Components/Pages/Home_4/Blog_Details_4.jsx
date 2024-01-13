import React from 'react';
import Home_4_Blog_Card from '../../Sections/Home_4_Blog_Card';
import Home_4_Blog_Category from '../../Sections/Home_4_Blog_Category';
import Home_4_Comment_Box from '../../Sections/Home_4_Comment_Box';
import Message_Box from '../../Sections/Message_Box';

const Blog_Details_4 = () => {
    return (
        <div className='bg-[#F8F8FA] mb-[100px] md:mb-[124px]'>
            <main className="max-w-[1141px] mx-auto">
                <section className="mt-[72px] md:mt-[59px] px-5 xl:px-0">
                    <section className="flex flex-col items-center md:items-start md:flex-row gap-[58px]">
                        <div>
                            <div>
                                <Home_4_Blog_Card></Home_4_Blog_Card>
                            </div>
                            <div className="mt-[72px] max-w-[648px] md:h-[158px] home4-blog bg-cover px-8 pt-[51px] pb-5">
                                <h1 className="font-medium text-white leading-[27px] text-lg">“The best free way for SaaS companies
                                    to start leveraging video is using free social media tools like Facebook Live or Instagram,”
                                    said Caneva. </h1>
                            </div>

                            <div className="mt-[46px]">
                                <h1 className="font-semibold text-[18px] md:text-[24px] text-[#262729] mb-4">Our Mission</h1>
                                <p className="text-base md:text-[20px] text-[#676769] font-medium mb-[32px] md:leading-[32px]">We
                                    partner closely with the most progressive companies in the world to improve their customer
                                    support operations. As consumers, we all have our own version of that one call to customer
                                    support.</p>
                            </div>
                        </div>
                        <div>
                            <Home_4_Blog_Category></Home_4_Blog_Category>
                        </div>
                    </section>
                    <section className="px-5 md:px-0">
                        <div
                            className="flex mt-5 md:mt-0 flex-wrap md:flex-nowrap gap-5 items-center justify-center md:justify-between">
                            <div className="flex flex-wrap justify-center items-center gap-4">
                                <h1 className="font-semibold text-[18px] md:text-[24px] text-[#262729]">Tags: </h1>
                                <div className="flex items-center gap-[26px]">
                                    <button
                                        className="w-[135px] h-[32px] flex items-center justify-center text-[#656565] text-sm font-medium border border-[#000000] rounded-md">sass</button>
                                    <button
                                        className="w-[135px] h-[32px] flex items-center justify-center text-[#656565] text-sm font-medium border border-[#000000] rounded-md">Digital
                                        Marketing</button>
                                </div>
                            </div>
                            <div className="flex flex-wrap  justify-center items-center gap-4">
                                <h1 className="font-semibold text-[18px] md:text-[24px] text-[#262729]">Share: </h1>
                                <div className="flex items-center gap-[26px]">
                                    <img className="w-6 h-6" src="../../../../public/images/icons/Facebook-home4-leader.svg" alt="" />
                                    <img className="w-6 h-6" src="../../../../public/images/icons/twitter-home4-leader.svg" alt="" />
                                    <img className="w-6 h-6" src="../../../../public/images/icons/linkedin-home4-leader.svg" alt="" />
                                    <img className="w-6 h-6" src="../../../../public/images/icons/instagram-home4-leader.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-[#E9E0DE] mt-[54px]"></div>
                        <div className="flex items-center justify-between mt-8">
                            <div className="flex items-center gap-2">
                                <div
                                    className="h-8 w-8 flex items-center justify-center border border-[#DFE3E8] hover:border-[#E35C30] rounded-md cursor-pointer bg-[#E35C30]/[50%]">
                                    <img className="rotate-180" src="../../../../public/images/icons/pagination-icon.svg" alt="" />
                                </div>
                                <p className="text-[#B1B1B1] text-base font-semibold font-[plex]">Previous Post</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <p className="text-[#262729] text-base font-semibold">Next Post</p>
                                <div
                                    className="h-8 w-8 flex items-center justify-center border border-[#DFE3E8] hover:border-[#E35C30] rounded-md cursor-pointer">
                                    <img src="../../../../public/images/icons/pagination-icon.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <section className="mt-[104px] max-w-[505px] px-5 lg:px-0">
                    <h1 className="text-[#262729] text-base md:text-[20px] font-bold">Comments<span>(3)</span></h1>
                    <div className="mt-12 flex flex-col gap-">
                        <div>
                            <Home_4_Comment_Box
                                name="Ralph Edwards"
                                date="15 Jan, 2020"
                                comment="Lorem ipsum dolor sit amet, consectetuer
                            adipiscing elit"></Home_4_Comment_Box>
                        </div>
                        <div>
                            <Home_4_Comment_Box
                                name="Ralph Edwards"
                                date="15 Jan, 2020"
                                comment="Lorem ipsum dolor sit amet, consectetuer
                            adipiscing elit"></Home_4_Comment_Box>
                        </div>
                        <div>
                            <Home_4_Comment_Box
                                name="Ralph Edwards"
                                date="15 Jan, 2020"
                                comment="Lorem ipsum dolor sit amet, consectetuer
                            adipiscing elit"></Home_4_Comment_Box>
                        </div>
                    </div>
                </section>
                <section className='mt-[136px] px-5 md:px-0'>
                    <Message_Box></Message_Box>
                </section>
            </main>
        </div>
    );
};

export default Blog_Details_4;