"use client";

import { useState } from "react";
import Image from "next/image";
import { Send, Receive } from "/app/components";

const Transaction = () => {
	const [activeTab, setActiveTab] = useState(0);
	const tabList = ["Send", "Receive"];

	return (
		<section className="container pt-8">
			<div className="flex items-start">
				{tabList.map((tab, index) => (
					<button
						key={index}
						type="button"
						className={`tab ${activeTab === index && "tab-active"}`}
						onClick={() => setActiveTab(index)}
					>
						{tab}
					</button>
				))}
			</div>

			<div>
				{activeTab === 0 ? (
					<div className="space-y-5 pt-6">
						<Send />
					</div>
				) : (
					<div className="space-y-5 pt-6">
						<Receive />
					</div>
				)}
			</div>
		</section>
	);
};

export default Transaction;
