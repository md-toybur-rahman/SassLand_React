import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../Custom_Hooks/useTitle';

const Sign_Up_2 = () => {
    useTitle('Sign Up');
    
    return (
        <main className="mx-auto">
        <section className="mt-[50px] md:mt-[86px]">
            <h1 className="text-[24px] md:text-[36px] font-bold text-[#262729] text-center">Sign Up</h1>

            <section
                className="mt-[45px] home2-sign-bg bg-cover h-[832px] flex items-center justify-center rounded-3xl overflow-hidden px-5 min-w-[295px]">
                <div className="w-full">
                    <form
                        className="max-w-[368px] mx-auto border border-[#D9D9D9] rounded-2xl px-2 md:px-6 pt-6 pb-[32px] bg-[#FBFBFB]">
                        <div className="flex flex-col gap-[11px]">
                            <label>
                                <span className="text-base font-medium text-[#575757]">First & Last Name</span>
                            </label>
                            <div className="border border-[#CED2DA] rounded-lg px-3 py-4 bg-white overflow-hidden">
                                <input className="outline-none" type="text" placeholder="First & Last Name" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-[11px] mt-[11px]">
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
                        <div className="flex flex-col gap-[11px] mt-[11px]">
                            <label>
                                <span className="text-base font-medium text-[#575757]">Confirm Password</span>
                            </label>
                            <div className="border border-[#CED2DA] rounded-lg px-3 py-4 bg-white overflow-hidden">
                                <input className="outline-none" type="password" placeholder="Confirm Your Password" />
                            </div>
                        </div>

                        <button
                            className="text-base font-medium text-[#2C2003] rounded-full bg-[#FFB200] text-center w-full h-[56px] mt-[71px]">Create
                            An Account</button>
                    </form>
                    <p className="text-sm text-[#575757] font-medium mt-4 text-center">Already have an account? <Link
                            className="font-semibold text-[#2C2003]" to="/Home_2/Sign_In">Sign in now</Link></p>
                </div>
            </section>
        </section>
    </main>
    );
};

export default Sign_Up_2;