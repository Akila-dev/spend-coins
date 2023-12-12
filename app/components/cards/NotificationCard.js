import Image from "next/image";

const NotificationCard = ({ title, content, time, img }) => {
	return (
		<div className="w-full flex gap-4 items-start">
			<Image src={img} width={28} height={28} alt={title} />
			<div>
				<div className="flex justify-between items-start gap-5">
					<p className="text-[--text2] text-sm">{title}</p>
					<p className="text-xs w-[100px] text-right">{time}</p>
				</div>
				<p className="text-xs">{content}</p>
			</div>
		</div>
	);
};

export default NotificationCard;
