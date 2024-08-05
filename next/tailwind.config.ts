import plugin from 'tailwindcss/plugin'
import type { Config } from 'tailwindcss'

const config: Config = {
	content: ['./src/{app,ui}/**/*.{ts,tsx}'],
	theme: {
		extend: {
			cursor: {
				none: 'none',
			},
			colors: {
				ink: '#000',
				canvas: '#fff',

				accent: '#000',
			},
			fontFamily: {
				typekit: ['Kohinoor-Demi', 'sans-serif'],
			},
			maxHeight: {
				fold: 'calc(100svh - var(--header-height))',
			},
		},
	},
	plugins: [
		plugin(function ({ addVariant }) {
			addVariant('header-open', 'body:has(#header-open:checked) &')
			addVariant('header-closed', 'body:has(#header-open:not(:checked)) &')
		}),
		plugin(function ({ addUtilities }) {
			const newUtilities = {
				'.cursor-none': {
					cursor: 'none',
				},
			}
			addUtilities(newUtilities)
		}),
	],
	safelist: [{ pattern: /action.*/ }, 'ghost'],
}

export default config
