import React from 'react';
import { useLocation } from 'react-router-dom';

const People_Rating_Card = (props) => {
    const location = useLocation();
    return (
        <div>
            {
                location.pathname == "/Home_1" ?
                    <div className="p-6 m-5 rounded-2xl flex gap-[17px] mx-auto sm:mx-5 max-w-[300px] sm:max-w-[422px] love_us_card">
                        <div
                            className={` ${props.image} min-w-[50px] md:min-w-[72px] h-[50px] md:h-[72px] rounded-full bg-cover`}>
                        </div>
                        <div className="max-w-[245px]">
                            <div className="flex items-center gap-1">
                                <img className="w-4 md:w-auto" src="../../../../public/images/icons/star_dark.svg" alt="" />
                                <img className="w-4 md:w-auto" src="../../../../public/images/icons/star_dark.svg" alt="" />
                                <img className="w-4 md:w-auto" src="../../../../public/images/icons/star_dark.svg" alt="" />
                                <img className="w-4 md:w-auto" src="../../../../public/images/icons/star_dark.svg" alt="" />
                                <img className="w-4 md:w-auto" src="../../../../public/images/icons/star_light.svg" alt="" />
                            </div>
                            <div>
                                <p className="text-[#676769] text-xs md:text-sm py-2">“The platform has been able to
                                    accommodate
                                    our
                                    growth and
                                    a variety of event types throughout the year.”</p>
                                <p className="text-[11px] text-[#879295]">Hunter A., Head of Growth</p>
                            </div>
                        </div>
                    </div>
                    : ''
            }

            {
                location.pathname == "/Home_2" ?

                    <div className="p-6 rounded-2xl flex gap-[17px] max-w-[382px] border border-[#CA9D34]">
                        <div
                            className={`${props.image} min-w-[50px] md:min-w-[72px] h-[50px] md:h-[72px] rounded-full bg-cover`}>
                        </div>
                        <div className="max-w-[245px]">
                            <div className="flex items-center gap-1">
                                <img className="w-4 md:w-auto" src="../../../public/images/icons/green-star-home2.svg"
                                    alt="" />
                                <img className="w-4 md:w-auto" src="../../../public/images/icons/green-star-home2.svg"
                                    alt="" />
                                <img className="w-4 md:w-auto" src="../../../public/images/icons/green-star-home2.svg"
                                    alt="" />
                                <img className="w-4 md:w-auto" src="../../../public/images/icons/green-star-home2.svg"
                                    alt="" />
                                <img className="w-4 md:w-auto" src="../../../public/images/icons/green-star-home2.svg"
                                    alt="" />
                            </div>
                            <div>
                                <p className="text-[#392904] text-sm md:text-base py-2">“The platform has been able to
                                    accommodate
                                    our
                                    growth and
                                    a variety of event types throughout the year.”</p>
                                <p className="text-sm text-[#84661E]">Hunter A., Head of Growth</p>
                            </div>
                        </div>
                    </div>
                    : ''
            }
        </div>
    );
};

export default People_Rating_Card;