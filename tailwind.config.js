/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  theme: {
    container: {
      center: true, // Center the container
      padding: '20px', // For padding around the container
      screens: {
        lg: '1140px', // Adjust as needed for desktop views, this can change based on your Figma setup
        xl: '1440px',
        '2xl': '1440px', // To keep it the same for larger screens
      },
    },
    screens: {
      'xs': '375px',
      ...defaultTheme.screens,
      '3xl': '1600px',
      '4xl': '1920px',
    },
    extend: {
      gridTemplateColumns: {
        // Define an 18-column grid
        '18': 'repeat(18, minmax(0, 1fr))',
      },
      gap: {
        // Define a custom gutter for the grid (20px = 1.25rem in Tailwind units)
        'custom': '1.25rem',
      },
      colors: {
        brands: {
          facebook: '#1877f2',
          twitter: '#1da1f2',
          x: '#14171a',
          instagram: '#405de6',
          linkedin: '#0a66c2',
          youtube: '#ff0000',
          vimeo: '#1ab7ea',
          pinterest: '#e60023',
          tiktok: '#ff0050',
        },
      },
      fontSize: {
        'xs': '0.75rem', // 12
        'sm': '0.875rem', // 14
        'base': '1rem', // 16
        'md': '1.063rem', // 17
        'lg': '1.125rem', // 18
        'xl': '1.25rem', // 20
        '2xl': '1.5rem', // 24
        '3xl': '1.875rem', // 30
        '4xl': '2.25rem', // 36
        '5xl': '3rem', // 40
        '6xl': '3.75rem', // 60
        '7xl': '4.5rem', // 72
        '8xl': '6rem', // 96
        '9xl': '8rem', // 128
      },
      fontFamily: {
        sans: [
          '"neue-haas-grotesk-display"',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        serif: [
          '"freight-text-pro"',
          'Georgia',
          'Cambria',
          '"Times New Roman"',
          'Times',
          'serif',
        ],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
  safelist: [],
  content: [
    './templates/**/*.{twig,html,js}',
    './src/**/*.{css,js}',
  ],
}
