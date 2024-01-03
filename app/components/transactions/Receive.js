"use client";

import Image from "next/image";
import { useState } from "react";
import { Formik, Form, Field } from "formik";
import { IoChevronDown } from "react-icons/io5";

import qr from "/public/qr.svg";
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

const Receive = () => {
	const [setselectedAsset, setSetselectedAsset] = useState("");

	return (
		<div>
			<Formik
				initialValues={{ asset: setselectedAsset }}
				onSubmit={(values, actions) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
						actions.setSubmitting(false);
					}, 1000);
				}}
			>
				<Form className="space-y-7 pt-2">
					<div>
						<p className="label">Asset</p>
						<button type="button" className="input-container select">
							Select Asset
							<IoChevronDown />
						</button>
					</div>

					<div className="py-3 w-full flex justify-center">
						<Image src={qr} alt="qr code" height={200} width={200} />
					</div>

					<div className="pt-3">
						<button type="submit" className="brand-btn">
							Copy Address
						</button>
					</div>
				</Form>
			</Formik>
		</div>
	);
};

export default Receive;
