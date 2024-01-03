import Image from "next/image";

const NetworkCard = ({ networkImg, networkName, onClick }) => {
	return (
		<button
			className="w-full h-[60px] px-4 hover:bg-[--bg-lighter2] hover:border-l-2 border-[--brand] active:bg-[--bg-lighter2] active:border-l-2"
			onClick={onClick}
		>
			<div className="flex gap-4 items-center">
				<Image src={networkImg} width={30} height={30} alt={networkName} />
				<p className="text-[--text2] font-medium tracking-wider">
					{networkName}
				</p>
			</div>
		</button>
	);
};

export default NetworkCard;
