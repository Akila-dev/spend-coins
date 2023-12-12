import { Navbar } from "../components";

export const metadata = {
	title: "Login/Sign",
	description: "Buy and Sell Cryptos",
};

export default function RootLayout({ children }) {
	return (
		<div>
			<Navbar />
			<main>{children}</main>
		</div>
	);
}
