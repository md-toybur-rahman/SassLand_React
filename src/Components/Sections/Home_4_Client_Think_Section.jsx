import React, { useEffect } from 'react';
import "https://code.jquery.com/jquery-3.2.1.min.js"
import "../../../public/css/grt-youtube-popup.css";
import "../../../public/js/grt-youtube-popup";
import useVideoModal from '../../Custom_Hooks/useVideoModal';

const Home_4_Client_Think_Section = (props) => {
    // useEffect(() => {
    //     $(`.${props.youtubeClass}`).grtyoutube({ autoPlay:false });
    // } ,[])
    return (
        <div>
            <div className="flex flex-col items-center justify-center mb-[98px]">
                <h1
                    className="font-bold text-[24px] md:text-[36px] text-[#242221] leadign-[54px] mb-4 max-w-[535px] mx-auto text-center">
                    What our clients think
                    about
                    Sassland</h1>
                <p className="text-[#14202D] text-xs md:text-sm flex items-center gap-2">Excellent <span
                        className="text-[#E35C30] text-xs md:text-sm">4.5 out of 5</span> <img
                        src="../../../public/images/icons/green-star.svg" alt="" /> Trustpilot</p>
            </div>
            <div>
                <div className="flex flex-wrap items-center gap-6 mb-6">
                    <div
                        className="md:h-[348px] w-full xl:w-[705px] home4-testimonials bg-cover px-5 md:px-[42px] py-[27px] flex items-end rounded-2xl">
                        <div>
                            <h1 className="text-lg md:text-[24px] leading-[36px] text-white">“The platform has been able to
                                accommodate our
                                growth and
                                a
                                variety of event types throughout the year.”</h1>
                            <div className="flex items-end justify-between mt-[13px]">
                                <div className="flex items-center gap-[10px]">
                                    <div
                                        className="profile min-w-[40px] md:min-w-[50px] h-[40px] md:h-[50px] rounded-full bg-cover">
                                    </div>
                                    <p className="text-base md:text-[20px] text-[#E2E2E2]">Hunter A., Head of Growth</p>
                                </div>
                                <img onClick={() => useVideoModal(props.videoId)} className={`w-10 md:w-auto cursor-pointer`} src="../../../public/images/icons/play.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div
                        className="md:h-[348px] w-full xl:w-[407px] bg-[#E35C30] rounded-2xl md:ps-[28px] md:pe-[71px] md:pb-[28px] p-5 md:p-0 flex items-center xl:items-end justify-center xl:justify-start">
                        <div>
                            <h1 className="font-semibold text-[50px] md:text-[73px] text-white text-center xl:text-start">
                                98%</h1>
                            <p
                                className="font-semibold text-lg md:text-[24px] leading-[36px] text-white xl:max-w-[230px] text-center xl:text-start">
                                of
                                customers recommend sassland
                                services</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap gap-6">
                    <div
                        className="w-full xl:w-[397px] md:h-[367px] bg-[#343130] rounded-2xl md:ps-[33px] md:pe-[25px] md:pb-[24px] p-5 md:p-0 flex items-center xl:items-end justify-center xl:justify-start">
                        <div>
                            <p className="font-semibold text-lg md:text-[26px] text-white leading-[36px] mb-12">How Christos
                                Fellas
                                Saves 25 hours
                                a Month </p>
                            <img className="w-full md:w-auto mx-auto xl:mx-0" src="../../../public/images/testimonials2.svg"
                                alt="" />
                        </div>
                    </div>
                    <div
                        className="md:h-[367px] w-full xl:w-[716px] px-5 md:px-[60px] py-5 md:py-[42px] rounded-2xl border border-[#E5E8EC]">
                        <div>
                            <div className="flex items-center gap-1">
                                <img className="w-[30px] md:w-[42px]" src="../../../public/images/icons/brown-star.svg" alt="" />
                                <img className="w-[30px] md:w-[42px]" src="../../../public/images/icons/brown-star.svg" alt="" />
                                <img className="w-[30px] md:w-[42px]" src="../../../public/images/icons/brown-star.svg" alt="" />
                                <img className="w-[30px] md:w-[42px]" src="../../../public/images/icons/brown-star.svg" alt="" />
                                <img className="w-[30px] md:w-[42px]" src="../../../public/images/icons/brown-star.svg" alt="" />
                            </div>
                            <p className="text-[#2E2E52] font-semibold text-lg md:text-[28px] mt-[10px]">“The platform has
                                been able to
                                accommodate our
                                growth and
                                a variety of event types throughout the year.”</p>
                            <div className="flex items-center gap-2 mt-[35px]">
                                <div
                                    className="profile min-w-[52px] min-h-[52px] md:min-w-[52px] md:min-h-[52px] rounded-full bg-cover">
                                </div>
                                <p className="text-base text-[#6B6B6B]">Hunter A., Head of Growth</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home_4_Client_Think_Section;