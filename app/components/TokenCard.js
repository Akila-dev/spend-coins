import Image from "next/image";

const TokenCard = ({ coin, coinImage, coinName, amount, conversion }) => {
	return (
		<div className="flex gap-5 w-full items-center">
			<div className="w-full flex gap-4 items-start">
				<Image src={coinImage} width={28} height={28} alt={coin} />
				<div>
					<p className="text-[--text2]">{coin}</p>
					<p className="text-xs">{coinName}</p>
				</div>
			</div>
			<div className="w-[150px] text-right">
				<p className="text-[--text2]">{amount}</p>
				<p className="text-xs">≈ {conversion}</p>
			</div>
		</div>
	);
};

export default TokenCard;
