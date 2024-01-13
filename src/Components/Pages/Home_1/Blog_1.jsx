// import React from 'react';

import Home_1_Banner_Title from "../../Sections/Home_1_Banner_Title";
import Home_1_Blog_Card from "../../Sections/Home_1_Blog_Card";
import Footer_1 from "./Footer_1";

const Blog_1 = () => {
    return (
        <div>
            <div>
                <Home_1_Banner_Title title="Blog."></Home_1_Banner_Title>
            </div>
            <main className="max-w-[1156px]  mx-auto px-5 xl:px-0">
                {/* Banner Section */}
                <section className="lg:flex items-center justify-between mx-6 md:mx-[70px] xl:mx-[150px]">
                    <div className="flex flex-col items-center justify-center w-full">
                        <div className="max-w-[746px] text-center">
                            <h1
                                className="font-bold text-[#262729] text-[24px] md:text-[36px] mb-8 md:leading-[85px]">
                                Stay
                                Informed with Our
                                Latest News</h1>
                            <p className="text-sm md:text-base lg:text-[20px] font-medium text-[#676769] md:leading-[32px]">We
                                partner
                                closely with the most progressive companies in the world to improve their customer support
                                operations. As consumers, we all have our own version of that one call to customer support.
                            </p>
                        </div>
                    </div>
                </section>
                {/* End Banner Section */}
                {/* Blog Card */}
                <section className="mt-[50px] md:mt-[101px] max-w-[1176px] px-5 xl:px-0">
                    <div className="flex flex-wrap justify-center gap-[32px]">
                        <div data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="0">
                            <Home_1_Blog_Card image="../../../../public/images/blog-card1.svg" title="Reduced cost per conversion"></Home_1_Blog_Card>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="200">
                            <Home_1_Blog_Card image="../../../../public/images/blog-card2.svg" title="Reduced cost per conversion"></Home_1_Blog_Card>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="400">
                            <Home_1_Blog_Card image="../../../../public/images/blog-card3.svg" title="Reduced cost per conversion"></Home_1_Blog_Card>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="400">
                            <Home_1_Blog_Card image="../../../../public/images/blog-card3.svg" title="Reduced cost per conversion"></Home_1_Blog_Card>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="200">
                            <Home_1_Blog_Card image="../../../../public/images/blog-card1.svg" title="Reduced cost per conversion"></Home_1_Blog_Card>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="0">
                            <Home_1_Blog_Card image="../../../../public/images/blog-card2.svg" title="Reduced cost per conversion"></Home_1_Blog_Card>
                        </div>
                    </div>
                    <div
                        className="font-[plex] font-semibold flex items-center justify-center gap-5 text-[#B1B1B1] mt-[50px] md:mt-[120px] mb-[80px] md:mb-[163px]">
                        <span className="text-sm">Previous</span>
                        <div id="pagination-container" className="flex items-center gap-5">
                            <a className="text-[#262729]" href="#">1</a>
                            <a className="" href="#">2</a>
                            <a className="" href="#">3</a>
                        </div>
                        <span className="text-sm text-[#262729]">Next</span>
                    </div>
                </section>
                {/* End Blog Card */}
            </main>
        </div>
    );
};

export default Blog_1;