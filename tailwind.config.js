/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			fontSize: {
				xs: "3.4vw",
				sm: "3.5vw",
				base: "4vw",
				md: "4.3vw",
				lg: "4.8vw",
				xl: "1.25rem",
				"2xl": "1.463rem",
				"3xl": "1.5rem",
				"4xl": "2.341rem",
				"5xl": "3.052rem",
			},
		},
	},
	plugins: [],
};
