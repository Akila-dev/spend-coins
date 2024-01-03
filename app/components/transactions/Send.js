"use client";

import Image from "next/image";
import { useState } from "react";
import { Formik, Form, Field } from "formik";
import { IoChevronDown } from "react-icons/io5";
// import {NetworkCard} from "/"

import bnb from "/public/icons/bnb.svg";

const assetsData = [
	{
		id: "4Y5YYY4TTRGFV7",
		img: bnb,
	},
	{
		id: "4Y5YYY4T5RGFV7",
		img: bnb,
	},
	{
		id: "4Y5YYY44TRGFV7",
		img: bnb,
	},
];

const Send = () => {
	const [setselectedAsset, setSetselectedAsset] = useState("");

	return (
		<div>
			<Formik
				initialValues={{ address: "", asset: setselectedAsset, amount: "" }}
				onSubmit={(values, actions) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
						actions.setSubmitting(false);
					}, 1000);
				}}
			>
				<Form className="space-y-7 pt-2">
					<div>
						<p className="label">Send to</p>
						<Field
							name="address"
							placeholder="Enter Address"
							className="input-container"
						/>
					</div>

					<div>
						<p className="label">Asset</p>
						<button type="button" className="input-container select">
							Select Asset
							<IoChevronDown />
						</button>
					</div>

					<div>
						<p className="label">Amount</p>
						<div className="input-container">
							<Field name="amount" placeholder="0.00" className="input" />
							<div>
								<p>≈</p>
								<p>0</p>
							</div>
						</div>
					</div>

					<div className="pt-3">
						<button type="submit" className="brand-btn">
							Send
						</button>
					</div>
				</Form>
			</Formik>
		</div>
	);
};

export default Send;
