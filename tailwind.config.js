/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      DEFAULT: '1rem',
      xxs: '0.875rem', // 14px
      xs: '1rem', // 16px
      sm: '1.25rem', // 20px
      lg: '1.625rem', // 26px
      xlg: '1.8753rem', // 30px
      xxlg: '2.5rem', // 40px
    },
    screens: {
      xxs: '320px',
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      general: '#2C2C2C',
      dark: '#212121',
      white: '#FFFFFF',
      light: '#F8F8F8',
      grey: '#6C6767',
    },
    fontFamily: {
      steppe: ['Steppe', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
