import useTitle from "../../../Custom_Hooks/useTitle";
import Home_5_Mini_Banner from "../../Sections/Home_5_Mini_Banner";


const Contact_Us_5 = () => {
    useTitle('Contact Us');

	return (
		<div>
			<Home_5_Mini_Banner title="Contact Us"></Home_5_Mini_Banner>
			<section className="max-w-[1141px] mx-auto overflow-hidden md:overflow-visible mt-[120px] flex flex-col xl:flex-row justify-between items-center gap-20 xl:gap-7 px-5 sm:px-0">
				<div>
					<div>
						<h5 className="text-[#FF6036] font-semibold text-sm md:text-base mb-4">Get in Touch</h5>
						<h1 className="font-medium text-[24px] md:text-[36px] text-[#676769] max-w-[291px]">Dont Heisted To contact
							us</h1>
						<p className="mt-11 font-medium text-[#676769] text-base max-w-[461px]">We partner closely with the most
							progressive companies in the world to improve their customer support operations. As consumers, we
							all have our own version of that one call to customer support.</p>
					</div>
					<div className="max-w-[560px] mt-11 flex flex-wrap gap-5 items-center justify-between">
						<div>
							<h1 className="text-[#454545] text-[20px] font-medium mb-5">Call us</h1>
							<p className="text-[#676769] text-base mb-2">+1-940-394-2948</p>
							<p className="text-[#676769] text-base">+1-389-385-3807</p>
						</div>
						<div>
							<h1 className="text-[#454545] text-[20px] font-medium mb-5">Email us</h1>
							<p className="text-[#676769] text-base mb-2">support@grayic.com</p>
							<p className="text-[#676769] text-base">contact@grayic.com</p>
						</div>
						<div>
							<h1 className="text-[#454545] text-[20px] font-medium mb-5">Visit us</h1>
							<p className="text-[#676769] text-base mb-2">34 Madison Street,NY,</p>
							<p className="text-[#676769] text-base">USA 10005</p>
						</div>
					</div>
					<div className="mt-[50px]">
						<img src="../../../../public/images/contact_us_mini.png" alt="" />
					</div>
				</div>
				<div className="w-full sm:w-[508px]">
					<form className="rounded-2xl px-2 md:px-6 pt-6 pb-[32px] bg-[#F6F3EE]">
						<div className="flex flex-col gap-[11px]">
							<label>
								<span className="text-base font-medium text-[#2C2003]">First & Last Name</span>
							</label>
							<div className="border border-[#CED2DA] rounded-lg px-3 py-4 bg-white">
								<input className="outline-none" type="text" placeholder="First & Last Name" />
							</div>
						</div>
						<div className="flex flex-col gap-[11px] mt-[11px]">
							<label>
								<span className="text-base font-medium text-[#2C2003]">Email</span>
							</label>
							<div className="border border-[#CED2DA] rounded-lg px-3 py-4 bg-white">
								<input className="outline-none" type="email" placeholder="i.e. jonhn@tgmail.com" />
							</div>
						</div>
						<div className="flex flex-col gap-[11px] mt-[11px]">
							<label>
								<span className="text-base font-medium text-[#2C2003]">Password</span>
							</label>
							<div className="border border-[#CED2DA] rounded-lg px-3 py-4 bg-white">
								<input className="outline-none" type="password" placeholder="Your Password" />
							</div>
						</div>
						<div className="flex flex-col gap-[11px] mt-[11px]">
							<label>
								<span className="text-base font-medium text-[#2C2003]">Confirm Password</span>
							</label>
							<div className="border border-[#CED2DA] rounded-lg px-3 py-4 bg-white">
								<input className="outline-none" type="password" placeholder="Confirm Your Password" />
							</div>
						</div>
						<div className="mt-[15px] flex items-center gap-[18px]">
							<input type="checkbox" id="" name="remember" value="remember" />
							<label for="remember"><span className="text-sm text-[#2C2003] font-medium">I agree to the Terms & conditions</span></label>
						</div>

						<button className="bg-[#FF6036] w-[185px] h-[56px] text-white text-base font-semibold rounded-lg mt-8">Create an account</button>
					</form>
					<p className="text-sm text-[#B9B5AC] font-medium mt-4 text-center">Already have an account? <a
						className="font-semibold text-[#FF6036]" href="Sign_In.html">Sign in now</a></p>
				</div>
			</section>

			<section className="bg-[url('../../../../public/images/contact_map.png')] bg-cover w-full h-[758px] mt-[150px]">
			</section>
		</div>
	)
}

export default Contact_Us_5;