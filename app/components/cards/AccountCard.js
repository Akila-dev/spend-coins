import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";

const AccountCard = ({ networkImg, networkName, onClick }) => {
	return (
		<button
			className="w-full py-3 px-4 hover:bg-[--bg-lighter2] hover:border-l-2 border-[--brand] active:bg-[--bg-lighter2] active:border-l-2"
			onClick={onClick}
		>
			<div className="flex gap-4 items-start justify-between">
				<div className="flex gap-3 items-start text-left">
					<Image src={networkImg} width={30} height={30} alt={networkName} />
					<div className="w-full space-y-1">
						<h3>Resonating Marketing</h3>
						<p>0x56789...hb089</p>
						<span className="border border-[--lines] bg-[--bg1] py-1 px-2 rounded-[2rem] inline-block text-sm">
							imported
						</span>
					</div>
				</div>

				<div className="flex gap-3 items-start text-right">
					<div className="w-full space-y-1">
						<h3>0 BNB</h3>
						<p className="text-sm">0 BNB</p>
					</div>
					<button type="button" className="">
						<BsThreeDotsVertical className="text-[1.345rem]" />
					</button>
				</div>
			</div>
		</button>
	);
};

export default AccountCard;
