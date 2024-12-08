/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'np-blue': 'var(--primary-brand)',
        'np-neutral-darkest': 'var(--neutral-dark)',
        'np-neutral-dark': 'var(--neutral-dark-med)',
        'np-neutral': 'var(--neutral-med)',
        'np-neutral-light': 'var(--neutral-light)',
        'np-neutral-lightest': '#F5F5F7',
        'np-pink': 'var(--alert)',
      },
    },
    fontSize: {
      xs: ['0.75rem', '1rem'],
      sm: ['0.875rem', '1.25rem'],
      base: ['1rem', '1.5rem'],
      lg: ['1.125rem', '1.75rem'],
      xl: ['1.25rem', '1.75rem'],
      '2xl': ['1.5rem', '2rem'],
      '3xl': ['1.875rem', '2.25rem'],
      '4xl': ['2.25rem', '2.5rem'],
      '5xl': ['2.6rem', '1'],
      '6xl': ['3.75rem', '1'],
      '7xl': ['5rem', '1'],
      '8xl': ['6rem', '1'],
      '9xl': ['8rem', '1']
    }
  },
  plugins: [],
}

