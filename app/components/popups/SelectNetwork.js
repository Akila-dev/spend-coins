import { NetworkCard } from "/app/components";
import { useNetworkStore } from "/app/utils/store";
import { Formik, Form, Field } from "formik";
import { IoSearch, IoCloseOutline } from "react-icons/io5";

import bnb from "/public/icons/bnb.svg";

const networkListData = [
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

const SelectNetwork = () => {
	const changeNetwork = useNetworkStore((state) => state.changeNetwork);
	const closeShowPopup = useNetworkStore((state) => state.closeShowPopup);

	const selectNetwork = () => {
		changeNetwork();
		closeShowPopup();
	};

	return (
		<div className="w-full h-full bg-[--bg1] rounded-xl flex flex-col shadow-xl">
			{/* Header */}
			<div className="p-4 py-6">
				<div className="relative pb-8">
					<h2 className="text-center text-md w-full pt-1 font-medium">
						Select a Network
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
				{networkListData.map((network, index) => (
					<NetworkCard
						key={index}
						networkImg={network.networkImg}
						networkName={network.networkName}
						onClick={selectNetwork}
					/>
				))}
			</div>
		</div>
	);
};

export default SelectNetwork;
