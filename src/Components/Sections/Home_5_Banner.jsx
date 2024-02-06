import { useLocation } from "react-router-dom";
import "https://code.jquery.com/jquery-3.2.1.min.js"
import "../../../public/css/grt-youtube-popup.css";
import "../../../public/js/grt-youtube-popup";
import { useEffect } from "react";
import useVideoModal from "../../Custom_Hooks/useVideoModal";
const Home_5_Banner = () => {
	const location = useLocation();
	return (
		<div>
			{
				location.pathname == "/Home_5" ?
					<section className="px-10 mt-8 md:mt-5 lg:mt-0">
						<div
							className="flex items-center gap-[71px] justify-center xl:justify-between justify-center bg-[url('../../../public/images/Home5_banner_bg.png')] bg-cover rounded-2xl lg:h-[650px] mx-auto py-10 sm:py-0 p-4 sm:p-10 xl:px-20">
							<div className="xl:max-w-[546px] px-5">
								<h1
									className="font-semibold text-[#223645] text-xl sm:text-[36px] lg:text-[57px] mb-6 max-w-[506px] leading-[36px] sm:leading-[57px] lg:leading-[72px]">
									Branding for
									your
									growth goals and creative ideas</h1>
								<p className="text-sm sm:text-base text-[#6C7882]">We partner closely with the most progressive
									companies in the
									world to improve their customer support operations. As consumers</p>
								<div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-[44px]">
									<button
										className="bg-[#FF6036] rounded-lg text-white px-5 sm:px-9 py-4 md:py-[18px] font-normal md:font-semibold text-sm md:text-base">Get
										Started Free</button>
									<button  onClick={() => useVideoModal('xcJtL7QggTI')}
										className="flex items-center justify-center sm:justify-start gap-2 text-[#7E8992] font-semibold text-sm md:text-base"><img
											src="../../../public/images//icons/Home5_play_video_icon.svg" alt="" />
										See The Video</button>
								</div>
							</div>
							<div className="hidden xl:block mt-11">
								<img src="../../../public/images/Home_5_main_banner.png" alt="" />
							</div>
						</div>
					</section>
					: ''
			}
		</div>
	)
}

export default Home_5_Banner;