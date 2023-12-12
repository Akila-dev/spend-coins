"use client";

import Link from "next/link";
import Image from "next/image";

import { useNotificationStore, useCoinStore } from "../utils/store";

import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { PiGlobe } from "react-icons/pi";

import bnb from "/public/icons/bnb-b.svg";

const Navbar = () => {
	const showNotifications = useNotificationStore(
		(state) => state.openNotifications
	);
	const newNotifications = useNotificationStore(
		(state) => state.newNotifications
	);
	// const resetNewNotifications = useNotificationStore(
	// 	(state) => state.resetNewNotifications
	// );

	const coin = useCoinStore((state) => state.coin);

	return (
		<nav className="pt-[45px] pb-[30px]">
			<div className="container flex justify-between items-center">
				<IoMenu className="text-3xl" />
				<h3>COINS</h3>
				<div className="flex items-center gap-2">
					{coin === null ? (
						<PiGlobe className="text-[1.65rem]" />
					) : (
						<Image src={bnb} height={25} width={25} alt="bnb" />
					)}
					<button
						type="button"
						onClick={showNotifications}
						className="w-[24px] h-[25px] relative"
					>
						<IoMdNotificationsOutline className="text-[1.65rem]" />
						{newNotifications && (
							<div className="w-[10px] h-[10px] rounded-full bg-[--red] absolute top-[5px] right-[-2px] border-2 border-[--bg1]"></div>
						)}
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
