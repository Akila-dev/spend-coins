"use client";

import React from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

import { useBalanceStore } from "/app/utils/store";

const PortfolioOverview = () => {
	const isvisible = useBalanceStore((state) => state.isvisible);
	const toggleIsVisible = useBalanceStore((state) => state.toggleIsVisible);

	return (
		<section className="container">
			<div className="pt-10 pb-5">
				<h4>Portfolio</h4>
				<div className="flex gap-2 items-center pt-2 pb-1">
					<div>
						{isvisible ? (
							<h2 className="text-3xl">$0.00</h2>
						) : (
							<h2 className="text-3xl">****</h2>
						)}
					</div>
					<button onClick={toggleIsVisible}>
						{isvisible ? (
							<IoEyeOutline className="text-[1.15rem]" />
						) : (
							<IoEyeOffOutline className="text-[1.15rem]" />
						)}
					</button>
				</div>
				{isvisible && (
					<div className="flex gap-2 items-center">
						<p className="text-[--green] text-xs">+$0.00</p>
						<p className="text-[--green] text-xs">(0.02%)</p>
					</div>
				)}
			</div>
		</section>
	);
};

export default PortfolioOverview;
