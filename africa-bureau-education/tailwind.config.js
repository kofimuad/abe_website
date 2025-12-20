export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'dark-gradient': 'linear-gradient(135deg, #1f1f1f 0%, #2a2a2a 50%, #1a1a1a 100%)',
        'dark-gradient-alt': 'linear-gradient(180deg, #2a2a2a 0%, #1f1f1f 100%)',
      },
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#145231',
        },
        secondary: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#2a2a2a',
          900: '#1f1f1f',
          950: '#151515',
        },
      },
    },
  },
  plugins: [],
}