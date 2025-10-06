/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './templates/**/*.{twig,html,js}',
    './src/**/*.{css,js}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-16': 'span 16 / span 16',
      },
      gap: {
        'custom': '1.25rem',
      },
    },
  },
  plugins: [
    // Note: @tailwindcss/aspect-ratio is built-in to v4
  ],
  safelist: [
    // Grid columns
    { pattern: /grid-cols-(1|2|3|4|5|6|7|8|9|10|11|12)/ },
    { pattern: /(sm|md|lg|xl|2xl):grid-cols-(1|2|3|4|5|6|7|8|9|10|11|12)/ },
    // Column spans
    { pattern: /col-span-(1|2|3|4|5|6|7|8|9|10|11|12|full)/ },
    { pattern: /(sm|md|lg|xl|2xl):col-span-(1|2|3|4|5|6|7|8|9|10|11|12|full)/ },
    // Hamburger classes
    'hamburger',
    'hamburger--arrow',
    'hamburger--arrow-r',
    'hamburger-box',
    'hamburger-inner',
    'is-active',
  ],
}