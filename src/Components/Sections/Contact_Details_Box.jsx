import React from 'react';

const Contact_Details_Box = (props) => {
    return (
        <div>
            <div className="flex gap-6">
                <div className="w-[56px] h-[56px] rounded-full bg-[#D9D9D9]">
                    <img className='w-full h-full rounded-full overflow-hidden' src={props.image} alt="" />
                </div>
                <div>
                    <h1 className="text-lg md:text-[20px] text-[#454545] font-medium mb-4">{props.title}</h1>
                    <p className="text-sm md:text-base text-[#676767] md:leading-[32px]">{props.contact_first_line} <br /> {props.contact_second_line}</p>
                </div>
            </div>
        </div>
    );
};

export default Contact_Details_Box;