import React from 'react';
import { Link } from 'react-router-dom';

const Our_Team_Card = (props) => {
    return (
        <div className="p-[18px] flex flex-col md:flex-row md:gap-[22px] md:w-[558px] md:h-[248px] rounded-2xl bg-white leader-card">
            <div className="rounded-2xl flex md:block justify-center">
                <img src={props.image} alt="" />
            </div>
            <div className="md:max-w-[253px] pt-[20px] text-center md:text-left">
                <h1 className="text-[#262729] text-lg  md:text-[23px] font-bold">{props.name}</h1>
                <p className="text-xs md:text-sm mt-2">{props.designation}</p>
                <p className="text-[#676769] text-xs md:text-sm mt-[23px]">Amet minim mollit non deserunt ullamco est
                    sit aliqua dolor do amet sint velit of a officia</p>
            <div className="flex items-center justify-center md:justify-start gap-2 mt-4">
                <Link to=""><img src={`../../../public/images/icons/${props.facebook_image}`} alt="" /></Link>
                <Link to=""><img src={`../../../public/images/icons/${props.twitter_image}`} alt="" /></Link>
                <Link to=""><img src={`../../../public/images/icons/${props.linkedin_image}`} alt="" /></Link>
                <Link to=""><img src={`../../../public/images/icons/${props.instagram_image}`} alt="" /></Link>
            </div>
            </div>
        </div>
    );
};

export default Our_Team_Card;