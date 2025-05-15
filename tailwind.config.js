module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	plugins: [require("@tailwindcss/line-clamp")],
	theme: {
	  extend: {
		fontFamily: {
		  sans: ['Inter', 'sans-serif'], // Add Inter as the default sans font
		},
	  },
	},
	plugins: [],
  };
  