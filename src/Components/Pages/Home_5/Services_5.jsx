import { Link } from "react-router-dom";
import Home_5_Mini_Banner from "../../Sections/Home_5_Mini_Banner";
import useTitle from "../../../Custom_Hooks/useTitle";


const Services_5 = () => {
    useTitle('Service');
	return (
		<div>
			<Home_5_Mini_Banner title="Services"></Home_5_Mini_Banner>
			<section className="bg-[url('../../../../public/images/our_services.png')] bg-cover px-5 lg:px-0 pb-[111px]">
				<div className="pt-[84px] max-w-[1142px] mx-auto">
					<h6 className="text-sm md:text-base text-[#FF6036] font-semibold mb-4">Our Services</h6>
					<h1 className="text-2xl md:text-[36px] text-white font-bold mb-[56px]">What <span
						className="text-[#FF6036]">Services</span> Were offering</h1>
					<div>
						<div
							className="flex flex-col sm:flex-row gap-5 text-center md:text-start items-center justify-between border-b border-[#B1B7CE] py-6">
							<h1 className="text-[#EBE9EF] text-lg md:text-[24px] font-semibold">Customer Support</h1>
							<Link to="/Home_5/Service_Details"><img src="../../../../public/images/icons/ei_arrow-right.svg" alt="" /> </Link>
						</div>
						<div
							className="flex flex-col sm:flex-row gap-5 text-center md:text-start items-center justify-between border-b border-[#B1B7CE] py-6">
							<h1 className="text-[#EBE9EF] text-lg md:text-[24px] font-semibold">Design & vreatives</h1>
							<p className="max-w-[435px] text-[#E8E8F5] text-base">“The platform has been able to accommodate our
								growth and a variety of event types throughout the year.”</p>
							<Link to="/Home_5/Service_Details"><img src="../../../../public/images/icons/ei_arrow-right.svg" alt="" /> </Link>
						</div>
						<div
							className="flex flex-col sm:flex-row gap-5 text-center md:text-start items-center justify-between border-b border-[#B1B7CE] py-6">
							<h1 className="text-[#EBE9EF] text-lg md:text-[24px] font-semibold">Human Resources</h1>
							<Link to="/Home_5/Service_Details"><img src="../../../../public/images/icons/ei_arrow-right.svg" alt="" /> </Link>
						</div>
						<div
							className="flex flex-col sm:flex-row gap-5 text-center md:text-start items-center justify-between border-b border-[#B1B7CE] py-6">
							<h1 className="text-[#EBE9EF] text-lg md:text-[24px] font-semibold">Marketing & Communication</h1>
							<Link to="/Home_5/Service_Details"><img src="../../../../public/images/icons/ei_arrow-right.svg" alt="" /> </Link>
						</div>
						<div
							className="flex flex-col sm:flex-row gap-5 text-center md:text-start items-center justify-between border-b border-[#B1B7CE] py-6">
							<h1 className="text-[#EBE9EF] text-lg md:text-[24px] font-semibold">Design & vreatives</h1>
							<Link to="/Home_5/Service_Details"><img src="../../../../public/images/icons/ei_arrow-right.svg" alt="" /> </Link>
						</div>
					</div>
				</div>
			</section>

			<main className="max-w-[1142px] overflow-hidden md:overflow-visible mx-auto px-5 xl:px-0">
				<section
					className="flex flex-col items-center justify-center lg:grid grid-cols-2 gap-10 lg:gap-[97px] mt-[60px] md:mt-[120px] max-w-[1140px] mx-auto px-5 home5_choose_us_bg bg-left bg-local">
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
			</main>
		</div>
	)
}

export default Services_5;