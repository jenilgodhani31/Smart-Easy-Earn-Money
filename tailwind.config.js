/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary1: "#1F3673", //NavBg
        primary2: "#344F95 ", //navIconBG
        primary3: "#E5AF8B ", //Button bg yellow
        primary4: "#ECF0F9",   // border color
        primary5: "#A541FF", //button color
        primary6: "#BC61FF",// button BG freeBox
        primary7: "#91A3D3", //Button Color age
      },
      backgroundImage: {
        'gradient-primary6-fade': 'linear-gradient(to right, rgba(188, 97, 255, 0.1), rgba(255, 255, 255, 1))',
        'ecf0f9-fade': 'linear-gradient(to right, rgba(188, 97, 255, 0.1), rgba(255, 255, 255, 1))',
        'border-gradient-top': 'linear-gradient(to bottom, #ECF0F9, rgba(236, 240, 249, 0))',

      },
      screens: {
        xs: "400px",
        ls: "550px",
        sm: "640px",
        md: "768px",
        lg: "1000px",
        xl: "1200px",
        "2xl": "1536px",
        "3xl": "1636px",
      },
      boxShadow: {
        custom: "2px 2px 14px rgb(0 0 0 / 40%)",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
