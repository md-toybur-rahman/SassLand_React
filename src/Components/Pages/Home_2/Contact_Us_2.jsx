import React from 'react';

const Contact_Us_2 = () => {
    return (
        <main className="max-w-[1140px] mx-auto px-5 xl:px-0">
            <section className="mt-[50px] md:mt-[108px]">
                <h1 className="text-[24px] md:text-[36px] font-semibold text-[#454545] text-center">Contact us</h1>

                <section
                    className="mt-[45px] flex flex-wrap md:flex-nowrap gap-10 md:gap-[50px] lg:gap-[110px] items-start justify-between rounded-2xl max-w-[368px] md:max-w-[890px] mx-auto md:mx-0">
                    <div className="w-full">
                        <form className="sm:w-[368px] mx-auto rounded-2xl px-2 md:px-6 pt-6 pb-[32px] bg-[#F9C242]">
                            <div className="flex flex-col gap-[11px]">
                                <label>
                                    <span className="text-base font-medium text-[#2C2003]">First & Last Name</span>
                                </label>
                                <div className="border border-[#FDFCFA] rounded-lg px-3 py-4 bg-white overflow-hidden">
                                    <input className="outline-none" type="text" placeholder="First & Last Name" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-[11px] mt-[11px]">
                                <label>
                                    <span className="text-base font-medium text-[#2C2003]">Email</span>
                                </label>
                                <div className="border border-[#FDFCFA] rounded-lg px-3 py-4 bg-white overflow-hidden">
                                    <input className="outline-none" type="email" placeholder="i.e. jonhn@tgmail.com" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-[11px] mt-[11px]">
                                <label>
                                    <span className="text-base font-medium text-[#2C2003]">Password</span>
                                </label>
                                <div className="border border-[#FDFCFA] rounded-lg px-3 py-4 bg-white overflow-hidden">
                                    <input className="outline-none" type="password" placeholder="Your Password" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-[11px] mt-[11px]">
                                <label>
                                    <span className="text-base font-medium text-[#2C2003]">Confirm Password</span>
                                </label>
                                <div className="border border-[#FDFCFA] rounded-lg px-3 py-4 bg-white overflow-hidden">
                                    <input className="outline-none" type="password" placeholder="Confirm Your Password" />
                                </div>
                            </div>
                            <div id="home-4-contact-terms" className="mt-[15px] flex items-center gap-2">
                                <input type="checkbox" name="remember" value="remember" />
                                <label for="remember"><span className="text-sm text-[#2C2003] font-medium">I agree to the Terms
                                    & conditions</span></label>
                            </div>

                            <button
                                className="text-base font-medium text-[#F9C242] rounded-full bg-[#2C2003] text-center w-full h-[56px] mt-[71px]">Create
                                An Account</button>
                        </form>
                        <p className="text-sm text-[#B9B5AC] font-medium mt-4 text-center">Already have an account? <a
                            className="font-semibold text-[#F9C242]" href="Sign_In.html">Sign in now</a></p>
                    </div>

                    <div className="text-center md:text-start">
                        <p className="text-[#676769] font-medium text-base leading-[24px]">We partner closely with the most
                            progressive companies in the world to improve their customer support operations. As consumers,
                            we all have our own version of that one call to customer support.</p>
                        <div className="flex flex-col gap-5 mt-[48px]">
                            <div>
                                <h1 className="text-lg md:text-[20px] text-[#454545] font-medium mb-4">Call us</h1>
                                <p className="text-sm md:text-base text-[#676767] md:leading-[32px]">+1-940-394-2948
                                    <br />
                                    +1-389-385-3807
                                </p>
                            </div>

                            <div>
                                <h1 className="text-lg md:text-[20px] text-[#454545] font-medium mb-4">Email us</h1>
                                <p className="text-sm md:text-base text-[#676767] md:leading-[32px]">support@grayic.com
                                    <br />
                                    contact@grayic.com
                                </p>
                            </div>

                            <div>
                                <h1 className="text-lg md:text-[20px] text-[#454545] font-medium mb-4">Visit us</h1>
                                <p className="text-sm md:text-base text-[#676767] md:leading-[32px]">34 Madison
                                    Street,NY, <br />
                                    USA 10005</p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </main>
    );
};

export default Contact_Us_2;