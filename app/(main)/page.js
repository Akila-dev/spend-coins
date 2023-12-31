"use client";

import Image from "next/image";

import { PortfolioOverview, PortfolioTabs } from "/app/components";

export default function Home() {
	return (
		<main className="space-y-5">
			<PortfolioOverview />

			<div className="container">
				<PortfolioTabs />
			</div>
		</main>
	);
}
