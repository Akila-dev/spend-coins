"use client";

import { Navbar, Notifications } from "/app/components";
import { useNotificationStore } from "/app/utils/store";

export default function RootLayout({ children }) {
	const showNotifications = useNotificationStore(
		(state) => state.notifications
	);

	return (
		<div>
			<Navbar />
			<div>
				{showNotifications ? (
					<div className="pt-[101px]">
						<Notifications />
					</div>
				) : (
					<main className="pt-[101px]">{children}</main>
				)}
			</div>
		</div>
	);
}
