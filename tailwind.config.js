/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: false,
  content: ["*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1330px',
    },
    extend: {
      colors: {
        primary: "#bedcfd",
        secondary: "#1f5186",
        accent: {
          DEFAULT: "#409cff",
          secondary: "#800080",
          tertiary: "#000000",
        },
        grey: "#e8f0f1",
      },

      fontFamily: {
        primary: "Poppins",
      },
      boxShadow: {
        custom1: "0px 2px 40px 0px rgba(8, 70, 78, 0.08)",
        custom2: "Opx 0px 30px Opx rgba(8, 73, 81, 0.06)",
      },
      backgroundImage: {
        services: "url(/assets/img/services/4034827_85332.svg)",
        testimonials: "url(/assets/img/testimonials/bg.svg)",
        departments: "url(/assets/img/departments/bg.svg)",
        quoteLeft: "url(/assets/icons/testimonials/quote-left.svg)",
        quoteRight: "url(/assets/icons/testimonials/quote-right.svg)",
      },
    },
  },
  plugins: [],
};
