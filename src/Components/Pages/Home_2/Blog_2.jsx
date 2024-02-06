// import React from 'react';

import { Link } from "react-router-dom";
import Home_2_Banner_Title from "../../Sections/Home_2_Banner_Title";
import Home_2_Blog_Card from "../../Sections/Home_2_Blog_Card";
import Home_2_Blog_Category_Box from "../../Sections/Home_2_Blog_Category_Box";
import useTitle from "../../../Custom_Hooks/useTitle";

const Blog_2 = () => {
    useTitle('Blog');

    return (
        <div>
            <div className="mt-[50px] md:mt-[128px]">
                <Home_2_Banner_Title
                    max_width="746"
                    title="Blog"
                    title_min_size="36"
                    title_max_size="57"
                    space="32"
                    description="We partner closely
                with the most progressive companies in the world to improve their customer support
                operations. As consumers, we all have our"
                    des_min_size="16"
                    des_max_size="20"
                    leading="32"></Home_2_Banner_Title>
            </div>
            <main
                className="max-w-[1142px] mx-auto px-5 xl:px-0 flex flex-wrap md:flex-nowrap justify-center items-start gap-10 md:gap-[25px] lg:gap-[50px] xl:gap-[78px] mt-[50px] lg:mt-[128px]">
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8 items-center">
                    <div data-aos="fade-down" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="0" className="blog-card rounded-lg">
                        <Home_2_Blog_Card></Home_2_Blog_Card>
                    </div>
                    <div data-aos="fade-down" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="200" className="blog-card rounded-lg">
                        <Home_2_Blog_Card></Home_2_Blog_Card>
                    </div>
                    <div data-aos="fade-down" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="0" className="blog-card rounded-lg">
                        <Home_2_Blog_Card></Home_2_Blog_Card>
                    </div>
                    <div data-aos="fade-down" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="200" className="blog-card rounded-lg">
                        <Home_2_Blog_Card></Home_2_Blog_Card>
                    </div>
                </section>
                <section>
                    <Home_2_Blog_Category_Box></Home_2_Blog_Category_Box>
                </section>
            </main>

            <div className="font-[plex] font-semibold flex items-center justify-center gap-5 text-[#B1B1B1] mt-[43px]">
                <Link to=""><span className="text-sm">Previous</span></Link>
                <div id="pagination-container" className="flex items-center gap-5">
                    <Link className="hover:text-[#F9C242]" to="">1</Link>
                    <Link className="hover:text-[#F9C242]" to="">2</Link>
                    <Link className="hover:text-[#F9C242]" to="">3</Link>
                </div>
                <Link to=""><span className="text-sm text-[#262729]">Next</span></Link>
            </div>
        </div>
    );
};

export default Blog_2;