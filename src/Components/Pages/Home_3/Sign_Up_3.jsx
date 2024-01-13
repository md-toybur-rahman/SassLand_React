import React from 'react';
import { Link } from 'react-router-dom';

const Sign_Up_3 = () => {
    return (
        <main className="max-w-[1186px] mx-auto  px-5 xl:px-0 mt-[50px] md:mt-[139px] mb-[80px] md:mb-[190px]">
            <section className="flex gap-[50px] lg:gap-[117px] justify-between items-center">
                <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100" className="hidden md:block max-w-[610px]">
                    <img className="w-full" src="../../../../public/images/sign_in_banner_home3.png" alt="" />
                </div>
                <div className="max-w-[459px] mx-auto md:mx-0 w-full">
                    <form className="">
                        <h1 className="text-[#2C2C44] text-[24px] md:text-[36px] mb-[42px] font-bold text-center md:text-left">
                            Sign Up</h1>
                        <div className="flex flex-col gap-[11px]">
                            <label>
                                <span className="text-base font-medium text-[#575757]">First & Last Name</span>
                            </label>
                            <div className="border border-[#CED2DA] rounded-lg px-3 h-[56px] flex items-center bg-white">
                                <input className="outline-none" type="text" placeholder="First & Last Name" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-[11px] mt-[11px]">
                            <label>
                                <span className="text-base font-medium text-[#575757]">Email</span>
                            </label>
                            <div className="border border-[#CED2DA] rounded-lg px-3 h-[56px] flex items-center bg-white">
                                <input className="outline-none" type="email" placeholder="i.e. jonhn@tgmail.com" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-[11px] mt-[11px]">
                            <label>
                                <span className="text-base font-medium text-[#575757]">Password</span>
                            </label>
                            <div className="border border-[#CED2DA] rounded-lg px-3 h-[56px] flex items-center bg-white">
                                <input className="outline-none" type="password" placeholder="Your Password" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-[11px] mt-[11px]">
                            <label>
                                <span className="text-base font-medium text-[#575757]">Confirm Password</span>
                            </label>
                            <div className="border border-[#CED2DA] rounded-lg px-3 h-[56px] flex items-center bg-white">
                                <input className="outline-none" type="password" placeholder="Confirm Password" />
                            </div>
                        </div>
                        <button
                            className="text-base font-medium text-white rounded-md bg-[#FE79A1] text-center w-full h-[56px] mt-[30px]">Create
                            An Account</button>
                    </form>
                    <p className="text-sm text-[#575757] font-medium mt-4 text-center">Already have an account? <Link
                        className="font-semibold text-[#6A26DA]" to="/Home_3/Sign_In">Sign In Now</Link></p>
                </div>
            </section>
        </main>
    );
};

export default Sign_Up_3;