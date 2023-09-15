/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
			},
			colors: {
				'nav': '#fdf9ee',
				'nav-dark': '#363636',
				'rice': '#fdf9ee',
				'rice-dark': '#14120d',
				'rice-tooltip': '#ede3c7',
				'rice-content': '#d6caa7',
				gold: {
					100: '#fdf9ee',
					200: '#786737',
					300: '#52400e',
					400: '#14120d'
				}
			},
		},
	},
	plugins: [],
	darkMode: ['class', '[data-theme="dark"]']
}
