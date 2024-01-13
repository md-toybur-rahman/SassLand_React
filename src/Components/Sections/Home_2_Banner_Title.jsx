import React from 'react';

const Home_2_Banner_Title = (props) => {
    return (
        <div className='flex items-center justify-center'>
            <div className={`max-w-[${props.max_width}px] text-center`}>
                <h1 className={`font-bold text-[#2C2003] text-[24px] sm:text-[${props.title_min_size}px] md:text-[${props.title_max_size}px] mb-[${props.space}px]`}>{props.title}</h1>
                <p className={`text-sm md:text-[${props.des_min_size}px] lg:text-[${props.des_max_size}px] font-medium text-[#676769] leading-[${props.leading}px]`}>{props.description}</p>
            </div>
        </div>
    );
};

export default Home_2_Banner_Title;