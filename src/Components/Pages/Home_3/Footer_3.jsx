import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer_3 = () => {
    const location = useLocation();
    return (
        <div>
            {
                location.pathname == "/Home_3" ?
                    <footer className="mt-[100px] md:mt-[184px] px-[30px] lg:px-[150px] pb-[30px] lg:pb-[102px]">
                        <div className="flex flex-col md:flex-row md:justify-between gap-5">
                            <div className="max-w-[269px]">
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-[20px] md:w-[33px] h-[30px] md:h-[47px] bg-[#FF6AC2] rotate-[50deg] rounded-lg md:rounded-xl">
                                    </div>
                                    <h1 className="text-sm md:text-base font-bold text-[#25373F]">SassLand</h1>
                                </div>
                                <div className="mt-6 mb-[42px]">
                                    <p className="text-xs md:text-sm text-[#676769]">With lots of unique blocks, you can easily build a page
                                        without
                                        coding. Build your next landing page.</p>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <Link to=""><img src="../../../public/images/icons/Facebook.svg" alt="" /></Link>
                                    <Link to=""><img src="../../../public/images/icons/twitter.svg" alt="" /></Link>
                                    <Link to=""><img src="../../../public/images/icons/linkedin.svg" alt="" /></Link>
                                    <Link to=""><img src="../../../public/images/icons/instagram.svg" alt="" /></Link>
                                </div>
                            </div>
                            <div className="flex justify-between md:justify-start md:gap-[55px] mt-10 md:mt-0">
                                <div>
                                    <h1 className="font-semibold text-sm text-[#25373F] mb-4">Company</h1>
                                    <ul className="flex flex-col gap-[6px] text-xs md:text-sm text-[#676769]">
                                        <li><Link href="Home_3/About_us.html">About us</Link></li>
                                        <li><Link href="Home_3/Contact_Us.html">Contact us</Link></li>
                                        <li><Link to="">Careers</Link></li>
                                        <li><Link to="">Press</Link></li>
                                    </ul>
                                </div>
                                <div>
                                    <h1 className="font-semibold text-sm text-[#25373F] mb-4">Product</h1>
                                    <ul className="flex flex-col gap-[18px] text-xs md:text-sm text-[#676769]">
                                        <li><Link to="">Features</Link></li>
                                        <li><Link to="">Pricing</Link></li>
                                        <li><Link to="">News</Link></li>
                                        <li><Link to="">Help desk</Link></li>
                                        <li><Link to="">Support</Link></li>
                                    </ul>
                                </div>
                                <div>
                                    <h1 className="font-semibold text-sm text-[#25373F] mb-[25px]">Services</h1>
                                    <ul className="flex flex-col gap-[6px] text-xs md:text-sm text-[#676769]">
                                        <li><Link to="">Digital Marketing</Link></li>
                                        <li><Link to="">Content Writing</Link></li>
                                        <li><Link to="">SEO for Business</Link></li>
                                        <li><Link to="">UI Design</Link></li>
                                    </ul>
                                </div>
                                <div>
                                    <h1 className="font-semibold text-sm text-[#25373F] mb-[15px]">Legal</h1>
                                    <ul className="flex flex-col gap-[6px] text-xs md:text-sm text-[#676769]">
                                        <li><Link to="">Privacy Policy</Link></li>
                                        <li><Link to="/Home_3/Trams_Conditions">Terms & Conditions</Link></li>
                                        <li><Link to="">Return Policy</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </footer>
                    :
                    <footer className="px-[30px] lg:px-[100px] pt-[61px] md:pt-[140px] pb-[61px] bg-[#2E2E52]">
                        <section className="max-w-[1140px] mx-auto px-5 xl:px-0 mb-[56px]">
                            <div className="flex justify-between items-center rounded-2xl flex-wrap gap-5">
                                <div>
                                    <h1 className="text-[24px] md:text-[32px] text-[#ECECFF] font-semibold mb-6">Ready to get started?</h1>
                                    <p className="text-base md:text-[20px] text-[#C8C8FF] font-medium max-w-[521px] leading-[153.5%]">Amet
                                        minim mollit non
                                        deserunt ullamco est sit aliqua sint. velit officia consequat duis enim velit mollit. </p>
                                </div>
                                <button
                                    className="bg-[#FF6AC2] text-sm md:text-base w-[263px] h-[56px] rounded-lg text-white font-semibold">Get
                                    Started</button>
                            </div>
                        </section>

                        <div
                            className="flex flex-col md:flex-row md:justify-between gap-5 max-w-[1140px] mx-auto border-t border-[#51516F] pt-[56px]">
                            <div className="max-w-[269px]">
                                <div>
                                    <img src="../../../public/images/icons/footer-logo-home3.svg" alt="" />
                                </div>
                                <div className="mt-6 mb-[42px]">
                                    <p className="text-xs md:text-sm text-[#C0C0FF]">With lots of unique blocks, you can easily build a page
                                        without
                                        coding. Build your next landing page.</p>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <Link to=""><img src="../../../public/images/icons/Facebook-white-home-3.svg" alt="" /></Link>
                                    <Link to=""><img src="../../../public/images/icons/twitter-white-home-3.svg" alt="" /></Link>
                                    <Link to=""><img src="../../../public/images/icons/linkedin-white-home-3.svg" alt="" /></Link>
                                    <Link to=""><img src="../../../public/images/icons/instagram-white-home-3.svg" alt="" /></Link>
                                </div>
                            </div>
                            <div className="flex flex-wrap justify-between md:justify-start gap-8 md:gap-[55px] mt-10 md:mt-0">
                                <div>
                                    <h1 className="font-semibold text-sm text-white mb-4">Company</h1>
                                    <ul className="flex flex-col gap-[6px] text-xs md:text-sm text-[#F1F1FF]">
                                        <li><Link href="About_Us.html">About us</Link></li>
                                        <li><Link href="Contact_Us.html">Contact us</Link></li>
                                        <li><Link to="">Careers</Link></li>
                                        <li><Link to="">Press</Link></li>
                                    </ul>
                                </div>
                                <div>
                                    <h1 className="font-semibold text-sm text-white mb-4">Product</h1>
                                    <ul className="flex flex-col gap-[18px] text-xs md:text-sm text-[#F1F1FF]">
                                        <li><Link to="">Features</Link></li>
                                        <li><Link to="">Pricing</Link></li>
                                        <li><Link to="">News</Link></li>
                                        <li><Link to="">Help desk</Link></li>
                                        <li><Link to="">Support</Link></li>
                                    </ul>
                                </div>
                                <div>
                                    <h1 className="font-semibold text-sm text-white mb-[25px]">Services</h1>
                                    <ul className="flex flex-col gap-[6px] text-xs md:text-sm text-[#F1F1FF]">
                                        <li><Link to="">Digital Marketing</Link></li>
                                        <li><Link to="">Content Writing</Link></li>
                                        <li><Link to="">SEO for Business</Link></li>
                                        <li><Link to="">UI Design</Link></li>
                                    </ul>
                                </div>
                                <div>
                                    <h1 className="font-semibold text-sm text-white mb-[15px]">Legal</h1>
                                    <ul className="flex flex-col gap-[6px] text-xs md:text-sm text-[#F1F1FF]">
                                        <li><Link to="">Privacy Policy</Link></li>
                                        <li><Link to="/Home_3/Trams_Conditions">Terms & Conditions</Link></li>
                                        <li><Link to="">Return Policy</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </footer>
            }
        </div>
    );
};

export default Footer_3;