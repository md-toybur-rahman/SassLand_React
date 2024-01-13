import React from 'react';

const Home_1_Features_Card = (props) => {
    return (
        <div className="p-4 md:p-6 border border-[#E4E7E7] rounded-lg max-w-[366px] features-card">
            <div className="h-[197px] rounded-lg">
                <img className="w-full h-full overflow-hidden" src={props.image} alt="" />
            </div>
            <div>
                <h2 className="text-xs md:text-sm text-[#6A26DA] font-semibold mb-2 mt-4">{props.title}</h2>
                <p className="text-[#25373F] text-sm md:text-base font-semibold">{props.designation}</p>
            </div>
        </div>
    );
};

export default Home_1_Features_Card;