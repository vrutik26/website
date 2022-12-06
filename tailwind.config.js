/** @type {import('tailwindcss').Config} */
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    keyframes: {
      'fade-in-down': {
        '0%': {
          opacity: '0',
          transform: 'translateY(-10px)'
        },
        '100%': {
          opacity: '1',
          transform: 'translateY(0)'
        },
      }
    },
    animation: {
      'fade-in-down': 'fade-in-down 4s ease-out'
    }
  },
};
export const plugins = [];

