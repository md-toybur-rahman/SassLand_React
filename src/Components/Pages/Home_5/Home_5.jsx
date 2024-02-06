import Home_5_Banner from "../../Sections/Home_5_Banner";
import Home_5_Services_Carousel from "../../Sections/Home_5_Services_Carousel_Card";
import Trusted_Companies from "../../Sections/Trusted_Companies";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./css/Home_5_Verticle_Carousel.css";
import FAQ_Medium_Card from "../../Sections/FAQ_Medium_Card";
import Verticle_Carousel_Card from "../../Sections/Verticle_Carousel_Card";
import useTitle from "../../../Custom_Hooks/useTitle";
import { Link } from "react-router-dom";
import "https://code.jquery.com/jquery-3.2.1.min.js"
import "../../../../public/css/grt-youtube-popup.css";
import "../../../../public/js/grt-youtube-popup";
import { useEffect } from "react";
import useVideoModal from "../../../Custom_Hooks/useVideoModal";
const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1640 },
		items: 3,
		slidesToSlide: 1 // optional, default to 1.
	},
	tablet: {
		breakpoint: { max: 1640, min: 1380 },
		items: 2.5,
		slidesToSlide: 1 // optional, default to 1.
	},
	tablet2: {
		breakpoint: { max: 1380, min: 1100 },
		items: 2,
		slidesToSlide: 1 // optional, default to 1.
	},
	tablet3: {
		breakpoint: { max: 1100, min: 880 },
		items: 1.5,
		slidesToSlide: 1 // optional, default to 1.
	},
	tablet3: {
		breakpoint: { max: 880, min: 768 },
		items: 1,
		slidesToSlide: 1 // optional, default to 1.
	},
	mobile: {
		breakpoint: { max: 880, min: 568 },
		items: 2,
		slidesToSlide: 1 // optional, default to 1.
	},
	mobile1: {
		breakpoint: { max: 568, min: 470 },
		items: 1.5,
		slidesToSlide: 1 // optional, default to 1.
	},
	mobile2: {
		breakpoint: { max: 470, min: 0 },
		items: 1,
		slidesToSlide: 1 // optional, default to 1.
	}
};

