import React from 'react';
import useTitle from '../../../Custom_Hooks/useTitle';

const Contact_Us_3 = () => {
    useTitle('Contact Us');

    return (
        <main className="max-w-[1186px] mx-auto px-5 xl:px-0 mt-[72px] mb-[92px]">
            <section className="flex justify-center">
                <div className="max-w-[461px] w-full pt-[168px] home3-contact-us-card rounded-lg bg-[#FCFCFF]">
                    <div className="max-w-[153px] ms-10 sm:ms-[87px]">
                        <img data-aos="flip-left" data-aos-duration="1000" data-aos-delay="0" data-aos-easing="ease-in-out" src="../../../../public/images/icons/sms.svg" alt="" />
                            <div className="mt-6">
                                <h1 className="text-[#454545] text-[20px] md:text-[24px] font-semibold">Contact us</h1>
                                <p className="text-[#676769] font-semibold text-sm leading-[24px] mt-2">34 Madison Street,NY,USA
                                    10005</p>
                                <p className="text-[#676769] font-semibold text-sm leading-[24px] mt-2">+1-940-394-2948</p>
                                <p className="text-[#676769] font-semibold text-sm leading-[24px] mt-2">contact@grayic.com</p>
                            </div>
                    </div>
                    <div className="h-[190px] bg-[#FF6AC2] px-10 sm:px-[87px] pt-6 mt-[146px]">
                        <div className="flex justify-between">
                            <button className="text-white font-semibold text-base">Message Us</button>
                            <button className="text-white font-semibold text-base">Get Direction</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact_Us_3;