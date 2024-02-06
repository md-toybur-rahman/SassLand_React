import React from 'react';

const Home_5_Services_Carousel = () => {
	return (
		<div className="flex flex-col md:flex-row md:items-center gap-6 w-[235px] md:w-[523px] bg-white rounded-2xl blog-card">
			<div className="w-[235px]:h-full rounded-xl overflow-hidden">
				<img className="w-full h-full" src="../../../public/images/Home5_Case_studies_1.png" alt="" />
			</div>
			<div className="max-w-[226px] p-3 md:p-0">
				<div>
					<h1 className="font-semibold text-[17.57px] leading-[26.4px]">With lots of unique blocks,
						you
						can easily build.</h1>
					<p className="mt-[17px] text-[11.71px] leading-[17.6px] text-[#949494]">With lots of unique
						blocks, you can easily build a page without .</p>
					<div className="flex items-center gap-2 mt-[30px]">
						<button
							className="text-[#768494] text-[10.25px] px-3 py-[2px] border border-[#C1C1C1] rounded-sm">Software</button>
						<button
							className="text-[#768494] text-[10.25px] px-3 py-[2px] border border-[#C1C1C1] rounded-sm">Sass</button>
					</div>
					<div className="pt-[18px] mt-[18.3px] border-t border-[#676769] max-w-[215px]">
						<p className="text-[10.25px] font-semibold leading-[17.6px] text-[#949494]">
							Client name</p>
						<h5 className="text-[11.71px] text-[#505050] font-semibold mt-1">Hardlay Khan</h5>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home_5_Services_Carousel;