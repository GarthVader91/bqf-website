const { default: daisyui } = require("daisyui");

module.exports = {
	content: ["./**/*.html"],
	theme: {
		container: {
			center: true,
		},
		extend: {
			colors: {},
		},
	},
	daisyui: {
		themes: [
			"light",
			"dark",
			"cupcake",
			"bumblebee",
			"emerald",
			"corporate",
			"synthwave",
			"retro",
			"cyberpunk",
			"valentine",
			"halloween",
			"garden",
			"forest",
			"aqua",
			"lofi",
			"pastel",
			"fantasy",
			"wireframe",
			"black",
			"luxury",
			"dracula",
			"cmyk",
			"autumn",
			"business",
			"acid",
			"lemonade",
			"night",
			"coffee",
			"winter",
			"dim",
			"nord",
			"sunset",
		],
	},
	variants: {},
	plugins: [
    require("@tailwindcss/typography"),
    require('daisyui')
],
}
