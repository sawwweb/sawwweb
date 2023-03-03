/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'black-c': '#2A2B2A',
        'white-c': '#EFF8E2',
        'accent-1': '#8367C7',
        'accent-2': '#FF6B6C',
        'cold-gray': 'rgba(226, 233, 248, 0.5)',
      },
      fontFamily: {
        roboto: 'Roboto Mono',
        rubik: 'Rubik',
      },
      dropShadow: {
        'shadow-c': '0px 5px 5px #FF6B6C',
      },
      backgroundImage: {
        'gradient-bg':
          'linear-gradient(180deg, #8367C7 0%, rgba(42, 43, 42, 0) 100%)',
        // 'light-bg': 'linear-gradient(180deg, #8367C7 0%, #EFF8E2 100%)',
        'menu-light-bg':
          'linear-gradient(84.47deg, rgba(217, 217, 217, 0.2) 15.67%, rgba(131, 103, 199, 0.2) 70.71%), linear-gradient(255.65deg, rgba(236, 245, 225, 0.3) 28.44%, rgba(138, 112, 200, 0.3) 105.84%), linear-gradient(98.15deg, #E7E1F6 5.67%, rgba(231, 225, 246, 0) 103.56%)',
        'menu-dark-bg':
          'linear-gradient(342.05deg, rgba(255, 255, 255, 0.3) -2.66%, rgba(131, 103, 199, 0.3) 57.23%), linear-gradient(260.97deg, rgba(236, 245, 225, 0.2) 14.39%, rgba(138, 112, 200, 0.2) 89.09%), linear-gradient(98.15deg, #1E0A3E 5.67%, rgba(131, 103, 199, 0) 103.56%)',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
