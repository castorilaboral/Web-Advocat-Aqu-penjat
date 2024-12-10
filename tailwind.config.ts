/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FCF7F7',
          100: '#F5E6E6',
          200: '#E6CCCC',
          300: '#D6B3B3',
          400: '#C79999',
          500: '#B88080',
          600: '#A86666',
          700: '#994D4D',
          800: '#8A3333',
          900: '#7B1A1A'
        },
        secondary: {
          50: '#F8F8F8',
          100: '#F0F0F0',
          200: '#E6E6E6',
          300: '#D1D1D1',
          400: '#ADADAD',
          500: '#999999',
          600: '#666666',
          700: '#4D4D4D',
          800: '#333333',
          900: '#1A1A1A'
        },
        accent: {
          50: '#F9F6F6',
          100: '#E8D8D8',
          200: '#D6BBBB',
          300: '#C49E9E',
          400: '#B28181',
          500: '#A06464',
          600: '#8E4747',
          700: '#7C2A2A',
          800: '#6A0D0D',
          900: '#580000'
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-cal-sans)'],
      },
      typography: {
        DEFAULT: {
          css: {
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
