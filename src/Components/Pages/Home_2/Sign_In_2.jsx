import React from 'react';
import { Link } from 'react-router-dom';

const Sign_In_2 = () => {
    return (
        <main className="mx-auto">
            <section className="mt-[50px] md:mt-[86px]">
                <h1 className="text-[24px] md:text-[36px] font-bold text-[#262729] text-center">Login</h1>

                <section
                    className="mt-[50px] md:mt-[86px] rounded-3xl overflow-hidden home2-sign-bg bg-cover h-[729px] flex items-center justify-center px-5 min-w-[295px]">
                    <div className="w-full">
                        <form
                            className="max-w-[368px] mx-auto border border-[#D9D9D9] rounded-2xl px-6 pt-6 pb-[35px] bg-[#FBFBFB]">
                            <div className="flex flex-col gap-[11px]">
                                <label>
                                    <span className="text-base font-medium text-[#575757]">Email</span>
                                </label>
                                <div className="border border-[#CED2DA] rounded-lg px-3 py-4 bg-white overflow-hidden">
                                    <input className="outline-none" type="email" placeholder="i.e. jonhn@tgmail.com" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-[11px] mt-[11px]">
                                <label>
                                    <span className="text-base font-medium text-[#575757]">Password</span>
                                </label>
                                <div className="border border-[#CED2DA] rounded-lg px-3 py-4 bg-white overflow-hidden">
                                    <input className="outline-none" type="password" placeholder="Your Password" />
                                </div>
                            </div>
                            <div className="mt-[15px] flex items-center gap-2">
                                <input type="checkbox" id="" name="remember" value="remember" />
                                <label for="remember"><span className="text-sm text-[#575757] font-medium">Remember
                                    me</span></label>
                            </div>
                            <button
                                className="text-base font-medium text-[#2C2003] rounded-full bg-[#FFB200] text-center w-full h-[56px] mt-12">Sign
                                In</button>
                        </form>
                        <p className="text-sm text-[#575757] font-medium mt-4 text-center">Don't have an account? <Link
                            className="font-semibold text-[#2C2003]" to="/Home_2/Sign_Up">Create an account</Link></p>
                    </div>
                </section>
            </section>
        </main>
    );
};

export default Sign_In_2;