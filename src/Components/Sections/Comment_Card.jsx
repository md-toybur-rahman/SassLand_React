import React from 'react';

const Comment_Card = (props) => {
    return (
        <div>
            <div className="flex items-start gap-2 p-6">
                <div className={`min-w-[50px] min-h-[50px] md:w-[74px] md:h-[74px] profile3 bg-cover rounded-full`}>
                </div>
                <div>
                    <h1 className="text-[#262729] font-bold text-lg md:text-[22px] mb-1">Ralph Edwards</h1>
                    <p className="text-xs md:text-sm font-bold">15 Jan, 2020</p>
                    <p className="text-sm md:text-base text-[#646464] mt-4">Lorem ipsum dolor sit amet, consectetuer
                        adipiscing elit</p>
                    <div className="flex items-center gap-1 mt-4">
                        <img src="../../../../public/images/icons/quickreply.svg" alt="" />
                        <p className="text-[#6A26DA] text-base font-semibold">Replay</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comment_Card;