const Home_5 = () => {
    useTitle('Home');
	return (
		<div>
			<Home_5_Banner></Home_5_Banner>
			<Trusted_Companies></Trusted_Companies>
			<main className="max-w-[1142px] overflow-hidden md:overflow-visible mx-auto px-5 xl:px-0">

				{/* Leader in web */}
				<section
					className="flex flex-col items-center justify-center lg:grid grid-cols-2 gap-10 lg:gap-[97px] mt-[60px] md:mt-[120px] max-w-[1140px] mx-auto px-5 bg-[url('../../../../public/images/choose_us_bg.png')] bg-no-repeat bg-left bg-local">
					<div data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out">
						<img src="../../../../public/images/choose_us2.png" alt="" />
					</div>
					<div className="lg:max-w-[485px]">
						<h5 className="text-[#FF6036] font-semibold text-sm md:text-base mb-4">Why Choose Us</h5>
						<h1 className="font-semibold text-[24px] md:text-[28.5px] text-[#223645] mb-6 max-w-[309px]">Few Reasons Why
							You
							Should Choose Us</h1>
						<div className="sm:w-[553px] flex flex-wrap items-center gap-x-[65px] gap-y-6 mt-8">
							<div className="flex items-center gap-4">
								<img src="../../../../public/images/icons/content_planning.svg" alt="" />
								<h3 className="text-[#223645] text-base md:text-lg font-semibold">Content Planning</h3>
							</div>
							<div className="flex items-center gap-4">
								<img src="../../../../public/images/icons/grouping_teams.svg" alt="" />
								<h3 className="text-[#223645] text-base md:text-lg font-semibold">Content Planning</h3>
							</div>
							<div className="flex items-center gap-4">
								<img src="../../../../public/images/icons/realtime_feedback.svg" alt="" />
								<h3 className="text-[#223645] text-base md:text-lg font-semibold">Content Planning</h3>
							</div>
							<div className="flex items-center gap-4">
								<img src="../../../../public/images/icons/connect_with_everyone.svg" alt="" />
								<h3 className="text-[#223645] text-base md:text-lg font-semibold">Content Planning</h3>
							</div>
						</div>
					</div>
				</section>
				{/* End leader in web */}
			</main>
			{/* End Top Main */}


			{/* Best Features */}
			<section className="bg-[url('../../../../public/images/our_services.png')] bg-cover mt-[150px] px-5 lg:px-0 pb-[111px]">
				<div className="pt-[84px] max-w-[1142px] mx-auto">
					<h6 className="text-sm md:text-base text-[#FF6036] font-semibold mb-4">Our Services</h6>
					<h1 className="text-2xl md:text-[36px] text-white font-bold mb-[56px]">What <span
						className="text-[#FF6036]">Services</span> Were offering</h1>
					<div>
						<div
							className="flex flex-col sm:flex-row gap-5 text-center md:text-start items-center justify-between border-b border-[#B1B7CE] py-6">
							<h1 className="text-[#EBE9EF] text-lg md:text-[24px] font-semibold">Customer Support</h1>
							<Link to="/Home_5/Service_Details"><img src="../../../../public/images/icons/ei_arrow-right.svg" alt="" /></Link>
						</div>
						<div
							className="flex flex-col sm:flex-row gap-5 text-center md:text-start items-center justify-between border-b border-[#B1B7CE] py-6">
							<h1 className="text-[#EBE9EF] text-lg md:text-[24px] font-semibold">Design & vreatives</h1>
							<p className="max-w-[435px] text-[#E8E8F5] text-base">“The platform has been able to accommodate our
								growth and a variety of event types throughout the year.”</p>
							<Link to="/Home_5/Service_Details"><img src="../../../../public/images/icons/ei_arrow-right.svg" alt="" /></Link>
						</div>
						<div
							className="flex flex-col sm:flex-row gap-5 text-center md:text-start items-center justify-between border-b border-[#B1B7CE] py-6">
							<h1 className="text-[#EBE9EF] text-lg md:text-[24px] font-semibold">Human Resources</h1>
							<Link to="/Home_5/Service_Details"><img src="../../../../public/images/icons/ei_arrow-right.svg" alt="" /></Link>
						</div>
						<div
							className="flex flex-col sm:flex-row gap-5 text-center md:text-start items-center justify-between border-b border-[#B1B7CE] py-6">
							<h1 className="text-[#EBE9EF] text-lg md:text-[24px] font-semibold">Marketing & Communication</h1>
							<Link to="/Home_5/Service_Details"><img src="../../../../public/images/icons/ei_arrow-right.svg" alt="" /></Link>
						</div>
						<div
							className="flex flex-col sm:flex-row gap-5 text-center md:text-start items-center justify-between border-b border-[#B1B7CE] py-6">
							<h1 className="text-[#EBE9EF] text-lg md:text-[24px] font-semibold">Design & vreatives</h1>
							<Link to="/Home_5/Service_Details"><img src="../../../../public/images/icons/ei_arrow-right.svg" alt="" /></Link>
						</div>
					</div>
				</div>
			</section>
			{/* End Best Features */}

			<section className="mt-[129px] max-w-[1139px] mx-auto">
				<div className="flex flex-col items-center justify-center">
					<h6 className="text-sm md:text-base text-[#FF6036] font-semibold mb-4">Company Fun Fact</h6>
					<h1
						className="max-w-[450px] text-[24px] md:text-[36px] font-semibold leading-[54px] text-[#223645] text-center">
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
			<section className="bg-[url('../../../../public/images/Home5_Case_studies.png')] bg-cover px-5 lg:px-0 pt-[81px] pb-[80px] mt-[128px]">
				<div className="flex flex-col items-center justify-center">
					<h6 className="text-base text-[#FF6036] font-semibold mb-4">Our Services</h6>
					<h1
						className="max-w-[450px] text-[24px] md:text-[36px] font-semibold leading-[54px] text-[#223645] text-center">
						Design and
						Development across all platforms</h1>
				</div>
				<section className="mt-[50px] md:mt-[86px] max-w-[1800px] mx-auto px-5">
					<Carousel
						responsive={responsive}
						autoPlay={true}
						autoPlaySpeed={3000}
						infinite={true}
						arrows={false}>
						<div className="p-5">
							<Home_5_Services_Carousel></Home_5_Services_Carousel>
						</div>
						<div className="p-5">
							<Home_5_Services_Carousel></Home_5_Services_Carousel>
						</div>
						<div className="p-5">
							<Home_5_Services_Carousel></Home_5_Services_Carousel>
						</div>
					</Carousel>
				</section>
			</section>

			<main className="max-w-[1137px] mx-auto">

				<section
					className="px-5 lg:px-0 pt-[81px] pb-[80px] mt-[128px] max-w-[1118px] mx-auto flex flex-col md:flex-row items-center gap-20">
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

				<section className="flex flex-col md:flex-row gap-7 md:items-end justify-between px-5">
					<div className="mt-[86px] md:w-[588px] px-5 md:px-0">
						<div className="text-center md:text-start">
							<h6 className="text-base text-[#FF6036] font-semibold mb-4">FAQ</h6>
							<h1
								className="max-w-[340px] mx-auto md:mx-0 text-[24px] md:text-[28.5px] font-semibold leading-[54px] text-[#223645]">
								Frequently Asked Questions</h1>
						</div>
						<div className="mt-[42px]">
							<FAQ_Medium_Card
								question="Can I use Albino for my clients???"
								answer="With lots of unique blocks, you can easily build a page without
                        coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a
                        porta. Aliquam sagittis interdum Melisandre.."
								index="0"></FAQ_Medium_Card>

							<FAQ_Medium_Card
								question="Can I use Albino for my clients???"
								answer="With lots of unique blocks, you can easily build a page without
                        coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a
                        porta. Aliquam sagittis interdum Melisandre.."
								index="1"></FAQ_Medium_Card>

							<FAQ_Medium_Card
								question="Can I use Albino for my clients???"
								answer="With lots of unique blocks, you can easily build a page without
                        coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a
                        porta. Aliquam sagittis interdum Melisandre.."
								index="2"></FAQ_Medium_Card>

							<FAQ_Medium_Card
								question="Can I use Albino for my clients???"
								answer="With lots of unique blocks, you can easily build a page without
                        coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a
                        porta. Aliquam sagittis interdum Melisandre.."
								index="3"></FAQ_Medium_Card>
						</div>
					</div>
					<div className="hidden md:block">
						<img src="../../../../public/images/Home5_FAQ.png" alt="" />
					</div>
				</section>

				<section className="mt-[150px]">
					<div className="flex flex-col items-center justify-center">
						<h6 className="text-sm md:text-base text-[#FF6036] font-semibold mb-4">Our Blogs</h6>
						<h1
							className="max-w-[450px] text-[24px] md:text-[28.5px] font-semibold leading-[54px] text-[#223645] text-center">
							Why Our Clients Love Us?</h1>
					</div>
					<div className="flex flex-col lg:flex-row items-center lg:items-stretch mt-[50px] gap-8">
						<div className="p-6 rounded-xl max-w-[490px] blog-card flex flex-col gap-6 sm:gap-[42px]">
							<div className="w-full sm:w-[442px] sm:h-[305px]">
								<img src="../../../../public/images/home5_client_1.png" alt="" />
							</div>
							<div>
								<div className="flex items-center justify-between">
									<p className="text-[#676769] text-sm font-semibold">Business</p>
									<p className="text-[#676769] text-sm font-semibold">October 30,2022</p>
								</div>
								<h1 className="text-[24px] font-semibold text-[#2C2003] mt-4">Create Stunning websites Like a Pro
									with Taypo</h1>
								<p className="text-[#959595] text-base mt-2">We partner closely with the most progressive companies
									in the world to improve We partner closely with the most progressive </p>
							</div>
						</div>
						<div className="flex flex-col justify-between">
							<div
								className="p-6 rounded-xl max-w-[490px] md:max-w-[618px] blog-card flex flex-col md:flex-row items-end gap-8">
								<div className="w-full sm:w-[442px] h-[305px] md:w-[229px] md:h-[234px]">
									<img className="w-full h-full" src="../../../../public/images/home5_client_2.png" alt="" />
								</div>
								<div className="md:max-w-[310px]">
									<div className="flex items-center justify-between">
										<p className="text-[#676769] text-sm font-semibold">Business</p>
										<p className="text-[#676769] text-sm font-semibold">October 30,2022</p>
									</div>
									<h1 className="text-[24px] font-semibold text-[#2C2003] mt-4">Create Stunning websites Like a
										Pro with Taypo</h1>
									<p className="text-[#959595] text-base mt-2">We partner closely with the most progressive
										companies in the world to improve We partner closely with the most progressive </p>
								</div>
							</div>
							<div
								className="p-6 rounded-xl max-w-[490px] md:max-w-[618px] blog-card flex flex-col md:flex-row items-end gap-8">
								<div className="w-full sm:w-[442px] h-[305px] md:w-[229px] md:h-[234px]">
									<img className="w-full h-full" src="../../../../public/images/home5_client_2.png" alt="" />
								</div>
								<div className="md:max-w-[310px]">
									<div className="flex items-center justify-between">
										<p className="text-[#676769] text-sm font-semibold">Business</p>
										<p className="text-[#676769] text-sm font-semibold">October 30,2022</p>
									</div>
									<h1 className="text-[24px] font-semibold text-[#2C2003] mt-4">Create Stunning websites Like a
										Pro with Taypo</h1>
									<p className="text-[#959595] text-base mt-2">We partner closely with the most progressive
										companies in the world to improve We partner closely with the most progressive </p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	)
}

export default Home_5;