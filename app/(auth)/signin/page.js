import Image from "next/image";
import Link from "next/link";

import googleIcon from "/public/icons/google.svg";
import appleIcon from "/public/icons/apple.svg";

export default function SignIn() {
	return (
		<main className="h-screen flex flex-col justify-center pt-[50px] pb-[150px]">
			<h1 className="text-center font-semibold text-2xl">SpendCoins</h1>
			<div className="mt-[30%]">
				<div className="flex flex-col gap-[2.5rem] items-center">
					<h4 className="text-base">Sign in with</h4>
					<Link href="/" className="brand-icon-btn">
						<Image src={googleIcon} width={15} height={15} alt="google" />
						Google
					</Link>
					<Link href="/" className="brand-icon-btn">
						<Image src={appleIcon} width={15} height={15} alt="google" /> Apple
					</Link>
				</div>
				<p className="text-center pt-4 text-sm">
					Already have an account?{" "}
					<Link href="/signup" className="text-[--brand]">
						Sign up
					</Link>
				</p>
			</div>
		</main>
	);
}
