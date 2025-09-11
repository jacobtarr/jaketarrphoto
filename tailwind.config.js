/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const generateGridClasses = () => {
  const breakpoints = ['sm', 'md', 'lg', 'xl', '2xl'];
  const gridCounts = Array.from({ length: 12 }, (_, i) => i + 1); // Generates [1, 2, ..., 12]
  
  return breakpoints.flatMap(bp => 
    gridCounts.map(count => `${bp}:grid-cols-${count}`)
  );
};

const generateColSpans = () => {
  const spans = Array.from({ length: 13 }, (_, i) => `col-span-${i}`);
  return spans.flatMap(span => [
    span,
    ...['sm', 'md', 'lg', 'xl', '2xl'].map(bp => `${bp}:${span}`)
  ]);
};

export default {
  theme: {
    extend: {
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-16': 'span 16 / span 16',
      },
      gap: {
        // Define a custom gutter for the grid (20px = 1.25rem in Tailwind units)
        'custom': '1.25rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
  safelist: [
    ...generateGridClasses(),
    ...generateColSpans(),
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
