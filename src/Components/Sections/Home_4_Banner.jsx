import React from 'react';

const Home_4_Banner = (props) => {
    return (
        <section className="h-[290px] md:h-[326px] flex items-center justify-between px-5 md:px-0 home4-banner2 bg-cover">
            <div className="flex flex-col items-center justify-center w-full">
                <div className={`max-w-[${props.max_width}px] text-center`}>
                    <h1 className={`font-bold text-[#E35C30] text-[24px] md:text-[36px] lg:text-[${props.title_size}px] leading-[72px] mb-4 md:mb-6`}>{props.title}
                    </h1>
                    <p className={`text-sm md:text-sm lg:text-base font-medium leading-[24px] ${props.des_color}`}>
                        {
                            props.description
                        }
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Home_4_Banner;