/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        premiumBlack: '#09090B',
        olive: '#7A9E4B',
      },
      boxShadow: {
        premium:
          '0 20px 80px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.06)',
        glow: '0 0 45px rgba(122, 158, 75, 0.3)',
      },
      backgroundImage: {
        'premium-radial':
          'radial-gradient(circle at top, rgba(122, 158, 75, 0.16), transparent 34%), radial-gradient(circle at bottom right, rgba(255, 255, 255, 0.05), transparent 28%)',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};