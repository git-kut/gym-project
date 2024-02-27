/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-100": "#FFCEA1",
        "primary-300": "#FFAA5C",
        "primary-500": "#844700",
        "secondary-400": "#484848",
        "secondary-500": "#5F5F5F",
      },
      
      backgroundImage: (theme) => ({
        'gradient-yellowred': 'linear-gradient(90deg, #FF616A %0, #FFC837 100%)',
        'mobile-home': "url('./assets/HomePageGrapgic.png')"
      }),

      fontFamily: {
        dmsans: ['DM Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },

      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      }
    },

    screens: {
      xs: '480px',
      sm: '768px',
      md: '1060px'
    }
  },
  plugins: [],
}
