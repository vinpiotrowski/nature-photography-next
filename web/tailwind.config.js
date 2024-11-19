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
        'np-grey-dark': 'var(--neutral-dark)',
        'np-grey': 'var(--neutral-med)',
        'np-grey-lightest': '#F5F5F7',
        'np-pink': 'var(--alert)',
      },
    }
  },
  plugins: [],
}

