// import React from 'react';

import { Link } from "react-router-dom";

const Footer_1 = () => {
    return (
        <footer className="px-[30px] lg:px-[150px] border-t border-[#DCE0E0] pt-[50px] lg:pt-[95px] pb-[30px] lg:pb-[63px]">
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
                        <Link><img src="../assets/images/icons/violet-Facebook.svg" alt="" /></Link>
                        <Link><img src="../assets/images/icons/violet-twitter.svg" alt="" /></Link>
                        <Link><img src="../assets/images/icons/violet-linkedin.svg" alt="" /></Link>
                        <Link><img src="../assets/images/icons/violet-instagram.svg" alt="" /></Link>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between md:justify-start gap-8 md:gap-[55px] mt-10 md:mt-0">
                    <div>
                        <h1 className="font-semibold text-sm text-[#25373F] mb-4">Company</h1>
                        <ul className="flex flex-col gap-[6px] text-xs md:text-sm text-[#676769]">
                            <li><Link to="/Home_1/About_Us">About us</Link></li>
                            <li><Link to="/Home_1/Contact_Us">Contact us</Link></li>
                            <li><Link>Careers</Link></li>
                            <li><Link>Press</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="font-semibold text-sm text-[#25373F] mb-4">Product</h1>
                        <ul className="flex flex-col gap-[18px] text-xs md:text-sm text-[#676769]">
                            <li><Link>Features</Link></li>
                            <li><Link>Pricing</Link></li>
                            <li><Link>News</Link></li>
                            <li><Link>Help desk</Link></li>
                            <li><Link>Support</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="font-semibold text-sm text-[#25373F] mb-[25px]">Services</h1>
                        <ul className="flex flex-col gap-[6px] text-xs md:text-sm text-[#676769]">
                            <li><Link>Digital Marketing</Link></li>
                            <li><Link>Content Writing</Link></li>
                            <li><Link>SEO for Business</Link></li>
                            <li><Link>UI Design</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="font-semibold text-sm text-[#25373F] mb-[15px]">Legal</h1>
                        <ul className="flex flex-col gap-[6px] text-xs md:text-sm text-[#676769]">
                            <li><Link>Privacy Policy</Link></li>
                            <li><Link to="/Home_1/Trams_Conditions">Terms & Conditions</Link></li>
                            <li><Link>Return Policy</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer_1;