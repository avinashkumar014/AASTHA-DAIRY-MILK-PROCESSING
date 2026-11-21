/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#174D35',
        leaf: '#3A8D55',
        sage: '#E8F2E9',
        cream: '#FAF9F2',
        gold: '#D6B66B',
        ink: '#252B27',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(23, 77, 53, 0.10)',
        card: '0 12px 35px rgba(37, 43, 39, 0.08)',
      },
    },
  },
  plugins: [],
}
