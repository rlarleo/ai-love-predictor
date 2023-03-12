/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        PyeongChangPeace: 'PyeongChangPeace',
        PyeongChang: 'PyeongChang',
        'PyeongChangPeace-Bold': 'PyeongChangPeace-Bold',
        'PyeongChang-Bold': 'PyeongChang-Bold',
      },
      colors: {
        pink: { regular: '#FF6477' },
        green: { regular: '#089A83' },
        yellow: { regular: '#FEF01B' },
        gray: {
          dark: '#272526',
          regular: '#404040',
          light: '#494950',
        },
      },
    },
  },
  plugins: [],
};
