import { Link } from "react-router-dom";

const Home5_Blog_Category = () => {
	return (
		<section className="bg-[#FDFCFA] rounded-xl px-[29px] py-[46px]">
			<div className="lg:w-[330px] max-w-[330px]">
				<div
					className="max-w-[320px] h-10 border border-[#CED2DA] rounded-lg flex items-center gap-1 px-3 py-2">
					<img src="../../../public/images/icons/Search-home2-blog.svg" alt="" />
					<input className="outline-none flex-grow bg-transparent" type="text" placeholder="Search" />
				</div>
				<div className="mt-5">
					<h1 className="text-[24px] font-semibold text-[#2C2003]">Blog categories</h1>
					<hr className="mt-[20px] max-w-[311px] border-t border-[#ECE8DF]" />
					<div className="mt-[22px] max-w-[300px]">
						<div>
							<Link to="/Home_5/Blog"  className="text-[#676769] text-sm">Marketing Strategies & Innovations (05)</Link>
							<hr className="mt-2 border-t border-[#ECE8DF]" />
						</div>
						<div className="mt-2">
							<Link to="/Home_5/Blog"  className="text-[#676769] text-sm">Marketing Strategies & Innovations (05)</Link>
							<hr className="mt-2 border-t border-[#ECE8DF]" />
						</div>
						<div className="mt-2">
							<Link to="/Home_5/Blog"  className="text-[#676769] text-sm">Marketing Strategies & Innovations (05)</Link>
							<hr className="mt-2 border-t border-[#ECE8DF]" />
						</div>
						<div className="mt-2">
							<Link to="/Home_5/Blog"  className="text-[#676769] text-sm">Marketing Strategies & Innovations (05)</Link>
							<hr className="mt-2 border-t border-[#ECE8DF]" />
						</div>
						<div className="mt-2">
							<Link to="/Home_5/Blog"  className="text-[#676769] text-sm">Marketing Strategies & Innovations (05)</Link>
							<hr className="mt-2 border-t border-[#ECE8DF]" />
						</div>

					</div>
				</div>
				<div className="mt-[44px]">
					<h1 className="text-[24px] font-semibold text-[#2C2003]">Recent posts</h1>
					<hr className="mt-[20px] max-w-[311px] border-t border-[#ECE8DF]" />
					<div className="mt-[22px] max-w-[319px]">
						<Link to="/Home_5/Blog" >
							<p className="text-[#676769] text-base">Don’t Count on Freeto Win You Customers</p>
							<p className="text-[#B1B1B1] text-sm">July 02, 2021</p>
							<hr className="mt-2 border-t border-[#ECE8DF]" />
						</Link>
						<Link to="/Home_5/Blog"  className="mt-2">
							<p className="text-[#676769] text-base">Don’t Count on Freeto Win You Customers</p>
							<p className="text-[#B1B1B1] text-sm">July 02, 2021</p>
							<hr className="mt-2 border-t border-[#ECE8DF]" />
						</Link>
						<Link to="/Home_5/Blog"  className="mt-2">
							<p className="text-[#676769] text-base">Don’t Count on Freeto Win You Customers</p>
							<p className="text-[#B1B1B1] text-sm">July 02, 2021</p>
							<hr className="mt-2 border-t border-[#ECE8DF]" />
						</Link>
						<Link to="/Home_5/Blog"  className="mt-2">
							<p className="text-[#676769] text-base">Don’t Count on Freeto Win You Customers</p>
							<p className="text-[#B1B1B1] text-sm">July 02, 2021</p>
							<hr className="mt-2 border-t border-[#ECE8DF]" />
						</Link>
						<Link to="/Home_5/Blog"  className="mt-2">
							<p className="text-[#676769] text-base">Don’t Count on Freeto Win You Customers</p>
							<p className="text-[#B1B1B1] text-sm">July 02, 2021</p>
							<hr className="mt-2 border-t border-[#ECE8DF]" />
						</Link>
					</div>
				</div>
				<div className="mt-[52px]">
					<h1 className="text-[24px] font-semibold text-[#2C2003]">Tags</h1>
					<hr className="mt-[20px] max-w-[311px] border-t border-[#ECE8DF]" />
					<div className="mt-[20px] max-w-[286px] grid grid-cols-2 gap-x-4 gap-y-3">
						<Link to="/Home_5/Blog" ><button
							className="w-[135px] h-[40px] text-sm text-[#2C2003] border border-[#ECE8DF] rounded-lg">Digital
							Marketing</button></Link>
						<Link to="/Home_5/Blog" ><button
							className="w-[135px] h-[40px] text-sm text-[#2C2003] border border-[#ECE8DF] rounded-lg">Digital
							Marketing</button></Link>
						<Link to="/Home_5/Blog" ><button
							className="w-[135px] h-[40px] text-sm text-[#2C2003] border border-[#ECE8DF] rounded-lg">Digital
							Marketing</button></Link>
						<Link to="/Home_5/Blog" ><button
							className="w-[135px] h-[40px] text-sm text-[#2C2003] border border-[#ECE8DF] rounded-lg">Digital
							Marketing</button></Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Home5_Blog_Category;