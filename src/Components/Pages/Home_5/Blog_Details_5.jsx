import useTitle from "../../../Custom_Hooks/useTitle";
import Home5_Blog_Category from "../../Sections/Home5_Blog_Catagory";
import Home_5_Mini_Banner from "../../Sections/Home_5_Mini_Banner";

const Blog_Details_5 = () => {
    useTitle('Blog Details');

	return (
		<div>
			<Home_5_Mini_Banner title="Blog Details"></Home_5_Mini_Banner>
			<main className="max-w-[1141px] mx-auto overflow-hidden md:overflow-visible">
				<section className="mt-[59px] md:mt-[108px] px-5 xl:px-0">
					<section className="flex flex-col items-center md:items-start md:flex-row gap-[58px]">
						<div>
							<div>
								<div className="max-w-[655px] mt-4">
									<h1 className="font-bold text-[20px] md:text-[24px] text-[#2C2003] mb-6">How to Clean Your Home Faster and More Efficiently</h1>
									<p className="text-base text-[#646464] font-medium mb-[44px] md:leading-[24px] max-w-[655px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat […]</p>
								</div>
								<div>
									<img data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="0"
										data-aos-easing="ease-in-out" src="../../../../public/images/home_5_blog.png" alt="" />
								</div>
								<div className="max-w-[655px] mt-4">
									<p className="text-base text-[#646464] font-medium mb-[44px] md:leading-[24px] max-w-[655px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat […]</p>
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
								<div className="max-w-[655px] mt-10">
									<h1 className="font-bold text-[20px] md:text-[24px] text-[#2C2003] mb-6">How to Clean Your Home Faster and More Efficiently</h1>
									<p className="text-base text-[#646464] font-medium mb-[44px] md:leading-[24px] max-w-[655px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat […]</p>
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

export default Blog_Details_5;