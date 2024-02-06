import useTitle from "../../../Custom_Hooks/useTitle";
import Home_5_Mini_Banner from "../../Sections/Home_5_Mini_Banner";


const Pricing_Plans_5 = () => {
    useTitle('Pricing Plan');


	function handleInstallmentToggle() {
		const monthly = document.getElementById('monthly');
		const yearly = document.getElementById('yearly');
		const installmentToggle = document.getElementById('installmentToggle');
		if (!installmentToggle.classList.contains('right-0')) {
			installmentToggle.classList.remove('left-0');
			installmentToggle.classList.add('right-0');
			monthly.classList.remove('text-[#FF6036]');
			monthly.classList.add('text-[#7C7C7C]');
			yearly.classList.remove('text-[#7C7C7C]');
			yearly.classList.add('text-[#FF6036]');
		}
		else {
			installmentToggle.classList.remove('right-0');
			installmentToggle.classList.add('left-0');
			yearly.classList.remove('text-[#FF6036]');
			yearly.classList.add('text-[#7C7C7C]');
			monthly.classList.remove('text-[#7C7C7C]');
			monthly.classList.add('text-[#FF6036]');
		}
	}

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
			<Home_5_Mini_Banner title="Pricing Plans"></Home_5_Mini_Banner>
			<main className="max-w-[1142px] overflow-hidden md:overflow-visible mx-auto px-5 xl:px-0">
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
						<img src="../../../public/images/pricing_plan.png" alt="" />
					</div>
				</section>



				<section className="mt-[121px]">
					<div onClick={handleInstallmentToggle} className="mt-8 flex items-center justify-center gap-6">
						<h1 id="monthly" className="text-[#FF6036] text-sm font-semibold">Monthly</h1>
						<div className="w-9 relative cursor-pointer">
							<div className="w-full h-3 border-4 border-[#FF6036] rounded-full">
								<div id="installmentToggle" className="h-[19px] w-[19px] border-4 border-[#FF6036] bg-[#F6F3EE] rounded-full absolute -top-1 left-0">
								</div>
							</div>
						</div>
						<h1 id="yearly" className="text-[#7C7C7C] text-sm font-semibold">Yearly</h1>
					</div>

					<div className="flex items-center gap-6 flex-wrap justify-center mt-10">
						<div data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="400"
							className="py-[65px] ps-[42px] pe-3 bg-white rounded-2xl max-w-[364px] blog-card ">
							<div className="pb-[42px] mb-[42px] border-b border-[#DDDDDD]">
								<h1 className="text-[#FF6036] text-sm md:text-base font-medium mb-2">BASIC</h1>
								<h1 className="text-black text-base md:text-[20px] font-medium mb-6">Startup Agency</h1>
								<h1 className="font-extrabold text-2xl md:text-4xl tracking-tighter text-[#FF6036]">$
									10<span className="text-sm md:text-base font-bold tracking-normal text-black"> /mo</span></h1>
							</div>
							<ul className="flex flex-col gap-5 max-w-[278px]">
								<li className="flex items-center gap-2">
									<img src="../../../public/images/icons/Check.svg" alt="" />
									<h1 className="font-semibold text-xs md:text-sm text-[#3D3D3D]">Includes 1 seat</h1>
								</li>
								<li className="flex items-center gap-2">
									<img src="../../../public/images/icons/Check.svg" alt="" />
									<h1 className="font-semibold text-xs md:text-sm text-[#3D3D3D]">1 Brand voice</h1>
								</li>
								<li className="flex items-center gap-2">
									<img src="../../../public/images/icons/Check.svg" alt="" />
									<h1 className="font-semibold text-xs md:text-sm text-[#3D3D3D]">50+ Templates</h1>
								</li>
								<li className="flex items-center gap-2">
									<img src="../../../public/images/icons/Unchecked.svg" alt="" />
									<h1 className="font-noraml text-xs md:text-sm text-[#3D3D3D]">Access SEO mode</h1>
								</li>
								<li className="flex items-center gap-2">
									<img src="../../../public/images/icons/Unchecked.svg" alt="" />
									<h1 className="font-normal text-xs md:text-sm text-[#3D3D3D]">Use AI everywhere with browser
										extension</h1>
								</li>
							</ul>
							<div className="mt-[42px]">
								<button
									className="px-[30px] md:px-[50px] py-[10px] md:py-[17px] border border-[#505050] rounded-md bg-transparent text-[#101010] text-sm md:text-base font-medium">Get
									started for free</button>
							</div>
						</div>
						<div data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="200"
							className="py-[65px] ps-[42px] pe-3 bg-white rounded-2xl max-w-[364px] blog-card ">
							<div className="pb-[42px] mb-[42px] border-b border-[#DDDDDD]">
								<h1 className="text-[#FF6036] text-sm md:text-base font-medium mb-2">BASIC</h1>
								<h1 className="text-black text-base md:text-[20px] font-medium mb-6">Startup Agency</h1>
								<h1 className="font-extrabold text-2xl md:text-4xl tracking-tighter text-[#FF6036]">$
									10<span className="text-sm md:text-base font-bold tracking-normal text-black"> /mo</span></h1>
							</div>
							<ul className="flex flex-col gap-5 max-w-[278px]">
								<li className="flex items-center gap-2">
									<img src="../../../public/images/icons/Check.svg" alt="" />
									<h1 className="font-semibold text-xs md:text-sm text-[#3D3D3D]">Includes 1 seat</h1>
								</li>
								<li className="flex items-center gap-2">
									<img src="../../../public/images/icons/Check.svg" alt="" />
									<h1 className="font-semibold text-xs md:text-sm text-[#3D3D3D]">1 Brand voice</h1>
								</li>
								<li className="flex items-center gap-2">
									<img src="../../../public/images/icons/Check.svg" alt="" />
									<h1 className="font-semibold text-xs md:text-sm text-[#3D3D3D]">50+ Templates</h1>
								</li>
								<li className="flex items-center gap-2">
									<img src="../../../public/images/icons/Unchecked.svg" alt="" />
									<h1 className="font-noraml text-xs md:text-sm text-[#3D3D3D]">Access SEO mode</h1>
								</li>
								<li className="flex items-center gap-2">
									<img src="../../../public/images/icons/Unchecked.svg" alt="" />
									<h1 className="font-normal text-xs md:text-sm text-[#3D3D3D]">Use AI everywhere with browser
										extension</h1>
								</li>
							</ul>
							<div className="mt-[42px]">
								<button
									className="px-[30px] md:px-[50px] py-[10px] md:py-[17px] border border-[#FF6036] rounded-md bg-[#FF6036] text-white text-sm md:text-base font-medium">Get
									started for free</button>
							</div>
						</div>
						<div data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="0"
							className="py-[65px] ps-[42px] pe-3 bg-white rounded-2xl max-w-[364px] blog-card ">
							<div className="pb-[42px] mb-[42px] border-b border-[#DDDDDD]">
								<h1 className="text-[#FF6036] text-sm md:text-base font-medium mb-2">BASIC</h1>
								<h1 className="text-black text-base md:text-[20px] font-medium mb-6">Startup Agency</h1>
								<h1 className="font-extrabold text-2xl md:text-4xl tracking-tighter text-[#FF6036]">$
									10<span className="text-sm md:text-base font-bold tracking-normal text-black"> /mo</span></h1>
							</div>
							<ul className="flex flex-col gap-5 max-w-[278px]">
								<li className="flex items-center gap-2">
									<img src="../../../public/images/icons/Check.svg" alt="" />
									<h1 className="font-semibold text-xs md:text-sm text-[#3D3D3D]">Includes 1 seat</h1>
								</li>
								<li className="flex items-center gap-2">
									<img src="../../../public/images/icons/Check.svg" alt="" />
									<h1 className="font-semibold text-xs md:text-sm text-[#3D3D3D]">1 Brand voice</h1>
								</li>
								<li className="flex items-center gap-2">
									<img src="../../../public/images/icons/Check.svg" alt="" />
									<h1 className="font-semibold text-xs md:text-sm text-[#3D3D3D]">50+ Templates</h1>
								</li>
								<li className="flex items-center gap-2">
									<img src="../../../public/images/icons/Unchecked.svg" alt="" />
									<h1 className="font-noraml text-xs md:text-sm text-[#3D3D3D]">Access SEO mode</h1>
								</li>
								<li className="flex items-center gap-2">
									<img src="../../../public/images/icons/Unchecked.svg" alt="" />
									<h1 className="font-normal text-xs md:text-sm text-[#3D3D3D]">Use AI everywhere with browser
										extension</h1>
								</li>
							</ul>
							<div className="mt-[42px]">
								<button
									className="px-[30px] md:px-[50px] py-[10px] md:py-[17px] border border-[#505050] rounded-md bg-transparent text-[#101010] text-sm md:text-base font-medium">Get
									started for free</button>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	)
}

export default Pricing_Plans_5;