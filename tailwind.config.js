/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const generateGridClasses = () => {
  const breakpoints = ['sm', 'md', 'lg', 'xl', '2xl'];
  const gridCounts = Array.from({ length: 12 }, (_, i) => i + 1); // Generates [1, 2, ..., 12]
  
  return breakpoints.flatMap(bp => 
    gridCounts.map(count => `${bp}:grid-cols-${count}`)
  );
};

export default {
  theme: {
    container: {
      center: true, // Center the container
      padding: '20px', // For padding around the container
      screens: {
        lg: '1140px', // Adjust as needed for desktop views, this can change based on your Figma setup
        xl: '1340px',
        '2xl': '1340px', // To keep it the same for larger screens
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
        // Adding 16-column grid
        '16': 'repeat(16, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-16': 'span 16 / span 16',  // To allow columns to span 16 in an 18-column grid
        'span-18': 'span 18 / span 18',  // Full width option
      },
      gap: {
        // Define a custom gutter for the grid (20px = 1.25rem in Tailwind units)
        'custom': '1.25rem',
      },
      colors: {
        primary: '#000', // Main color
        red: '#D63031', // Secondary red
        lightRed: '#FFEAEA', // Light red
        lightGray: '#DCDCDC', // Light gray for underline or similar
        lighterGray: '#F5F5F5', // Background of callout boxes
        darkGray: '#999999', // Dark gray for callout box titles
        mediumGray: '#BBBBBB', // Rarely used gray
        darkGrayOpposite: '#666666', // Opposite of darkGray
        offBlack: '#232323', // Opposite of lightGray
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
      spacing: {
        0: '0px',
        1: '0.25rem',   // 4px
        2: '0.5rem',    // 8px
        3: '0.75rem',   // 12px
        4: '1rem',      // 16px
        5: '1.25rem',   // 20px
        6: '1.5rem',    // 24px
        7: '1.875rem',   // 30px
        8: '2rem',      // 32px
        9: '2.25rem',   // 36px
        10: '2.5rem',   // 40px
        11: '2.75rem',  // 44px
        12: '3rem',     // 48px
        13: '3.25rem',  // 52px
        14: '3.5rem',   // 56px
        15: '3.75rem',  // 60px
        16: '4rem',     // 64px
        18: '4.5rem',   // 72px
        20: '5rem',     // 80px
        24: '6rem',     // 96px
        28: '7rem',     // 112px
        32: '8rem',     // 128px
        36: '9rem',     // 144px
        40: '10rem',    // 160px
        44: '11rem',    // 176px
        48: '12rem',    // 192px
        52: '13rem',    // 208px
        56: '14rem',    // 224px
        60: '15rem',    // 240px
        64: '16rem',    // 256px
        72: '18rem',    // 288px
        80: '20rem',    // 320px
      },
      fontSize: {
        'xs': '0.75rem', // 12
        'sm': '0.875rem', // 14
        'base': '1rem', // 16
        'md': '1.063rem', // 17
        'lg': '1.125rem', // 18
        'xl': '1.25rem', // 20
        '2xl': '1.5rem', // 24
        '3xl': '1.75rem', // 28
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
  safelist: [
    ...generateGridClasses(),
    // 🍔 Hamburger classes
    'hamburger',
    'hamburger--arrow',
    'hamburger--arrow-r',
    'hamburger-box',
    'hamburger-inner',
    'is-active',
  ],
  content: [
    './templates/**/*.{twig,html,js}',
    './src/**/*.{css,js}',
    './**/*.twig',
  ],
}
