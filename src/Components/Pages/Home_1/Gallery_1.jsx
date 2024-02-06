import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Home_1_Blog_Card from '../../Sections/Home_1_Blog_Card';
import useTitle from '../../../Custom_Hooks/useTitle';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const Gallery_1 = () => {
    useTitle('Gallery');
    return (
        <div>
            <main className="max-w-[1156px]  mx-auto px-5 xl:px-0">

                <div className="max-w-[746px] mx-auto text-center mt-[40px] md:mt-[100px]">
                    <h1 className="font-semibold text-[#454545] text-2xl md:text-[36px] mb-4">Gallery</h1>
                    <p className="text-sm md:text-base lg:text-[20px] font-medium text-[#676769] md:leading-[32px]">
                        Everything you need to control spend and optimize finance operations, all on a single platform.
                    </p>
                </div>
                <div className='mt-[50px] md:mt-[86px] mb-[100px] md:mb-[195px]'>
                    <Carousel
                        responsive={responsive}
                        showDots={true}
                        autoPlay={true}
                        autoPlaySpeed={1500}
                        infinite={true}
                        arrows={false}>
                        <div className='mb-16'>
                            <Home_1_Blog_Card image="../../../../public/images/gallery1.png" title="Top Slack tips to boost productivity"></Home_1_Blog_Card>
                        </div>
                        <div className='mb-16'>
                            <Home_1_Blog_Card image="../../../../public/images/gallery2.png" title="Top Slack tips to boost productivity"></Home_1_Blog_Card>
                        </div>
                        <div className='mb-16'>
                            <Home_1_Blog_Card image="../../../../public/images/gallery3.png" title="Top Slack tips to boost productivity"></Home_1_Blog_Card>
                        </div>
                        <div className='mb-16'>
                            <Home_1_Blog_Card image="../../../../public/images/gallery1.png" title="Top Slack tips to boost productivity"></Home_1_Blog_Card>
                        </div>
                        <div className='mb-16'>
                            <Home_1_Blog_Card image="../../../../public/images/gallery2.png" title="Top Slack tips to boost productivity"></Home_1_Blog_Card>
                        </div>
                        <div className='mb-16'>
                            <Home_1_Blog_Card image="../../../../public/images/gallery3.png" title="Top Slack tips to boost productivity"></Home_1_Blog_Card>
                        </div>
                        <div className='mb-16'>
                            <Home_1_Blog_Card image="../../../../public/images/gallery1.png" title="Top Slack tips to boost productivity"></Home_1_Blog_Card>
                        </div>
                        <div className='mb-16'>
                            <Home_1_Blog_Card image="../../../../public/images/gallery2.png" title="Top Slack tips to boost productivity"></Home_1_Blog_Card>
                        </div>
                    </Carousel>
                </div>
            </main>
        </div>
    );
};

export default Gallery_1;