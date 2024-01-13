import React from 'react';

const Home_4_Blog_Category = () => {
    return (
        <div>
            <div className="lg:w-[330px] max-w-[330px]">
                <div
                    className="max-w-[330px] h-[56px] border border-[#F2F2F0] rounded-lg flex items-center gap-1 px-3 py-2 bg-white">
                    <img src="../assets/images/icons/Search-home2-blog.svg" alt="" />
                    <input className="outline-none flex-grow bg-transparent" type="text" placeholder="Search" />
                </div>
                <div className="mt-5 border border-[#F2F2F0] p-4 rounded-lg bg-white">
                    <h1 className="text-[24px] font-semibold text-[#262729]">Categories</h1>
                    <ul className="mt-[48px] max-w-[300px] list-disc ps-10">
                        <li className="text-[#676769] text-sm mb-2">Innovations (05)</li>
                        <li className="text-[#676769] text-sm mb-2">Marketing (05)</li>
                        <li className="text-[#676769] text-sm mb-2">Strategies & Innovations (05)</li>
                        <li className="text-[#676769] text-sm mb-2">Strategies & Innovations (05)</li>
                        <li className="text-[#676769] text-sm mb-2">Innovations (05)</li>
                    </ul>
                </div>
                <div className="mt-6 border border-[#F2F2F0] p-6 rounded-lg bg-white">
                    <h1 className="text-[24px] font-semibold text-[#2C2003]">Tags</h1>
                    <div
                        className="mt-[44px] max-w-[286px] grid grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-x-4 gap-y-3">
                        <button
                            className="w-[135px] h-[40px] text-sm text-[#656565] border border-[#000000] rounded-lg">Digital
                            Marketing</button>
                        <button
                            className="w-[135px] h-[40px] text-sm text-[#656565] border border-[#000000] rounded-lg">Digital
                            Marketing</button>
                        <button
                            className="w-[135px] h-[40px] text-sm text-[#656565] border border-[#000000] rounded-lg">Digital
                            Marketing</button>
                        <button
                            className="w-[135px] h-[40px] text-sm text-[#656565] border border-[#000000] rounded-lg">Digital
                            Marketing</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home_4_Blog_Category;