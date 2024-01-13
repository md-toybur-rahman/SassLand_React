import React from 'react';
import Our_Team_Card from './Our_Team_Card';

const Our_Team = (props) => {
    return (
        <div>
            <div className="max-w-[790px] mx-auto text-center">
                <h1 className="font-semibold text-[24px] md:text-[36px] text-[#262729] mb-4">Our Team Leader</h1>
                <p className="text-sm md:text-base text-[#676769] font-medium mb-[56px] md:leading-[32px]">We partner closely
                    with
                    the most progressive companies in the world to improve their customer support operations. As consumers,
                    we all have our own version of that one call to customer support.</p>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-[42px] items-center justify-center">
                <div data-aos="fade-down-right" data-aos-duration="1000">
                    <Our_Team_Card image="../../../../public/images/about-perosn.svg"
                        name="Ralph Edwards"
                        designation="Management"
                        facebook_image={props.facebook_image}
                        twitter_image={props.twitter_image}
                        linkedin_image={props.linkedin_image}
                        instagram_image={props.instagram_image}></Our_Team_Card>
                </div>
                <div data-aos="fade-down-left" data-aos-duration="1000">
                    <Our_Team_Card image="../../../../public/images/about-person2.svg"
                        name="Ralph Edwards"
                        designation="Management"
                        facebook_image={props.facebook_image}
                        twitter_image={props.twitter_image}
                        linkedin_image={props.linkedin_image}
                        instagram_image={props.instagram_image}></Our_Team_Card>
                </div>
                <div data-aos="fade-up-right" data-aos-duration="1000">
                    <Our_Team_Card image="../../../../public/images/about-person2.svg"
                        name="Ralph Edwards"
                        designation="Management"
                        facebook_image={props.facebook_image}
                        twitter_image={props.twitter_image}
                        linkedin_image={props.linkedin_image}
                        instagram_image={props.instagram_image}></Our_Team_Card>
                </div>
                <div data-aos="fade-up-left" data-aos-duration="1000">
                    <Our_Team_Card image="../../../../public/images/about-person2.svg"
                        name="Ralph Edwards"
                        designation="Management"
                        facebook_image={props.facebook_image}
                        twitter_image={props.twitter_image}
                        linkedin_image={props.linkedin_image}
                        instagram_image={props.instagram_image}></Our_Team_Card>
                </div>
            </div>
        </div>
    );
};

export default Our_Team;