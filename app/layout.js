import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Spend Coins",
	description: "Buy and Sell Cryptos",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="md:hidden">{children}</div>
				<div className="hidden md:flex h-screen w-full items-center justify-center">
					<p className="text-center">Not yet available for large screens</p>
				</div>
			</body>
		</html>
	);
}
