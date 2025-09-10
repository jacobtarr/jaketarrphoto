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
    container: {
      center: true,
      padding: '1rem',
      screens: {
        lg: '1140px',
        xl: '1340px',
        '2xl': '1340px',
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
        '16': 'repeat(16, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-16': 'span 16 / span 16',
      },
      gap: {
        // Define a custom gutter for the grid (20px = 1.25rem in Tailwind units)
        'custom': '1.25rem',
      },
      colors: {
        primary: '#000', // Main color
        secondary: '#CC3D33', // Secondary color - red; Brick

        // Shades of Red
        red: {
          100: '#FDE2DF', // light wash
          400: '#E05E4E', // hover red
          500: '#CC3D33', // primary red; Brick
        },

        // Shades of Gray
        gray: {
          100: '#F3F3F3',
          200: '#E0E0E0',
          300: '#B8B8B8',
          400: '#929292',
          500: '#6E6E6E',
          600: '#4B4B4B',
          700: '#313131',
          800: '#272727',
          900: '#1A1A1A'
        },

        // Shades of Beige 
        beige: {
          'base-1': '#F5EBDD',     // warm beige – primary background
          'base': '#E9DBC2',       // almond milk – cards, sections
          'base+1': '#BFA98B',     // toasted almond – text over warm beige
          'base+2': '#7A624B',     // mocha mist – dark text over warm beige
        },

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
      boxShadow: {
        'card-soft': '0 3px 6px rgb(var(--shadow-color, 0 0 0) / 0.5)',
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
        'xxs': '0.625rem', // 10
        'xs': '0.75rem', // 12
        'sm': '0.875rem', // 14
        'base': '1rem', // 16
        'lg': '1.125rem', // 18
        'xl': '1.25rem', // 20
        '2xl': '1.5rem', // 24
        '3xl': '1.75rem', // 28
        '4xl': '2rem', // 32
        '5xl': '2.25rem', // 36
        '6xl': '2.625rem', // 42
        '7xl': '3rem', // 48
        '8xl': '4rem', // 64
        '9xl': '6rem', // 96
        '10xl': '8rem', // 128
      },
      fontFamily: {
        sans: [
          '"neue-haas-grotesk-display"',
          'ui-sans-serif',
          'system-ui'
        ],
        body: [
          '"source-serif-pro"',
          'serif',
        ],
        founders: [
          '"Founders Grotesk"',
          'sans-serif'
        ],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    function ({ addUtilities, theme }) {
      const colors = theme('colors');
      const utils = {};

      function flatten(obj, prefix = '') {
        return Object.entries(obj).flatMap(([k, v]) => {
          const key = prefix ? `${prefix}-${k}` : k;
          return typeof v === 'string' ? [[key, v]] : flatten(v, key);
        });
      }

      // Make a SAFE class token: no + . / spaces, etc.
      // Example: 'beige-400' -> 'beige-200-plus-2'
      function safeToken(name) {
        return name
          .replace(/\+/g, '-plus-')
          .replace(/\./g, '-')    // just in case
          .replace(/\s+/g, '-')   // normalize spaces
          .replace(/[^a-zA-Z0-9_-]/g, ''); // strip anything else weird
      }

      // Convert #rgb or #rrggbb to "r g b"
      function hexToRgbTriplet(hex) {
        if (typeof hex !== 'string') return null;
        const m = hex.trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
        if (!m) return null;
        let h = m[1];
        if (h.length === 3) h = h.split('').map(ch => ch + ch).join('');
        const r = parseInt(h.slice(0, 2), 16);
        const g = parseInt(h.slice(2, 4), 16);
        const b = parseInt(h.slice(4, 6), 16);
        return `${r} ${g} ${b}`;
      }

      for (const [name, val] of flatten(colors)) {
        const rgb = hexToRgbTriplet(val);
        if (!rgb) continue; // skip non-hex tokens like 'transparent', etc.
        const token = safeToken(name);
        utils[`.shadowc-${token}`] = { '--shadow-color': rgb };
      }

      // Ensure utilities layer so @apply can find them
      addUtilities(utils, { layer: 'utilities' });
    },
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
