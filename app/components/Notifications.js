"use client";

import Image from "next/image";
import { NotificationCard } from "/app/components";

import bnb from "/public/icons/bnb.svg";

const notificationsData = [
	{
		title: "Suspicious Login Attempt",
		content:
			"We detected a login attempt from an unfamiliar device. If this wasn't you, secure your account now.",
		time: "2 hours ago",
		img: bnb,
	},
	{
		title: "Suspicious Login Attempt",
		content:
			"We detected a login attempt from an unfamiliar device. If this wasn't you, secure your account now.",
		time: "2 hours ago",
		img: bnb,
	},
	{
		title: "Suspicious Login Attempt",
		content:
			"We detected a login attempt from an unfamiliar device. If this wasn't you, secure your account now.",
		time: "May 5",
		img: bnb,
	},
];

const Notifications = () => {
	return (
		<section className="container">
			<h1>Notifications</h1>
			<div className="pt-5 space-y-4">
				{notificationsData.map((notification, index) => (
					<NotificationCard
						key={index}
						title={notification.title}
						content={notification.content}
						time={notification.time}
						img={notification.img}
					/>
				))}
			</div>
		</section>
	);
};

export default Notifications;
