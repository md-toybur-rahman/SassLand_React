import React from 'react';
import Home_4_Banner from '../../Sections/Home_4_Banner';
import Home_4_Blog_Card from '../../Sections/Home_4_Blog_Card';
import Home_4_Blog_Category from '../../Sections/Home_4_Blog_Category';

const Blog_4 = () => {
    return (
        <div className='mb-[80px] md:mb-[194px]'>
            <section>
                <Home_4_Banner
                    max_width="746"
                    title="Blog"
                    title_size="36"
                    description="We partner closely with the most progressive companies in the world to improve their customer
                support operations. As consumers, we all have our own version of that one call to customer support."
                    des_color="text-[#FFF5F2]"></Home_4_Banner>
            </section>

            <main className="max-w-[1141px] mx-auto ">

                <section className="mt-[59px] md:mt-[59px] px-5 xl:px-0">
                    <div className="max-w-[554px] mx-auto text-center">
                        <h1 className="font-bold text-[24px] md:text-[36px] text-[#322F2F] mb-6">Latest News & Blogs</h1>
                        <p className="text-base md:text-[20px] text-[#676769] font-medium mb-[56px] md:leading-[32px]">We partner
                            closely with the most progressive companies in the world to improve their.</p>
                    </div>

                    <section className="flex flex-col items-center md:items-start md:flex-row gap-[58px]">
                        <div className='flex flex-col gap-[53px]'>
                            <Home_4_Blog_Card></Home_4_Blog_Card>
                            <Home_4_Blog_Card></Home_4_Blog_Card>
                        </div>
                        <div>
                            <Home_4_Blog_Category></Home_4_Blog_Category>
                        </div>
                    </section>
                </section>
                <section className="flex gap-2 justify-center items-center mt-[54px] font-semibold">
                    <div
                        className="h-8 w-8 flex items-center justify-center border border-[#DFE3E8] hover:border-[#E35C30] rounded-md cursor-pointer bg-[#E35C30]/[50%]">
                        <img className="rotate-180" src="../../../../public/images/icons/pagination-icon.svg" alt="" />
                    </div>
                    <div
                        className="h-8 w-8 flex items-center justify-center border border-[#DFE3E8] hover:border-[#E35C30] rounded-md cursor-pointer">
                        1
                    </div>
                    <div
                        className="h-8 w-8 flex items-center justify-center border border-[#DFE3E8] hover:border-[#E35C30] rounded-md cursor-pointer">
                        2
                    </div>
                    <div
                        className="h-8 w-8 flex items-center justify-center border border-[#DFE3E8] hover:border-[#E35C30] rounded-md cursor-pointer">
                        ...
                    </div>
                    <div
                        className="h-8 w-8 flex items-center justify-center border border-[#DFE3E8] hover:border-[#E35C30] rounded-md cursor-pointer">
                        9
                    </div>
                    <div
                        className="h-8 w-8 flex items-center justify-center border border-[#DFE3E8] hover:border-[#E35C30] rounded-md cursor-pointer">
                        10
                    </div>
                    <div
                        className="h-8 w-8 flex items-center justify-center border border-[#DFE3E8] hover:border-[#E35C30] rounded-md cursor-pointer">
                        <img src="../../../../public/images/icons/pagination-icon.svg" alt="" />
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Blog_4;