import React from 'react';
import { useLocation } from 'react-router-dom';

const Message_Box = () => {
    const location = useLocation();
    return (
        <section>
            <form className={`${location.pathname == "/Home_1/Blog_Details" ? 'bg-white' : ''} ${location.pathname == "/Home_1/Contact_Us" ? 'border border-[#D9D9D9] rounded-2xl  px-6 pt-10 pb-8 bg-white' : ''} ${location.pathname == "/Home_2/Contact_Us_Variation" ? 'border border-[#E1E0DC] rounded-2xl  px-6 pt-10 pb-8 bg-[#FDFCFA]' : ''} ${location.pathname == "/Home_4/Blog_Details" ? '' : ''} ${location.pathname == "/Home_4/Contact_Us" ? 'px-6 md:px-[95px] pt-[42px] pb-8 md:pb-[56px] bg-[#FEEFED]' : ''}`}>
                {
                    location.pathname == "/Home_4/Contact_Us" ?
                        <h1
                            className="font-semibold text-[18px] md:text-[24px] text-[#454545] text-center mb-[42px] max-w-[433px] mx-auto leading-[36px]">
                            Ready to Get Started? Fill up the form and our team contact you</h1>
                        : ''
                }
                <div className="md:grid grid-cols-5 gap-[26px]">
                    <div className="flex flex-col gap-[11px] col-span-2">
                        <label>
                            <span className="text-base font-medium text-[#454545]">First & Last Name</span>
                        </label>
                        <div className="border border-[#D9D9D9] rounded-lg px-2 py-4 bg-white">
                            <input className="outline-none text-[#676769]" type="text" placeholder="First & Last Name" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-[11px] col-span-3 mt-6 md:mt-0">
                        <label>
                            <span className="text-base font-medium text-[#454545]">Email</span>
                        </label>
                        <div className="border border-[#D9D9D9] rounded-lg px-2 py-4 bg-white">
                            <input className="outline-none text-[#676769]" type="email" placeholder="i.e. jonhn@tgmail.com" />
                        </div>
                    </div>
                </div>
                <div className="md:grid grid-cols-5 gap-[26px] mt-6">
                    <div className="flex flex-col gap-[11px] col-span-2">
                        <label>
                            <span className="text-base font-medium text-[#454545]">Phone Number</span>
                        </label>
                        <div className="border border-[#D9D9D9] rounded-lg px-2 py-4 bg-white">
                            <input className="outline-none text-[#676769]" type="text" placeholder="First & Last Name" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-[11px] col-span-3 mt-6 md:mt-0">
                        <label>
                            <span className="text-base font-medium text-[#454545]">Subject</span>
                        </label>
                        <div className="border border-[#D9D9D9] rounded-lg px-2 py-4 bg-white">
                            <input className="outline-none text-[#676769]" type="text" placeholder="i.e. jonhn@tgmail.com" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-[11px] mt-6">
                    <label>
                        <span className="text-base font-medium text-[#575757]">Message</span>
                    </label>
                    <div className="border border-[#CED2DA] rounded-lg px-3 py-4 bg-white">
                        <textarea className="resize-none w-full h-[138px]" name="" id=""></textarea>
                    </div>
                </div>

                <div className={`${location.pathname == "/Home_4/Contact_Us" ? 'flex items-center justify-center' : ''}`}>
                    <button
                        className={` ${location.pathname == "/Home_1/Blog_Details" ? 'text-base font-medium text-white rounded-md bg-[#6A26DA] text-center max-w-[206px] w-full py-[18px] mt-10' : ''}
                    ${location.pathname == "/Home_1/Contact_Us" ? 'text-base font-medium text-white rounded-md bg-[#6A26DA] text-center max-w-[206px] w-full py-[18px] mt-10' : ''}
                    ${location.pathname == "/Home_2/Contact_Us_Variation" ? 'text-base font-semibold text-[#2C2003] rounded-full bg-[#FFB200] text-center max-w-[206px] w-full py-[18px] mt-10' : ''} ${location.pathname == '/Home_4/Blog_Details' ? 'text-base font-medium text-white rounded-md bg-[#E35C30] text-center max-w-[206px] w-full py-[18px] mt-10' : ''} ${location.pathname == "/Home_4/Contact_Us" ? 'text-base font-medium text-white rounded-full bg-[#E35C30] text-center max-w-[206px] w-full py-[18px] mt-9' : ''}`}>Send
                        Message</button>
                </div>
            </form>
        </section>
    );
};

export default Message_Box;