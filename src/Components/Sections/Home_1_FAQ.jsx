// import React from 'react';

import { useLocation } from "react-router-dom";

const Home_1_FAQ = () => {
    const location = useLocation();
    return (
        <section className={`px-5 lg:px-0 ${location.pathname == "/Home_1" ? 'bg-[#F8F8F8] pt-[56px] pb-[63px]' : ''} `}>
            <div className="max-w-[1137px] mx-auto">
                {
                    location.pathname == "/Home_1" ?
                        <h1 className="text-[24px] md:text-[36px] text-[#262729] font-bold mb-4 text-center">FAQ</h1>
                        : ''
                }
                <div className={`flex flex-wrap ${location.pathname == "/Home_1" ? 'justify-center lg:justify-end' : 'justify-center'} gap-x-4 gap-y-[84px]`}>
                    <div className="flex items-start gap-2 w-[500px] h-fit">
                        <div className="h-6 w-6 mt-1">
                            <img className="w-full h-full" src="../../../../public/images/icons/indeterminate_question_box.svg" alt="" />
                        </div>
                        <div>
                            <h1 className="text-xl md:text-2xl font-semibold text-[#25373F] mb-4">Can I use Albino for my
                                clients?</h1>
                            <p className="text-sm md:text-base text-[#676769] mb-[11px] max-w-[364px]">With lots of unique
                                blocks, you can
                                easily build a page without coding. Build your next landing page. Integer ut Oberyn massa.
                                Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.</p>
                            <div>
                                <a href="#"
                                    className="flex items-center gap-3 text-xs md:text-sm text-[#6A26DA] font-semibold">Click to
                                    learn more <img src="../../../../public/images/icons/arrow_forward_ios.svg" alt="" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-start gap-2 w-[500px] h-fit">
                        <div className="h-6 w-6 mt-1">
                            <img className="w-full h-full" src="../../../../public/images/icons/indeterminate_question_box.svg" alt="" />
                        </div>
                        <div>
                            <h1 className="text-xl md:text-2xl font-semibold text-[#25373F] mb-4">How does App help people in
                                problems?
                            </h1>
                            <p className="text-sm md:text-base text-[#676769] mb-[11px] max-w-[364px]">With lots of unique
                                blocks, you can
                                easily build a page without coding. Build your next landing page. Integer ut Oberyn massa.
                                Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-2 w-[500px] h-fit">
                        <div className="h-6 w-6 mt-1">
                            <img className="w-full h-full" src="../../../../public/images/icons/indeterminate_question_box.svg" alt="" />
                        </div>
                        <div>
                            <h1 className="text-xl md:text-2xl font-semibold text-[#25373F] mb-4">What happens if i go over my
                                subscription
                                limits?</h1>
                            <p className="text-sm md:text-base text-[#676769] mb-[11px] max-w-[364px]">With lots of unique
                                blocks, you can
                                easily build a page without coding.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-2 w-[500px] h-fit">
                        <div className="h-6 w-6 mt-1">
                            <img className="w-full h-full" src="../../../../public/images/icons/indeterminate_question_box.svg" alt="" />
                        </div>
                        <div>
                            <h1 className="text-xl md:text-2xl font-semibold text-[#25373F] mb-4">Can I use Albino for my
                                clients?</h1>
                            <p className="text-sm md:text-base text-[#676769] mb-[11px] max-w-[364px]">With lots of unique
                                blocks, you can
                                easily build a page without coding. Build your next landing page. Integer ut Oberyn massa.
                            </p>
                        </div>
                    </div>
                </div>
                {
                    location.pathname == "/Home_1" ?
                        <div className="text-center mt-[70px] md:mt-[127px]">
                            <h1 className="text-xs md:text-sm text-[#25373F]">Have not got your answer? <a href="#"
                                className="text-[#6A26DA]">Contact
                                our support now</a></h1>
                        </div>
                        : ''
                }
            </div>
        </section>
    );
};

export default Home_1_FAQ;