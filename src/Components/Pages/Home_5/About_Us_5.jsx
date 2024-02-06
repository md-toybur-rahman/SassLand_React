import useTitle from "../../../Custom_Hooks/useTitle";
import Home_5_About_Team_Card from "../../Sections/Home_5_About_Team_Card";
import Home_5_Mini_Banner from "../../Sections/Home_5_Mini_Banner";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Verticle_Carousel_Card from "../../Sections/Verticle_Carousel_Card";
import Trusted_Companies from "../../Sections/Trusted_Companies";
import "https://code.jquery.com/jquery-3.2.1.min.js"
import "../../../../public/css/grt-youtube-popup.css";
import "../../../../public/js/grt-youtube-popup";
import { useEffect } from "react";
import useVideoModal from "../../../Custom_Hooks/useVideoModal";

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1640 },
		items: 5,
		slidesToSlide: 1 // optional, default to 1.
	},
	tablet: {
		breakpoint: { max: 1640, min: 1380 },
		items: 5,
		slidesToSlide: 1 // optional, default to 1.
	},
	tablet2: {
		breakpoint: { max: 1380, min: 1100 },
		items: 4,
		slidesToSlide: 1 // optional, default to 1.
	},
	tablet3: {
		breakpoint: { max: 1100, min: 880 },
		items: 3,
		slidesToSlide: 1 // optional, default to 1.
	},
	mobile: {
		breakpoint: { max: 880, min: 568 },
		items: 2,
		slidesToSlide: 1 // optional, default to 1.
	},
	mobile1: {
		breakpoint: { max: 568, min: 0 },
		items: 1,
		slidesToSlide: 1 // optional, default to 1.
	}
};


