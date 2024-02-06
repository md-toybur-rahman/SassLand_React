import { Link } from "react-router-dom";


const Footer_5 = () => {
	return (
		<footer className="home5_footer_bg bg-cover mt-[114px] pt-[83px] pb-[56px] px-5">
			<section className="max-w-[1140px] mx-auto">
				<div>
					<h1 className="text-[#223645] text-[36px] leading-[54px] text-center font-bold">Were Ready to Grow you
						Business,
						<br /> Get Start Today!
					</h1>
					<div className="flex items-center justify-center">
						<button
							className="px-[30px] py-[13px] rounded-md text-[15px] font-semibold text-white bg-[#FF6036] mt-[52px]">Get
							Started Now</button>
					</div>
					<div className="flex items-center justify-center gap-2 mt-3">
						<div className="flex items-center gap-2">
							<img src="../../../../public/images/icons/home5_star.svg" alt="" />
							<img src="../../../../public/images/icons/home5_star.svg" alt="" />
							<img src="../../../../public/images/icons/home5_star.svg" alt="" />
							<img src="../../../../public/images/icons/home5_star.svg" alt="" />
							<img src="../../../../public/images/icons/home5_half_star.svg" alt="" />
						</div>
						<p className="text-xs text-[#223645]">4.9 out of 5</p>
					</div>
				</div>

				<div className="bg-[#223645] mt-[86px] pt-[70px] pb-[50px] px-5 rounded-lg flex flex-col items-center justify-center gap-6">
					<div className="xl:w-[997px] flex flex-wrap gap-8 justify-between">
						<div>
							<p className="pb-4 border-b border-[#51516F] text-white w-[105px] text-sm">Company</p>
							<div className="text-[#B6C1D1] mt-6 flex flex-col gap-6 text-sm">
								<Link to="">About us</Link>
								<Link to="">Contact us</Link>
								<Link to="">Careers</Link>
								<Link to="">Press</Link>
							</div>
						</div>
						<div>
							<p className="pb-4 border-b border-[#51516F] text-white w-[105px] text-sm">Product</p>
							<div className="text-[#B6C1D1] mt-6 flex flex-col gap-6 text-sm">
								<Link to="">Features</Link>
								<Link to="">Pricing</Link>
								<Link to="">News</Link>
								<Link to="">Help desk</Link>
								<Link to="">Support</Link>
							</div>
						</div>
						<div>
							<p className="pb-4 border-b border-[#51516F] text-white w-[105px] text-sm">Company</p>
							<div className="text-[#B6C1D1] mt-6 flex flex-col gap-6 text-sm">
								<Link to="">Digital Marketing</Link>
								<Link to="">Contact Writing</Link>
								<Link to="">SEO for Business</Link>
								<Link to="">UI Design</Link>
							</div>
						</div>
						<div>
							<p className="pb-4 border-b border-[#51516F] text-white w-[105px] text-sm">Newsletter</p>
							<div className="text-[#B6C1D1] mt-6 flex flex-col gap-6 text-sm">
								<p className="w-[186px]">Register now to Get Latest Uploaded on MA.</p>
							</div>
							<div
								className="bg-[#1E303D] rounded-md w-[221px] border border-[#52606A] h-[56px] px-4 flex items-center justify-between mt-10">
								<div className="flex items-center justify-between">
									<div className="w-[105px] overflow-hidden">
										<input className="text-sm text-[#9DA9B1] bg-transparent" type="text"
											placeholder="Your Email" />
									</div>
								</div>
								<div>
									<img src="../../../../public/images/icons/wpf_sent.svg" alt="" />
								</div>
							</div>
						</div>
					</div>
					<div
						className="flex items-center flex-wrap justify-between gap-5 pt-6 border-t border-[#595959] max-w-[957px] w-full px-5">
						<p className="text-[#7C8796] text-sm">Copyright@ 2023 Multipurpose Agency all right resurved</p>
						<div className="flex items-center gap-6">
							<p className="text-[#717C8B] text-sm">Follow on</p>
							<div className="flex items-center gap-4">
								<Link to=""><img src="../../../../public/images/icons/Facebook5.svg" alt="" /></Link>
								<Link to=""><img src="../../../../public/images/icons/twitter5.svg" alt="" /></Link>
								<Link to=""><img src="../../../../public/images/icons/linkedin5.svg" alt="" /></Link>
								<Link to=""><img src="../../../../public/images/icons/instagram5.svg" alt="" /></Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</footer>
	)
}

export default Footer_5;