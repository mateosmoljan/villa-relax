import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        poppins: ['poppins', 'sans-serif'], 'poppins-medium': ['poppins-medium', 'sans-serif'],
        'poppins-bold': ['poppins-bold', 'sans-serif'], 'poppins-black': ['poppins-black', 'sans-serif'],
        arbutus: ['arbutus', 'sans-serif'],
      },
      colors: {
        brown: '#755B3E',
      }
    },
  },
  plugins: [],
}
export default config
