import patternUrl from "/public/pattern.png";

export const metadata = {
	title: "Login/Sign",
	description: "Buy and Sell Cryptos",
};

export default function RootLayout({ children }) {
	return (
		<div className="w-full h-screen authBG relative">
			<div className="w-[100px] h-[100px] rounded-full particle1 absolute top-[30px] left-[30px]"></div>
			<div className="w-[40px] h-[40px] rounded-full particle2 absolute top-[130px] right-[70px]"></div>
			<div className="w-[15px] h-[15px] rounded-full particle3 absolute top-[155px] left-[150px]"></div>
			<div className="w-[11px] h-[11px] rounded-full particle3 absolute top-[28px] left-[130px]"></div>
			<div
				style={{ backgroundImage: `url(${patternUrl.src})` }}
				className="h-screen w-full bg-cover bg-center bg-fixed"
			>
				<main className="container">{children}</main>
			</div>
		</div>
	);
}
