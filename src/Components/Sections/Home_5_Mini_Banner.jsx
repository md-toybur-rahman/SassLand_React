const Home_5_Mini_Banner = (props) => {
	return (
		<section className="bg-[url('../../../public/images/home5_banner_bg2.png')] bg-cover h-[332px] flex items-center justify-center  mt-8 md:mt-5 lg:mt-0">
			<h1 className="font-semibold text-[24px] md:text-[36px] text-white">{props.title}</h1>
		</section>
	)
}

export default Home_5_Mini_Banner;