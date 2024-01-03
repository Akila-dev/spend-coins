"use client";

import { useState } from "react";
import { TokenCard, TransactionCard } from "/app/components";

import bnb from "/public/icons/bnb.svg";

const tokensData = [
	{
		coin: "BNB",
		coinImage: bnb,
		coinName: "Binance coin",
		amount: "0.25 BNB",
		conversion: "$0.5",
	},
	{
		coin: "BNB",
		coinImage: bnb,
		coinName: "Binance coin",
		amount: "0.25 BNB",
		conversion: "$0.5",
	},
	{
		coin: "BNB",
		coinImage: bnb,
		coinName: "Binance coin",
		amount: "0.25 BNB",
		conversion: "$0.5",
	},
];

const transactionsData = [
	{
		id: "4Y5YYY4TTRGFV7",
		coin: "BNB",
		coinImage: bnb,
		type: "debit",
		amount: "$0.5",
		time: "9:50 am",
	},
	{
		id: "4Y5YYY4GTRGFV7",
		coin: "BNB",
		coinImage: bnb,
		type: "credit",
		amount: "$0.5",
		time: "9:50 am",
	},
	{
		id: "4Y5YYY5TTRGFV7",
		coin: "BNB",
		coinImage: bnb,
		type: "debit",
		amount: "$0.5",
		time: "9:50 am",
	},
];

const PortfolioTabs = () => {
	const [activeTab, setActiveTab] = useState(0);
	const tabList = ["Token", "NFTs", "Transaction"];
	return (
		<div>
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
						{tokensData.map((token, index) => (
							<TokenCard
								key={index}
								coin={token.coin}
								coinImage={token.coinImage}
								coinName={token.coinName}
								amount={token.amount}
								conversion={token.conversion}
							/>
						))}
					</div>
				) : activeTab === 1 ? (
					<div className="space-y-5 pt-6">
						{tokensData.map((token, index) => (
							<TokenCard
								key={index}
								coin={token.coin}
								coinImage={token.coinImage}
								coinName={token.coinName}
								amount={token.amount}
								conversion={token.conversion}
							/>
						))}
					</div>
				) : (
					<div className="space-y-5 pt-6">
						{transactionsData.map((transaction, index) => (
							<TransactionCard
								key={index}
								id={transaction.id}
								coin={transaction.coin}
								coinImage={transaction.coinImage}
								type={transaction.type}
								amount={transaction.amount}
								time={transaction.time}
							/>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default PortfolioTabs;
