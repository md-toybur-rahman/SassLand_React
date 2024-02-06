import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../Custom_Hooks/useTitle';

const Sign_In_3 = () => {
    useTitle('Sign In');

    return (
        <main className="max-w-[1186px] mx-auto  px-5 xl:px-0 mt-[50px] md:mt-[139px] mb-[80px] md:mb-[101px]">
            <section className="flex gap-[50px] lg:gap-[117px] justify-between items-center">
                <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200" className="hidden md:block max-w-[610px]">
                    <img className="w-full" src="../../../../public/images/sign_in_banner_home3.png" alt="" />
                </div>
                <div className="max-w-[459px] mx-auto md:mx-0 w-full">
                    <form className="">
                        <h1 className="text-[#2C2C44] text-[24px] md:text-[36px] mb-[42px] font-bold text-center md:text-left">
                            Log In</h1>
                        <div className="flex flex-col gap-[11px]">
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
                        <div className="mt-[15px] flex items-center gap-2">
                            <input type="checkbox" id="" name="remember" value="remember" />
                            <label for="remember"><span className="text-sm text-[#979797] font-medium">Remember
                                me</span></label>
                        </div>
                        <button
                            className="text-base font-medium text-white rounded-md bg-[#FE79A1] text-center w-full h-[56px] mt-[30px]">Sign
                            In</button>
                    </form>
                    <p className="text-sm text-[#575757] font-medium mt-4 text-center">Don't have an account? <Link
                        className="font-semibold text-[#6A26DA]" to="/Home_3/Sign_Up">Create an account</Link></p>
                </div>
            </section>
        </main>
    );
};

export default Sign_In_3;