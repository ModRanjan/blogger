/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './design-system/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontSize: {
      xs: ['12px', '20px'],
      sm: ['14px', '22px'],
      base: ['16px', '26px'],
      lg: ['18px', '28px'],
      xl: ['24px', '36px'],
      '2xl': ['32px', '48px'],
      '3xl': ['36px', 1],
      '4xl': ['48px', 1],
      '5xl': ['60px', 1],
      '6xl': ['72px', 1],
      '7xl': ['96px', 1],
      '8xl': ['128px', 1],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
