/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'media',
  theme: {
    fontFamily: {
      sans: 'Roboto, sans-serif',
    },
    extend: {},
  },
  plugins: [
    require('@catppuccin/tailwindcss')({
      prefix: 'ctp',
      defaultFlavour: 'latte',
    }),
  ],
};
