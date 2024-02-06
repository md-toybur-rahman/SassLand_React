
const Verticle_Carousel_Card = () => {
	return (
		<div className="p-6 rounded-2xl flex gap-[17px] max-w-[382px] love_us_card">
			<div
				className="profile2 min-w-[50px] md:min-w-[72px] h-[50px] md:h-[72px] rounded-full bg-cover">
			</div>
			<div className="max-w-[245px]">
				<div className="flex items-center gap-1">
					<img className="w-4 md:w-auto" src="../../../../public/images/icons/star_dark.svg" alt="" />
					<img className="w-4 md:w-auto" src="../../../../public/images/icons/star_dark.svg" alt="" />
					<img className="w-4 md:w-auto" src="../../../../public/images/icons/star_dark.svg" alt="" />
					<img className="w-4 md:w-auto" src="../../../../public/images/icons/star_dark.svg" alt="" />
					<img className="w-4 md:w-auto" src="../../../../public/images/icons/star_light.svg" alt="" />
				</div>
				<div>
					<p className="text-[#676769] text-xs md:text-sm py-2">“The platform has been able to
						accommodate
						our
						growth and
						a variety of event types throughout the year.”</p>
					<p className="text-[11px] text-[#879295]">Hunter A., Head of Growth</p>
				</div>
			</div>
		</div>
	)
}

export default Verticle_Carousel_Card;