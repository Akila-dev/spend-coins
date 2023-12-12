import Image from "next/image";

const TransactionCard = ({ id, coin, coinImage, type, amount, time }) => {
	return (
		<div className="flex gap-5 w-full items-center">
			<div className="w-[70%] flex gap-4 items-start">
				<Image src={coinImage} width={28} height={28} alt={coin} />
				<div>
					<p className="text-[--text2] whitespace-nowrap">{id}</p>
					<p className="text-xs">{coin}</p>
				</div>
			</div>
			<div className="w-[30%] text-right">
				<p
					className={`${type === "debit" ? "text-[--red]" : "text-[--green]"}`}
				>
					<span>{type === "debit" ? "-" : "+"}</span>
					{amount}
				</p>
				<p className="text-xs">{time}</p>
			</div>
		</div>
	);
};

export default TransactionCard;
