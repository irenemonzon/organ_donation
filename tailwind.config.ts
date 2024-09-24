import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme'; // Importar la configuración por defecto

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'navbar-pink': '#AD0779',
        'navbar-blue': '#24465E',
        'green-line': '#2D572C',
        'skeleton-light': '#f0f0f0',
        'skeleton-dark': '#e0e0e0',
      },
      fontFamily: {
        sans: ['Montserrat', 'Arial', 'sans-serif'],
        Arvo: ['Arvo', 'Arial', 'sans-serif'],
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '50%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      animation: {
        shimmer: 'shimmer 3s infinite',
      },
      backgroundImage: {
        'skeleton-gradient': 'linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%)',
      },
    },
  },
  plugins: [],
};

export default config;
