// import React from 'react';

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Trusted_Companies = () => {
    const location = useLocation()
    const [pathSelection, setPathSelection] = useState(false);
    const [home4PathSelection, setHome4PathSelection] = useState(false);
    const [home5PathSelection, setHome5PathSelection] = useState(false);
    useEffect(() => {
        if (location.pathname == "/Home_3") {
            setPathSelection(true);
        }
        else if (location.pathname == "/Home_3/Gallery") {
            setPathSelection(true);
        }
        else {
            setPathSelection(false);
        }
        if (location.pathname == "/Home_4") {
            setHome4PathSelection(true);
        }
        else if (location.pathname == "/Home_4/About_Us") {
            setHome4PathSelection(true);
        }
        else {
            setHome4PathSelection(false);
        }
        if (location.pathname == "/Home_5") {
            setHome5PathSelection(true);
        }
        else if (location.pathname == "/Home_5/About_Us") {
            setHome5PathSelection(true);
        }
        else {
            setHome5PathSelection(false);
        }
    }, [])
    return (
        <div>
            {
                location.pathname == "/Home_1" ?
                    <section className="flex items-center justify-center mt-12 px-5">
                        <div>
                            <h1 className="text-sm md:text-base text-[#262729] font-medium mb-10 text-center">TRUSTED BY COMPANIES ALL
                                OVER THE
                                WORLD</h1>
                            <div className="flex flex-wrap items-center justify-center gap-[30px] md:gap-[56px]">
                                <img data-aos="fade-in" data-aos-duration="1000" data-aos-delay="0" className="w-[50px] md:w-auto"
                                    src="../../../public/images/icons/airbnb.svg" alt="" />
                                <img data-aos="fade-in" data-aos-duration="1000" data-aos-delay="100" className="w-[50px] md:w-auto"
                                    src="../../../public/images/icons/amd.svg" alt="" />
                                <img data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200" className="w-[50px] md:w-auto"
                                    src="../../../public/images/icons/eatstreet.svg" alt="" />
                                <img data-aos="fade-in" data-aos-duration="1000" data-aos-delay="300" className="w-[50px] md:w-auto"
                                    src="../../../public/images/icons/dell.svg" alt="" />
                                <img data-aos="fade-in" data-aos-duration="1000" data-aos-delay="400" className="w-[50px] md:w-auto"
                                    src="../../../public/images/icons/stumble_upon.svg" alt="" />
                                <img data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500" className="w-[50px] md:w-auto"
                                    src="../../../public/images/icons/kickstarter.svg" alt="" />
                            </div>
                        </div>
                    </section>
                    : ''
            }
            {
                location.pathname == "/Home_1/About_Us" ?
                    <section className="flex items-center justify-center mt-[75px] md:mt-[155px] mb-[100px] md:mb-[203px] px-5">
                        <div>
                            <div className="max-w-[630px] mx-auto">
                                <h1 className="font-bold text-[24px] md:text-[36px] text-[#262729] text-center mb-6">Trusted by many
                                    Companies</h1>
                                <p className="text-sm md:text-base text-[#676769] font-normal mb-[56px] text-center md:leading-[32px]">We
                                    partner closely with the most progressive companies in the world to improve their customer support
                                    operations. As consumers, we all have our </p>
                            </div>
                            <div className="flex flex-wrap items-center justify-center gap-[30px] md:gap-[56px] lg:gap-20">
                                <img data-aos="fade-in" data-aos-duration="1000" data-aos-delay="0" className="w-[50px] md:w-auto"
                                    src="../../../../public/images/icons/comcast.svg" alt="" />
                                <img data-aos="fade-in" data-aos-duration="1000" data-aos-delay="100" className="w-[50px] md:w-auto"
                                    src="../../../../public/images/icons/eatstreet.svg" alt="" />
                                <img data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200" className="w-[50px] md:w-auto"
                                    src="../../../../public/images/icons/esurance.svg" alt="" />
                                <img data-aos="fade-in" data-aos-duration="1000" data-aos-delay="300" className="w-[50px] md:w-auto"
                                    src="../../../../public/images/icons/concentrix.svg" alt="" />
                                <img data-aos="fade-in" data-aos-duration="1000" data-aos-delay="400" className="w-[50px] md:w-auto"
                                    src="../../../../public/images/icons/gm.svg" alt="" />
                                <img data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500" className="w-[50px] md:w-auto"
                                    src="../../../../public/images/icons/navy.svg" alt="" />
                            </div>
                        </div>
                    </section>
                    : ''
            }
            {
                location.pathname == "/Home_2" ?
                    <section className="flex items-center justify-center mt-[50px] lg:mt-[150px] px-5 pb-[104px] border-b border-[#E5E8E8]">
                        <div>
                            <h1 className="text-sm md:text-base text-[#676769] font-medium mb-10 text-center">TRUSTED BY COMPANIES ALL
                                OVER THE
                                WORLD</h1>
                            <div className="flex flex-wrap items-center justify-center gap-[30px] md:gap-[86px]">
                                <img data-aos="fade-in" data-aos-duration="1000" data-aos-delay="0" className="w-[50px] md:w-auto" src="../../../../public/images/icons/git-yellow.svg" alt="" />
                                <img data-aos="fade-in" data-aos-duration="1000" data-aos-delay="100" className="w-[50px] md:w-auto" src="../../../../public/images/icons/evernote.svg" alt="" />
                                <img data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200" className="w-[50px] md:w-auto" src="../../../../public/images/icons/zendesk.svg" alt="" />
                                <img data-aos="fade-in" data-aos-duration="1000" data-aos-delay="300" className="w-[50px] md:w-auto" src="../../../../public/images/icons/kayako.svg" alt="" />
                                <img data-aos="fade-in" data-aos-duration="1000" data-aos-delay="400" className="w-[50px] md:w-auto" src="../../../../public/images/icons/intercom.svg" alt="" />
                                <img data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500" className="w-[50px] md:w-auto" src="../../../../public/images/icons/treehouse.svg" alt="" />
                            </div>
                        </div>
                    </section>
                    : ''
            }
            {
                pathSelection ?
                    <section className="flex items-center justify-center mt-[56px]">
                        <div className="flex flex-wrap items-end justify-center gap-[45px]">
                            <img data-aos="fade-in" data-aos-duration="1000" data-aos-delay="0"
                                src="../../../public/images/icons/Frame-home3.svg" alt="" />
                            <img data-aos="fade-in" data-aos-duration="1000" data-aos-delay="100"
                                src="../../../public/images/icons/xpo-home3.svg" alt="" />
                            <img data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200"
                                src="../../../public/images/icons/yum-home3.svg" alt="" />
                            <img data-aos="fade-in" data-aos-duration="1000" data-aos-delay="300"
                                src="../../../public/images/icons/loading-home3.svg" alt="" />
                            <img data-aos="fade-in" data-aos-duration="1000" data-aos-delay="400"
                                src="../../../public/images/icons/land-home3.svg" alt="" />
                            <img data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500"
                                src="../../../public/images/icons/apple-home3.svg" alt="" />
                        </div>
                    </section>
                    : ''
            }
            {
                home4PathSelection ?
                    <section
                        className="flex items-center justify-center mt-[50px] lg:mt-[89px] px-5 border-t border-[#E9E0DE] pt-[42px]">
                        <div>
                            <div className="flex flex-wrap items-center justify-center gap-[30px] md:gap-[86px]">
                                <img data-aos="fade-in" data-aos-duration="1000" data-aos-delay="0" data-aos-easing="ease-in-out" className="w-[50px] md:w-auto" src="../../../public/images/icons/git-dark.svg" alt="" />
                                <img data-aos="fade-in" data-aos-duration="1000" data-aos-delay="100" data-aos-easing="ease-in-out" className="w-[50px] md:w-auto" src="../../../public/images/icons/evernote-dark.svg" alt="" />
                                <img data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200" data-aos-easing="ease-in-out" className="w-[50px] md:w-auto" src="../../../public/images/icons/zendesk-dark.svg" alt="" />
                                <img data-aos="fade-in" data-aos-duration="1000" data-aos-delay="300" data-aos-easing="ease-in-out" className="w-[50px] md:w-auto" src="../../../public/images/icons/kayako-dark.svg" alt="" />
                                <img data-aos="fade-in" data-aos-duration="1000" data-aos-delay="400" data-aos-easing="ease-in-out" className="w-[50px] md:w-auto" src="../../../public/images/icons/intercom-dark.svg" alt="" />
                                <img data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500" data-aos-easing="ease-in-out" className="w-[50px] md:w-auto" src="../../../public/images/icons/treehouse-dark.svg" alt="" />
                            </div>
                        </div>
                    </section>
                    : ''
            }
            {
                home5PathSelection ?
                    <section className="mt-[70px] max-w-[967px] mx-auto">
                        <div>
                            <h1 className="text-base md:text-lg text-[#223645] font-semibold mb-8 text-center">Our Featured Partners</h1>
                            <div
                                className="flex flex-wrap items-center justify-center gap-[30px] md:gap-[56px] border-t border-b border-[#F3F4F5] py-[33px]">
                                <img data-aos="fade-in" data-aos-duration="1000" data-aos-delay="0" className="w-[50px] md:w-auto"
                                    src="../../../public/images/icons/Framer.svg" alt="" />
                                <img data-aos="fade-in" data-aos-duration="1000" data-aos-delay="100" className="w-[50px] md:w-auto"
                                    src="../../../public/images/icons/Reddit.svg" alt="" />
                                <img data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200" className="w-[50px] md:w-auto"
                                    src="../../../public/images/icons/Airbnb5.svg" alt="" />
                                <img data-aos="fade-in" data-aos-duration="1000" data-aos-delay="300" className="w-[50px] md:w-auto"
                                    src="../../../public/images/icons/Tesla.svg" alt="" />
                                <img data-aos="fade-in" data-aos-duration="1000" data-aos-delay="400" className="w-[50px] md:w-auto"
                                    src="../../../public/images/icons/Uber.svg" alt="" />
                            </div>
                        </div>
                    </section>
                    : ''
            }
        </div>
    );
};

export default Trusted_Companies;