const About_Us_5 = () => {
	useTitle('About Us');
	return (
		<div>
			<Home_5_Mini_Banner title="About Company"></Home_5_Mini_Banner>
			<main className="max-w-[1142px] overflow-hidden md:overflow-visible mx-auto px-5 xl:px-0">

				<section
					className="flex flex-col md:flex-row md:items-center justify-center gap-10 mt-[60px] md:mt-[120px] max-w-[1140px] mx-auto px-5">
					<div className="lg:max-w-[357px]">
						<h5 className="text-[#FF6036] font-semibold text-sm md:text-base mb-6">About Company</h5>
						<h1 className="font-semibold text-[24px] md:text-[28.5px] text-[#223645] mb-6">Make your life easier with
							help from <span className="text-[#FF6036]"> Sass land</span></h1>
						<div className="flex flex-col gap-y-6 mt-6">
							<div className="flex items-center gap-4">
								<img src="../../../../public/images/icons/content_planning.svg" alt="" />
								<h3 className="text-[#223645] text-base md:text-lg font-semibold">Content Planning</h3>
							</div>
							<div className="flex items-center gap-4">
								<img src="../../../../public/images/icons/connect_with_everyone.svg" alt="" />
								<h3 className="text-[#223645] text-base md:text-lg font-semibold">Content Planning</h3>
							</div>
						</div>
					</div>
					<div className="flex gap-[57px]">
						<div className="hidden xl:block">
							<img src="../../../../public/images/about_us_about_cover.png" alt="" />
						</div>
						<div className="max-w-[364px]">
							<h1 className="font-semibold text-[24px] text-[#2C2003] mb-6">We Are The Leader in Web Design</h1>
							<p className=" text-base text-[#676769] pb-14 border-b border-[#383534]">Amet minim mollit non deserunt
								ullamco est sit aliqua dolor do amet sint velit of a officia</p>
							<div className="mt-10">
								<div className=" flex flex-wrap items-end gap-6 px-10 md:px-0">
									<div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="0"
										data-aos-easing="ease-in-out" className="text-center pb-[17px]">
										<h1 className="text-[36px] lg:text-[48px] text-[#FF6036] font-bold mb-4">53K</h1>
										<p className="text-sm md:text-[16px] text-[#A09C9B]">Cool Number</p>
									</div>
									<div className="w-[1px] h-[51.5px] bg-[#E8E8E9] hidden sm:block"></div>
									<div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="100"
										data-aos-easing="ease-in-out" className="text-center pb-[17px]">
										<h1 className="text-[36px] lg:text-[48px] text-[#FF6036] font-bold mb-4">10K</h1>
										<p className="text-sm md:text-[16px] text-[#A09C9B]">Projects Done</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="flex flex-col md:flex-row items-center md:items-start gap-12 max-w-[774px] mx-auto mt-[120px]">
					<div>
						<img src="../../../../public/images/customer1.png" alt="" />
					</div>
					<div className="max-w-[461px]">
						<div className="flex items-center gap-2">
							<img src="../../../../public/images/icons/about_star.svg" alt="" />
							<img src="../../../../public/images/icons/about_star.svg" alt="" />
							<img src="../../../../public/images/icons/about_star.svg" alt="" />
							<img src="../../../../public/images/icons/about_star.svg" alt="" />
							<img src="../../../../public/images/icons/about_empty_srtar.svg" alt="" />
						</div>
						<p className="text-[#676769] text-[19.44px] mt-2 leading-[22px]">“The platform has been able to accommodate
							our
							growth and a variety of event types throughout the year.”</p>
						<h1 className=" text-[19.44px] text-[#4A4A4A] font-semibold mt-7 pb-8 border-b border-[#383534]">Hunter A.,
							Head of Growth</h1>
						<div className="mt-6 flex items-center gap-4">
							<div className="flex">
								<img src="../../../../public/images/Ellipse 4.png" alt="" />
								<img className="-ml-2" src="../../../../public/images/Ellipse 5.png" alt="" />
								<img className="-ml-2" src="../../../../public/images/Ellipse 6.png" alt="" />
								<img className="-ml-2" src="../../../../public/images/Ellipse 7.png" alt="" />
								<div className="w-9 h-9 rounded-full bg-[#FF6036] flex items-center justify-center -ml-2">
									<p className="text-white text-lg font-semibold">8+</p>
								</div>
							</div>
							<div>
								<p className="text-lg text-[#676769]">10m+ Trusted Global Customers</p>
								<img src="../../../../public/images/icons/about_line.svg" alt="" />
							</div>
						</div>
					</div>
				</section>
			</main>
			<section className="relative mt-[150px] pb-[111px]">
				<img className="w-full h-[1050px] md:h-[1179px] absolute -z-10" src="../../../../public/images/about_team_bg.png" alt="" />
				<div className="ps-10 xl:ps-[150px] z-10">
					<div className="pt-[84px] max-w-[1440px]">
						<h6 className="text-sm md:text-base text-[#FF6036] font-semibold mb-4">Meet our Team</h6>
						<h1 className="text-2xl md:text-[36px] text-white font-bold mb-[56px] max-w-[575px] leading-[54px]">We ve
							Exclusive Team member meet our
							Professionals</h1>
						<section className="wrapper mt-[50px] md:mt-[86px] mx-auto">
							<Carousel
								responsive={responsive}
								autoPlay={true}
								autoPlaySpeed={3000}
								infinite={true}
								arrows={false}>
								<div className="p-5">
									<Home_5_About_Team_Card name="Tommie" designation="Senior Consultant" image="tommie1.png"></Home_5_About_Team_Card>
								</div>
								<div className="p-5">
									<Home_5_About_Team_Card name="Tommie" designation="Senior Consultant" image="tommie2.png"></Home_5_About_Team_Card>
								</div>
								<div className="p-5">
									<Home_5_About_Team_Card name="Tommie" designation="Senior Consultant" image="tommie3.png"></Home_5_About_Team_Card>
								</div>
								<div className="p-5">
									<Home_5_About_Team_Card name="Tommie" designation="Senior Consultant" image="tommie4.png"></Home_5_About_Team_Card>
								</div>
								<div className="p-5">
									<Home_5_About_Team_Card name="Tommie" designation="Senior Consultant" image="tommie5.png"></Home_5_About_Team_Card>
								</div>
							</Carousel>
						</section>
					</div>
				</div>


				<section className="mt-[129px] max-w-[1139px] px-10 mx-auto">
					<div className="flex flex-col items-center justify-center">
						<h6 className="text-sm md:text-base text-[#FF6036] font-semibold mb-4">Company Fun Fact</h6>
						<h1
							className="max-w-[450px] text-[24px] md:text-[36px] font-semibold leading-[54px] text-white text-center">
							Design and
							Development across all platforms</h1>
					</div>
					<div className="max-w-[944px] mx-auto mt-8">
						<img onClick={() => useVideoModal('xcJtL7QggTI')} className="cursor-pointer" src="../../../../public/images/Home5_our_services.png" alt="" />
					</div>
					<div className="flex items-center justify-center px-5 mt-[56px] border-b border-[#E9EBEC]">
						<div
							className=" flex flex-wrap items-center justify-center lg:justify-between gap-6 max-w-[738px] w-full mx-auto px-10 md:px-0">
							<div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="0" data-aos-easing="ease-in-out"
								className="text-center pb-[17px]">
								<h1 className="text-[36px] lg:text-[48px] text-[#223645] font-bold mb-4">53K</h1>
								<p className="text-sm md:text-[16px] text-[#A09C9B]">Cool Number</p>
							</div>
							<div className="w-[1px] h-[111px] bg-[#E8E8E9] hidden sm:block"></div>
							<div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="100" data-aos-easing="ease-in-out"
								className="text-center pb-[17px]">
								<h1 className="text-[36px] lg:text-[48px] text-[#223645] font-bold mb-4">10K</h1>
								<p className="text-sm md:text-[16px] text-[#A09C9B]">Projects Done</p>
							</div>
							<div className="w-[1px] h-[111px] bg-[#E8E8E9] hidden sm:block"></div>
							<div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200" data-aos-easing="ease-in-out"
								className="text-center pb-[17px]">
								<h1 className="text-[36px] lg:text-[48px] text-[#223645] font-bold mb-4">120</h1>
								<p className="text-sm md:text-[16px] text-[#A09C9B]">Cool Number</p>
							</div>
						</div>
					</div>
				</section>

			</section>

			<main className="max-w-[1137px] mx-auto">

				<section
					className="px-5 pt-[81px] pb-[80px] mt-[128px] max-w-[1118px] mx-auto flex flex-col md:flex-row items-center gap-20">
					<div>
						<div className="">
							<h6 className="text-base text-[#FF6036] font-semibold mb-4">TESTIMONAL</h6>
							<h1 className="max-w-[340px] text-[24px] md:text-[28.5px] font-semibold leading-[54px] text-[#223645]">
								Why
								Clients Love Us</h1>
							<div className="mt-6">
								<img src="../../../../public/images/about_textimonal.png" alt="" />
							</div>
						</div>
					</div>
					<div className="hidden sm:block sm:w-[500px] h-[300px] mt-16">
						<div className='wrapper2'>
							<div className='carousel2'>

								<div className='carousel__item'>
									<Verticle_Carousel_Card></Verticle_Carousel_Card>
								</div>

								<div className='carousel__item'>
									<Verticle_Carousel_Card></Verticle_Carousel_Card>
								</div>

								<div className='carousel__item'>
									<Verticle_Carousel_Card></Verticle_Carousel_Card>
								</div>

								<div className='carousel__item'>
									<Verticle_Carousel_Card></Verticle_Carousel_Card>
								</div>

								<div className='carousel__item'>
									<Verticle_Carousel_Card></Verticle_Carousel_Card>
								</div>

								<div className='carousel__item'>
									<Verticle_Carousel_Card></Verticle_Carousel_Card>
								</div>

								<div className='carousel__item'>
									<Verticle_Carousel_Card></Verticle_Carousel_Card>
								</div>

								<div className='carousel__item'>
									<Verticle_Carousel_Card></Verticle_Carousel_Card>
								</div>

								<div className='carousel__item'>
									<Verticle_Carousel_Card></Verticle_Carousel_Card>
								</div>

							</div>
						</div>
					</div>
				</section>
				<Trusted_Companies></Trusted_Companies>
			</main>

		</div>
	)
}

export default About_Us_5;