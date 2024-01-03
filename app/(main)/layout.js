"use client";

import { Navbar, SelectNetwork, SelectAccount } from "/app/components";
import { useNetworkStore, useAccountStore } from "/app/utils/store";

export default function RootLayout({ children }) {
	const showNetworkPopup = useNetworkStore((state) => state.showPopup);
	const showAccountPopup = useAccountStore((state) => state.showPopup);

	return (
		<div>
			<Navbar />
			<div>
				<main className="pt-[70px]">{children}</main>
			</div>
			{showNetworkPopup && (
				<div className="fixed top-0 left-0 w-full h-screen p-5 backdrop-blur-md bg-[#0a0a0aaa]">
					<SelectNetwork />
				</div>
			)}
			{showAccountPopup && (
				<div className="fixed top-0 left-0 w-full h-screen p-5 backdrop-blur-md bg-[#0a0a0aaa]">
					<SelectAccount />
				</div>
			)}
		</div>
	);
}
