import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar_5 = () => {
	const location = useLocation();
	const mobileMenubarHandler = () => {
        const menubar = document.getElementById('homeMenubar');
        if (!menubar.classList.contains('left-0')) {
            menubar.classList.remove('-left-[1024px]');
            menubar.classList.add('left-0');
        }
        else {
            menubar.classList.remove('left-0');
            menubar.classList.add('-left-[1024px]');
        }
    }
	return (
		<nav className="mx-6 md:mx-[70px] xl:mx-[150px] py-[18px] flex items-center justify-between">
			{/* mobile menubar */}
			<ul id="homeMenubar"
				className="flex lg:hidden justify-center absolute top-14 -left-[1024px] duration-500 px-5 py-1 w-full items-center gap-4 md:gap-10 text-[14px] font-semibold text-[#223645]">
				<li>
					<div className="dropdown_parent">
						<label className="">
							<div className="flex items-center gap-1">
								<div className="">Home </div>
								<img className="p-2 cursor-pointer" src="../../../../public/images/icons/arrow_black_drop_down.svg"
									alt="" />
							</div>
						</label>
						<ul className="dropdown_content absolute z-40 menu rounded-box w-40 bg-white px-2">
							<li><Link to="/Home_1">Home 1</Link></li>
							<li><Link to="/Home_2">Home 2</Link></li>
							<li><Link to="/Home_3">Home 3</Link></li>
							<li><Link to="/Home_4">Home 4</Link></li>
							<li><Link to="/Home_5">Home 5</Link></li>
						</ul>
					</div>
				</li>
				<li>
					<div className="dropdown_parent">
						<label className="">
							<div className="flex items-center gap-1">
								<div className="">Pages </div>
								<img className="py-1 cursor-pointer" src="../../../../public/images/icons/arrow_black_drop_down.svg"
									alt="" />
							</div>
						</label>
						<ul className="dropdown_content absolute z-40 menu rounded-box w-40 bg-white px-2">
							<li><Link to="/Home_5/About_Us">About us</Link></li>
							<li><Link to="/Home_5/Services">Services</Link></li>
							<li><Link to="/Home_5/Popular_Services">Popular Services</Link></li>
							<li><Link to="/Home_5/Pricing_Plans">Pricing plans</Link></li>
							<li><Link to="/Home_5/Contact_Us">Contact Us</Link></li>
							<li><Link to="/Home_5/Blog">Blog</Link></li>
						</ul>
					</div>
				</li>
				<li>
					<div className="dropdown_parent">
						<label className="">
							<div className="flex items-center gap-1">
								<div className="">Components </div>
								<img className="p-2 cursor-pointer" src="../../../../public/images/icons/arrow_black_drop_down.svg"
									alt="" />
							</div>
						</label>
						<ul className="dropdown_content absolute z-40 menu rounded-box w-40 bg-white px-2">
							<li><Link>Components 1</Link></li>
							<li><Link>Components 2</Link></li>
						</ul>
					</div>
				</li>
				<li className="p-2"><Link to="">Support</Link></li>
			</ul>
			{/* end mobile menubar */}
			<div onClick={mobileMenubarHandler} className="lg:hidden cursor-pointer">
				<img src="../../../../public/images/icons/align-justify-dark.svg" alt="" />
			</div>
			<Link to={location.pathname == "/Home_5" ? '/' : '/Home_5'} className="flex items-center gap-1">
				<img className="w-[30px] h-[30px] md:h-auto md:w-auto" src="../../../../public/images/icons/Logo_5.svg" alt="" />
			</Link>
			<ul className="hidden lg:flex items-center gap-2 md:gap-6 text-[14px] font-semibold text-[#223645]">
				<li>
					<div className="dropdown_parent">
						<label className="">
							<div className="flex items-center gap-1">
								<div className="">Home </div>
								<img className="p-2 cursor-pointer" src="../../../../public/images/icons/arrow_black_drop_down.svg"
									alt="" />
							</div>
						</label>
						<ul className="dropdown_content absolute z-40 menu rounded-box w-40 bg-white px-2">
							<li><Link to="/Home_1">Home 1</Link></li>
							<li><Link to="/Home_2">Home 2</Link></li>
							<li><Link to="/Home_3">Home 3</Link></li>
							<li><Link to="/Home_4">Home 4</Link></li>
							<li><Link to="/Home_5">Home 5</Link></li>
						</ul>
					</div>
				</li>
				<li>
					<div className="dropdown_parent">
						<label className="">
							<div className="flex items-center gap-1">
								<div className="">Pages </div>
								<img className="py-1 cursor-pointer" src="../../../../public/images/icons/arrow_black_drop_down.svg"
									alt="" />
							</div>
						</label>
						<ul className="dropdown_content absolute z-40 menu rounded-box w-40 bg-white px-2">
							<li><Link to="/Home_5/About_Us">About us</Link></li>
							<li><Link to="/Home_5/Services">Services</Link></li>
							<li><Link to="/Home_5/Popular_Services">Popular Services</Link></li>
							<li><Link to="/Home_5/Pricing_Plans">Pricing plans</Link></li>
							<li><Link to="/Home_5/Contact_Us">Contact Us</Link></li>
							<li><Link to="/Home_5/Blog">Blog</Link></li>
						</ul>
					</div>
				</li>
				<li>
					<div className="dropdown_parent">
						<label className="">
							<div className="flex items-center gap-1">
								<div className="">Components </div>
								<img className="p-2 cursor-pointer" src="../../../../public/images/icons/arrow_black_drop_down.svg"
									alt="" />
							</div>
						</label>
						<ul className="dropdown_content absolute z-40 menu rounded-box w-40 bg-white px-2">
							<li><Link>Components 1</Link></li>
							<li><Link>Components 2</Link></li>
						</ul>
					</div>
				</li>
				<li className="p-2"><Link to="">Support</Link></li>
			</ul>
			<div>

				<button
					className="bg-transparent rounded-full text-[#223645] h-[30px] md:h-[48px] w-[102px] font-normal md:font-semibold text-xs md:text-sm">Log
					in</button>
				<button
					className="bg-[#223645] rounded-full text-white h-[30px] md:h-[48px] w-[102px] font-normal md:font-semibold text-xs md:text-sm">Sign
					up</button>
			</div>
		</nav>
	)
}

export default Navbar_5;