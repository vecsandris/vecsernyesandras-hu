/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				white: '#ffffff',
				gray: '#6B6B6B',
				elegant: '#dc2626',
				black: '#000000',
				elegantGray: '#121212',
				red: '#DC2626',
				darkRed: '#781E1E',
				darkGray:'#272727'
			},
			fontFamily:{
				poppins: ['"Poppins"']
			}
		},
	},
	plugins: [],
}
