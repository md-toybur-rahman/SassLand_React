import React from 'react';

const Home_2_Pricing_Card = (props) => {
    return (
        <div  data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay={props.delay}
            className="border border-[#DCDCDC] rounded-2xl w-full max-w-[361px]">
            <div>
                <p className="text-[#FFB200] text-[15px] font-semibold mb-[44px] text-center mt-[26px]">{props.category}</p>
                <h1 className="font-extrabold text-[28px] md:text-[39px] mb-4 tracking-tighter text-center"><span
                    className="text-[15px] md:text-[17px] font-medium">$ </span>{props.price}<span
                        className="text-[15px] md:text-[17px] font-bold tracking-normal"> /mo</span></h1>
            </div>
            <div className="py-[25px] border-t border-[#DCDCDC]">
                <p className="text-base font-semibold text-[#2C2003] text-center">Includes 1 seat</p>
            </div>
            <div className="py-[25px] border-t border-[#DCDCDC]">
                <p className="text-base font-semibold text-[#2C2003] text-center">1 Brand voice </p>
            </div>
            <div className="py-[25px] border-t border-[#DCDCDC]">
                <p className="text-base font-semibold text-[#2C2003] text-center">50+ Templates</p>
            </div>
            <div className="py-[25px] border-t border-[#DCDCDC]">
                <p className="text-base font-semibold text-[#2C2003] text-center">Access SEO mode</p>
            </div>
            <div className="px-[25px] mb-[43px]">
                <button
                    className="h-[48px] bg-[#FFB200] text-base font-medium text-[#2C2003] w-full rounded-full">Get
                    Started Now</button>
            </div>
        </div>

    );
};

export default Home_2_Pricing_Card;