import Image from "next/image";

import { PortfolioOverview, TabsBlock } from "../components";

export default function Home() {
	return (
		<main className="space-y-8">
			<PortfolioOverview />

			<div className="container">
				<TabsBlock />
			</div>
		</main>
	);
}
