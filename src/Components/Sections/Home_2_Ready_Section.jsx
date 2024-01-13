import React from 'react';

const Home_2_Ready_Section = () => {
    return (
        <section className="rounded-2xl max-w-[1142px] mx-auto px-5 xl:px-0">
            <div
                className="home2-about-bg bg-cover py-[56px] px-5 md:px-[71px] flex justify-between items-center rounded-2xl flex-wrap gap-5">
                <div>
                    <h1 className="text-[24px] md:text-[36px] text-[#2C2003] font-semibold mb-4">Ready to get started?</h1>
                    <p className="text-base md:text-[20px] text-[#392904] font-medium max-w-[521px]">Amet minim mollit non
                        deserunt ullamco est sit aliqua sint. velit officia consequat duis enim velit mollit. </p>
                </div>
                <button
                    className="bg-[#F9C242] text-sm md:text-base px-[54px] py-[13px] rounded-full text-[#2C2003] font-medium">Get
                    Started</button>
            </div>
        </section>
    );
};

export default Home_2_Ready_Section;