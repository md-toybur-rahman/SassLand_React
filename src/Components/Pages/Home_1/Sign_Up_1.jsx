// import React from 'react';

import { Link } from "react-router-dom";
import useTitle from "../../../Custom_Hooks/useTitle";

const Sign_Up_1 = () => {
    useTitle('Sign Up');
    return (
        <main className="max-w-[1142px] mx-auto px-5 xl:px-0 mb-[100px] md:mb-[271px]">
        {/* Sign Up Section */}
        <section className="mt-[50px] md:mt-[102px]">
            <h1 className="text-[24px] md:text-[36px] font-bold text-[#262729] text-center">Sign Up</h1>
            <p className="text-base md:text-[20px] font-medium text-[#676769] mt-4 mb-[34px] text-center">To get started,
                you need to
                sign in here.</p>

            <form className="max-w-[368px] mx-auto border border-[#D9D9D9]  px-6 pt-6 pb-[35px] bg-[#FBFBFB]">
                <div className="flex flex-col gap-[11px]">
                    <label>
                        <span className="text-base font-medium text-[#575757]">First & Last Name</span>
                    </label>
                    <div className="border border-[#CED2DA] rounded-lg px-3 py-4 bg-white">
                        <input className="outline-none" type="text" placeholder="First & Last Name" />
                    </div>
                </div>
                <div className="flex flex-col gap-[11px] mt-[11px]">
                    <label>
                        <span className="text-base font-medium text-[#575757]">Email</span>
                    </label>
                    <div className="border border-[#CED2DA] rounded-lg px-3 py-4 bg-white">
                        <input className="outline-none" type="email" placeholder="i.e. jonhn@tgmail.com" />
                    </div>
                </div>
                <div className="flex flex-col gap-[11px] mt-[11px]">
                    <label>
                        <span className="text-base font-medium text-[#575757]">Password</span>
                    </label>
                    <div className="border border-[#CED2DA] rounded-lg px-3 py-4 bg-white">
                        <input className="outline-none" type="password" placeholder="Your Password" />
                    </div>
                </div>
                <div className="flex flex-col gap-[11px] mt-[11px]">
                    <label>
                        <span className="text-base font-medium text-[#575757]">Confirm Password</span>
                    </label>
                    <div className="border border-[#CED2DA] rounded-lg px-3 py-4 bg-white">
                        <input className="outline-none" type="password" placeholder="Confirm Your Password" />
                    </div>
                </div>

                <button
                    className="text-base font-medium text-white rounded-md bg-[#6A26DA] text-center w-full py-[18px] mt-12">Create
                    an account</button>
            </form>
            <p className="text-sm text-[#575757] font-medium mt-4 text-center">already have an account? <Link to="/Home_1/Sign_In"
                    className="font-semibold text-[#6A26DA]">Sign in now</Link></p>
        </section>
        {/* End Sign Up Section */}
    </main>
    );
};

export default Sign_Up_1;