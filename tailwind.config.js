

// tailwind.config.js
export default  {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}"
  ],
  theme: {
    extend: {
      fontFamily: {
        luxury: ['LuxuryHeading', 'sans-serif'],
        subheading: ['SubHeading', 'sans-serif'],
        goldmanBold: ['goldmanBold', 'sans-serif'],
        goldmanRegular: ['goldmanRegular', 'sans-serif'],
        lobster: ['lobster_regular', 'cursive'],
      },
    },
  },
};

