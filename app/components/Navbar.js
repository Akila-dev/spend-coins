"use client";

import Link from "next/link";
import Image from "next/image";

import { IoMdNotificationsOutline, IoIosArrowDown } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import { PiGlobe } from "react-icons/pi";

import { useNetworkStore, useAccountStore } from "/app/utils/store";

import bnb from "/public/icons/bnb-b.svg";
import userImg from "/public/user1.jpg";

const Navbar = () => {
	const network = useNetworkStore((state) => state.network);
	const toggleShowNetworksPopup = useNetworkStore(
		(state) => state.toggleShowPopup
	);
	const toggleShowAccountListPopup = useAccountStore(
		(state) => state.toggleShowPopup
	);

	return (
		<nav className="h-[70px] fixed top-0 left-0 bg-[--bg1] w-full flex items-center shadow-[--shadow] shadow-lg">
			<div className="container flex justify-between items-center">
				<button
					type="button"
					onClick={toggleShowNetworksPopup}
					className="flex gap-2 items-center rounded-3xl bg-[--bg-lighter2] bg-[--brand px-3 py-2"
				>
					<div type="button" className="rounded-full">
						{network === null ? (
							<PiGlobe className="text-2xl" />
						) : (
							<Image src={bnb} height={22} width={22} alt="bnb" />
						)}
					</div>
					<IoIosArrowDown className="text-base" />
				</button>

				<button
					type="button"
					onClick={toggleShowAccountListPopup}
					className="flex gap-2 items-center rounded-3xl px-3 py-2"
				>
					<Image
						src={userImg}
						alt="user"
						width={30}
						height={30}
						className="rounded-full"
					/>
					<div type="button" className="text-md font-medium">
						Resonating...
					</div>
					<IoIosArrowDown className="text-base" />
				</button>

				<button type="button" onClick={toggleShowNetworksPopup} className="">
					<PiGlobe className="text-[1.6rem]" />
				</button>

				<button type="button" className="">
					<BsThreeDotsVertical className="text-[1.345rem]" />
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
