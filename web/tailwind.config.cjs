/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "purple-green-yellow-gradient":
          "linear-gradient(to right, #9572FC, #43E7AD, #E1D55D)",
        galaxy: "url(/galaxy.png)",
        "fade-black":
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 60%);",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      screens: {
        desktop: {
          max: "1280px",
        },
        tablet: {
          max: "768px",
        },
        mobile_xl: {
          max: "520px",
        },
        mobile_l: {
          max: "425px",
        },
        mobile_m: {
          max: "375px",
        },
        mobile_s: {
          max: "320px",
        },
      },
    },
  },
  plugins: [],
};
