import { AccountCard } from "/app/components";
import { useAccountStore } from "/app/utils/store";
import { Formik, Form, Field } from "formik";

import { IoSearch, IoCloseOutline } from "react-icons/io5";
import { HiPlus } from "react-icons/hi";

import bnb from "/public/icons/bnb.svg";

const accountListData = [
	{ networkImg: bnb, networkName: "Ethereum" },
	{ networkImg: bnb, networkName: "BNB Chain" },
	{ networkImg: bnb, networkName: "Optimism" },
	{ networkImg: bnb, networkName: "Ethereum" },
	{ networkImg: bnb, networkName: "BNB Chain" },
	{ networkImg: bnb, networkName: "Optimism" },
	{ networkImg: bnb, networkName: "Ethereum" },
	{ networkImg: bnb, networkName: "BNB Chain" },
	{ networkImg: bnb, networkName: "Optimism" },
	{ networkImg: bnb, networkName: "Ethereum" },
	{ networkImg: bnb, networkName: "BNB Chain" },
	{ networkImg: bnb, networkName: "Optimism" },
];

const SelectAccount = () => {
	const closeShowPopup = useAccountStore((state) => state.closeShowPopup);

	const selectNetwork = () => {
		closeShowPopup();
	};

	return (
		<div className="w-full h-full bg-[--bg1] rounded-xl flex flex-col shadow-xl">
			{/* Header */}
			<div className="p-4 py-6">
				<div className="relative pb-8">
					<h2 className="text-center text-md w-full pt-1 font-medium">
						Select Account
					</h2>
					<IoCloseOutline
						className="absolute top-0 right-0 text-[2rem]"
						onClick={closeShowPopup}
					/>
				</div>
				<Formik
					initialValues={{ search: "" }}
					onSubmit={(values, actions) => {
						setTimeout(() => {
							alert(JSON.stringify(values, null, 2));
							actions.setSubmitting(false);
						}, 1000);
					}}
				>
					<Form className="space-y-7">
						<div>
							<div className="input-container">
								<IoSearch className="text-2xl" />

								<Field name="search" placeholder="Search" className="input" />
							</div>
						</div>
					</Form>
				</Formik>
			</div>

			{/* Networks */}
			<div className="overflow-y-scroll">
				{accountListData.map((network, index) => (
					<AccountCard
						key={index}
						networkImg={network.networkImg}
						networkName={network.networkName}
						onClick={selectNetwork}
					/>
				))}
			</div>

			<div className="py-5 px-4">
				<button type="submit" className="outline-btn gap-1">
					<HiPlus className="text-lg" /> Add account or hardware wallet
				</button>
			</div>
		</div>
	);
};

export default SelectAccount;
