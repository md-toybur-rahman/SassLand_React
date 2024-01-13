import React from 'react';

const Home_3_Customer_Feedback_Card = (props) => {
    return (
        <div
                    className="px-[32px] py-[43px] rounded-3xl max-w-[359px] love_us_card bg-[#F8F8F9]">
                    <div className="flex items-start gap-2">
                        <div className="profile2 min-w-[50px] md:min-w-[72px] h-[50px] md:h-[72px] rounded-full bg-cover">
                        </div>
                        <div>
                            <p className="text-[14px] font-medium text-[#11111F]">{props.name}</p>
                            <p className="text-[11px] font-medium text-[#9292AC]">{props.designation}</p>
                            <div className="flex items-center gap-1 mt-1">
                                <img className="w-4 md:w-auto" src="../../../public/images/icons/gold-star.svg" alt="" />
                                <img className="w-4 md:w-auto" src="../../../public/images/icons/gold-star.svg" alt="" />
                                <img className="w-4 md:w-auto" src="../../../public/images/icons/gold-star.svg" alt="" />
                                <img className="w-4 md:w-auto" src="../../../public/images/icons/gold-star.svg" alt="" />
                                <img className="w-4 md:w-auto" src="../../../public/images/icons/gold-star.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-12">
                        <h1 className="text-[#11111F] text-[20px] md:text-[24px] font-medium">Amazing App</h1>
                        <p className="text-[#606086 ] text-sm md:text-base py-2">“The platform has been able to
                            accommodate our growth and a variety of event types throughout the year.”</p>
                    </div>
                </div>
    );
};

export default Home_3_Customer_Feedback_Card;