import React from 'react';

const Home_4_Comment_Box = (props) => {
    return (
        <div className="flex items-start gap-2 p-6">
            <div className="w-[74px] h-[50px] md:h-[74px] profile3 bg-cover rounded-full">
            </div>
            <div className="border-b border-[#E9E0DE] pb-[34px]">
                <h1 className="text-[#646464] font-bold text-lg md:text-[22px] mb-1">{props.name}</h1>
                <p className="text-xs md:text-sm font-bold text-[#2C2003]">{props.date}</p>
                <p className="text-sm md:text-base text-[#646464] mt-4">{props.comment}</p>
                <div className="flex items-center gap-1 mt-4">
                    <img src="../../../../public/images/icons/quickreply-orange.svg" alt="" />
                    <p className="text-[#E35C30] text-base font-semibold">Replay</p>
                </div>
            </div>
        </div>
    );
};

export default Home_4_Comment_Box;