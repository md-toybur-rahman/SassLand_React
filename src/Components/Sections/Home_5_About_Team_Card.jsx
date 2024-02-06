

const Home_5_About_Team_Card = (props) => {
	return (
		<div className="w-[227px] h-[305px] px-4 py-7 bg-white">
			<div>
				<h3 className="text-[#303030] text-base font-semibold">{props.name}</h3>
				<h3 className="text-[#707070] text-sm font-semibold">{props.designation}</h3>
				<div className="mt-3">
					<img src={`../../../public/images/${props.image}`} alt="" />
				</div>
				<div className="flex items-center justify-center -mt-4">
					<img src="../../../public/images/icons/carbon_add-filled.svg" alt="" />
				</div>
			</div>
		</div>
	)
}

export default Home_5_About_Team_Card;