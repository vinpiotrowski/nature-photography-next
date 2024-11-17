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
        'np-blue': '#358faa',
        'np-grey-dark': '#212121',
        'np-grey': '#757575',
        'np-grey-lightest': '#F5F5F7',
        'np-pink': '#ff006c',
      },
    }
  },
  plugins: [],
}

