import React from 'react';
import { Link } from 'react-router-dom';

const Home_3_Related_Post_Card = () => {
    return (
        <Link className="flex flex-col sm:flex-row items-center sm:items-start gap-6" to="/Home_3/Blog_Details">
            <div>
                <img className="min-h-[100px] min-w-[125px]" src="../../../public/images/blog-post2-home3.png" alt="" />
            </div>
            <div className="max-w-[310px] text-center sm:text-start">
                <p className="text-[#6B6B6B] text-[11px] font-medium">Hunter A., -20 jan 2023</p>
                <h1 className="text-[#1F1F38] text-sm md:text-base font-bold mt-2">Our mission is to transform
                    the design</h1>
                <p className="text-[#606086] text-sm font-medium mt-4">At this point, you need to consider which
                    platforms to publish the content on.</p>
                <div className="flex items-center justify-center sm:justify-start gap-4 mt-6">
                    <Link to="/Home_3/Blog"><button
                        className="w-[135px] h-[40px] text-sm text-[#9D9E9F] border border-[#CED2DA] rounded-lg">Digital
                        Marketing</button></Link>
                    <Link to="/Home_3/Blog"><button
                        className="w-[135px] h-[40px] text-sm text-[#9D9E9F] border border-[#CED2DA] rounded-lg">Digital
                        Marketing</button></Link>
                </div>
            </div>
        </Link>
    );
};

export default Home_3_Related_Post_Card;