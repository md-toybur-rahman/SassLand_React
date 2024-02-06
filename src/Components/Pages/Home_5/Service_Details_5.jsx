import useTitle from "../../../Custom_Hooks/useTitle";
import Home_5_Mini_Banner from "../../Sections/Home_5_Mini_Banner";
import Verticle_Carousel_Card from "../../Sections/Verticle_Carousel_Card";
import "https://code.jquery.com/jquery-3.2.1.min.js"
import "../../../../public/css/grt-youtube-popup.css";
import "../../../../public/js/grt-youtube-popup";
import { useEffect } from "react";
import useVideoModal from "../../../Custom_Hooks/useVideoModal";

const Service_Details_5 = () => {
	useTitle('Service Details');

	function tabHandler(currentTab, currentTabContent) {
		const tabs = document.getElementById("tab_container");
		const tab_items = tabs.getElementsByClassName('tab_item');
		const tabs_content = document.getElementById('tab_content_container');
		const tabs_content_item = tabs_content.getElementsByClassName('tab_content');
		const borderEffect = document.getElementById(currentTab);
		const current_content = document.getElementById(currentTabContent);
		for (let i = 0; i < tab_items.length; i++) {
			const element = tab_items[i];
			if (element.classList.contains('border-b-2')) {
				element.classList.remove('border-b-2');
				element.classList.remove('border-[#FF6036]');
			}
		}
		if (!borderEffect.classList.contains('border-b-2')) {
			borderEffect.classList.add('border-b-2');
			borderEffect.classList.add('border-[#FF6036]');
		}
		for (let i = 0; i < tabs_content_item.length; i++) {
			const element = tabs_content_item[i];
			if (element.classList.contains('block')) {
				element.classList.remove('block');
				element.classList.add('hidden');
			}
		}
		if (!current_content.classList.contains('block')) {
			current_content.classList.remove('hidden');
			current_content.classList.add('block');
		}

	}
	return (
		<div>

			<Home_5_Mini_Banner title="Service Details"></Home_5_Mini_Banner>
			<main className="max-w-[1142px] overflow-hidden md:overflow-visible mx-auto px-5 xl:px-0">
				<section
					className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10 mt-[60px] md:mt-[120px] max-w-[1140px] mx-auto px-5">
					<div className="">
						<h5 className="text-[#FF6036] font-semibold text-sm md:text-base mb-4">Best Features Development</h5>
						<h1 className="font-semibold text-[24px] md:text-[28.5px] text-[#223645] mb-6 max-w-[374px]">Benefits of
							Managed IT Services Provided</h1>
						<p className="text-sm md:text-base text-[#4B5B67] mb-[34px] max-w-[435px]">“The platform has been able to
							accommodate our growth and a variety of event types throughout the year.”</p>
						<div data-aos="fade-in" data-aos-duration="1000" data-aos-easing="ease-in-out">
							<img src="../../../../public/images/best_features_dev.png" alt="" />
						</div>
					</div>
					<div className="">
						<div className=" mb-8">
							<div className="flex items-center gap-4">
								<img src="../../../../public/images/icons/content_planning.svg" alt="" />
								<h3 className="text-[#223645] text-base md:text-lg font-semibold">Content Planning</h3>
							</div>
							<p className="text-sm md:text-base text-[#4B5B67] max-w-[460px] ps-5">“The platform has been able
								to
								accommodate our growth and a variety of event types throughout the year.”</p>
						</div>
						<div className=" mb-8">
							<div className="flex items-center gap-4">
								<img src="../../../../public/images/icons/realtime_feedback.svg" alt="" />
								<h3 className="text-[#223645] text-base md:text-lg font-semibold">Realtime Feedback</h3>
							</div>
							<p className="text-sm md:text-base text-[#4B5B67] max-w-[460px] ps-5">“The platform has been able
								to
								accommodate our growth and a variety of event types throughout the year.”</p>
						</div>
						<div className=" mb-8">
							<div className="flex items-center gap-4">
								<img src="../../../../public/images/icons/grouping_teams.svg" alt="" />

								<h3 className="text-[#223645] text-base md:text-lg font-semibold">Grouping Teams</h3>
							</div>
							<p className="text-sm md:text-base text-[#4B5B67] max-w-[460px] ps-5">“The platform has been able
								to
								accommodate our growth and a variety of event types throughout the year.”</p>
						</div>
						<div>
							<div className="flex items-center gap-4">
								<img src="../../../../public/images/icons/connect_with_everyone.svg" alt="" />
								<h3 className="text-[#223645] text-base md:text-lg font-semibold">Connect with Everyone</h3>
							</div>
							<p className="text-sm md:text-base text-[#4B5B67] max-w-[460px] ps-5">“The platform has been able
								to
								accommodate our growth and a variety of event types throughout the year.”</p>
						</div>
					</div>
				</section>

				<section
					className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10 mt-[102px] max-w-[1140px] mx-auto px-5">
					<div className="">
						<h5 className="text-[#FF6036] font-semibold text-sm md:text-base mb-4">How to Manage</h5>
						<h1 className="font-semibold text-[24px] md:text-[28.5px] text-[#223645] mb-6 max-w-[374px]">Benefits of
							Managed IT Services Provided</h1>

						<div id="tab_container" className="border-b border-[#DEDEDE] flex items-center justify-between">
							<div>
								<p id="our_approach" onClick={() => tabHandler('our_approach', 'our_approach_content')}
									className="tab_item font-semibold text-[#223645] text-base pb-4 w-fit border-b-2 border-[#FF6036] cursor-pointer">
									Our
									Approach</p>
							</div>
							<div>
								<p id="project_goals" onClick={() => tabHandler('project_goals', 'project_goals_content')}
									className="tab_item font-semibold text-[#223645] text-base pb-4 w-fit cursor-pointer">Project Goals
								</p>
							</div>
							<div>
								<p id="advisory" onClick={() => tabHandler('advisory', 'advisory_content')}
									className="tab_item font-semibold text-[#223645] text-base pb-4 w-fit cursor-pointer">Advisory</p>
							</div>
						</div>
						<div id="tab_content_container">
							<div id="our_approach_content" className="tab_content block">
								<p className="text-sm md:text-base text-[#4B5B67] my-10 max-w-[435px]">“The platform has been
									able
									to
									accommodate our growth and a variety of event types throughout the year.”</p>
								<div className="flex items-center justify-between">
									<div>
										<div className="flex items-center gap-2 mb-4">
											<img src="../../../public/images/icons/home5_check.svg" alt="" />
											<p className="text-[#223645] text-sm font-semibold">Efficient Sprint Planning</p>
										</div>
										<div className="flex items-center gap-2">
											<img src="../../../public/images/icons/home5_check.svg" alt="" />
											<p className="text-[#223645] text-sm font-semibold">Standups and Demos</p>
										</div>
									</div>
									<div>
										<div className="flex items-center gap-2 mb-4">
											<img src="../../../public/images/icons/home5_check.svg" alt="" />
											<p className="text-[#223645] text-sm font-semibold">Iterative Delivery Approach</p>
										</div>
										<div className="flex items-center gap-2">
											<img src="../../../public/images/icons/home5_check.svg" alt="" />
											<p className="text-[#223645] text-sm font-semibold">Problem Solving</p>
										</div>
									</div>
								</div>
							</div>
							<div id="project_goals_content" className="tab_content hidden">
								<p className="text-sm md:text-base text-[#4B5B67] my-10 max-w-[435px]">“The platform has been
									able
									to
									accommodate our growth and a variety of event types throughout the year.”</p>
								<div className="flex items-center justify-between">

									<div>
										<div className="flex items-center gap-2 mb-4">
											<img src="../../../public/images/icons/home5_check.svg" alt="" />
											<p className="text-[#223645] text-sm font-semibold">Iterative Delivery Approach</p>
										</div>
										<div className="flex items-center gap-2">
											<img src="../../../public/images/icons/home5_check.svg" alt="" />
											<p className="text-[#223645] text-sm font-semibold">Problem Solving</p>
										</div>
									</div>
									<div>
										<div className="flex items-center gap-2 mb-4">
											<img src="../../../public/images/icons/home5_check.svg" alt="" />
											<p className="text-[#223645] text-sm font-semibold">Efficient Sprint Planning</p>
										</div>
										<div className="flex items-center gap-2">
											<img src="../../../public/images/icons/home5_check.svg" alt="" />
											<p className="text-[#223645] text-sm font-semibold">Standups and Demos</p>
										</div>
									</div>
								</div>
							</div>
							<div id="advisory_content" className="tab_content hidden">
								<p className="text-sm md:text-base text-[#4B5B67] my-10 max-w-[435px]">“The platform has been
									able
									to
									accommodate our growth and a variety of event types throughout the year.”</p>
								<div className="flex items-center justify-between">
									<div>
										<div className="flex items-center gap-2 mb-4">
											<img src="../../../public/images/icons/home5_check.svg" alt="" />
											<p className="text-[#223645] text-sm font-semibold">Efficient Sprint Planning</p>
										</div>
										<div className="flex items-center gap-2">
											<img src="../../../public/images/icons/home5_check.svg" alt="" />
											<p className="text-[#223645] text-sm font-semibold">Iterative Delivery Approach</p>
										</div>
									</div>
									<div>
										<div className="flex items-center gap-2 mb-4">
											<img src="../../../public/images/icons/home5_check.svg" alt="" />
											<p className="text-[#223645] text-sm font-semibold">Standups and Demos</p>
										</div>
										<div className="flex items-center gap-2">
											<img src="../../../public/images/icons/home5_check.svg" alt="" />
											<p className="text-[#223645] text-sm font-semibold">Problem Solving</p>
										</div>
									</div>
								</div>
							</div>
						</div>

					</div>
					<div data-aos="fade-in" data-aos-duration="1000" data-aos-easing="ease-in-out">
						<img src="../../../public/images/how_to_use.png" alt="" />
					</div>
				</section>
			</main>

			<section className="mt-[129px] md:mt-[250px] max-w-[1139px] mx-auto">
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
			</main>
		</div>
	)
}

export default Service_Details_5;