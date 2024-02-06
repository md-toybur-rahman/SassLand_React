import { Link } from "react-router-dom";
import Home5_Blog_Category from "../../Sections/Home5_Blog_Catagory";
import Home_5_Mini_Banner from "../../Sections/Home_5_Mini_Banner";
import useTitle from "../../../Custom_Hooks/useTitle";


const Blog_5 = () => {
    useTitle('Blog');

	return (
		<div>
			<Home_5_Mini_Banner title="Blog"></Home_5_Mini_Banner>
			<main className="max-w-[1141px] mx-auto overflow-hidden md:overflow-visible">

				<section className="mt-[59px] md:mt-[108px] px-5 xl:px-0">
					<section className="flex flex-col items-center md:items-start md:flex-row gap-[58px]">
						<div>
							<div>
								<div>
									<img data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="0"
										data-aos-easing="ease-in-out" src="../../../../public/images/home_5_blog.png" alt="" />
								</div>
								<div className="flex items-center gap-7 mt-11">
									<p className="text-sm text-[#FF6036]">Design</p>
									<p className="text-sm text-[#676769]">October 21, 2023</p>
								</div>
								<div className="max-w-[655px] mt-4">
									<h1 className="font-bold text-[24px] md:text-[29px] text-[#2C2003] mb-6">Top Slack tips to boost productivity</h1>
									<p className="text-sm text-[#392904] font-medium mb-[44px] md:leading-[24px] max-w-[449px]">We partner closely with the most progressive companies in the world to improve</p>
									<Link to="/Home_5/Blog_Details">
										<button
											className="bg-[#FF6036] w-[185px] h-[56px] text-white text-base font-semibold rounded-lg">Learn More</button>
									</Link>
								</div>
							</div>
							<div className="bg-[#F9DDD4] max-w-[648px] px-[34px] pt-[51px] pb-[26px] mt-[53px]">
								<p className="text-[#383534] text-lg font-medium">“The best free way for SaaS companies to start leveraging video is using free social media tools like Facebook Live or Instagram,” said Caneva. </p>
							</div>
							<div className="mt-[83px]">
								<div>
									<img data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="0"
										data-aos-easing="ease-in-out" src="../../../../public/images/home_5_blog.png" alt="" />
								</div>
								<div className="flex items-center gap-7 mt-11">
									<p className="text-sm text-[#FF6036]">Design</p>
									<p className="text-sm text-[#676769]">October 21, 2023</p>
								</div>
								<div className="max-w-[655px] mt-4">
									<h1 className="font-bold text-[24px] md:text-[29px] text-[#2C2003] mb-6">Top Slack tips to boost productivity</h1>
									<p className="text-sm text-[#392904] font-medium mb-[44px] md:leading-[24px] max-w-[449px]">We partner closely with the most progressive companies in the world to improve</p>
									<Link to="/Home_5/Blog_Details">
										<button
											className="bg-[#FF6036] w-[185px] h-[56px] text-white text-base font-semibold rounded-lg">Learn More</button>
									</Link>
								</div>
							</div>
						</div>
						<Home5_Blog_Category></Home5_Blog_Category>
					</section>

				</section>

				<section className="flex gap-2 items-center mt-[108px] font-semibold">
					<div
						className="h-8 w-8 flex items-center justify-center border border-[#DFE3E8] hover:border-[#E35C30] rounded-md cursor-pointer bg-[#E35C30]/[50%]">
						<img className="rotate-180" src="../../../../public/images/icons/pagination-icon.svg" alt="" />
					</div>
					<div
						className="h-8 w-8 flex items-center justify-center border border-[#DFE3E8] hover:border-[#E35C30] rounded-md cursor-pointer">
						1
					</div>
					<div
						className="h-8 w-8 flex items-center justify-center border border-[#DFE3E8] hover:border-[#E35C30] rounded-md cursor-pointer">
						2
					</div>
					<div
						className="h-8 w-8 flex items-center justify-center border border-[#DFE3E8] hover:border-[#E35C30] rounded-md cursor-pointer">
						...
					</div>
					<div
						className="h-8 w-8 flex items-center justify-center border border-[#DFE3E8] hover:border-[#E35C30] rounded-md cursor-pointer">
						9
					</div>
					<div
						className="h-8 w-8 flex items-center justify-center border border-[#DFE3E8] hover:border-[#E35C30] rounded-md cursor-pointer">
						10
					</div>
					<div
						className="h-8 w-8 flex items-center justify-center border border-[#DFE3E8] hover:border-[#E35C30] rounded-md cursor-pointer">
						<img src="../../../../public/images/icons/pagination-icon.svg" alt="" />
					</div>
				</section>
			</main>
		</div>
	)
}

export default Blog_5;