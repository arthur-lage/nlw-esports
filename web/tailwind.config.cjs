/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "purple-green-yellow-gradient":
          "linear-gradient(to right, #9572FC, #43E7AD, #E1D55D)",
        galaxy: "url(/galaxy.png)",
        "fade-black": "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%);"
      },
      fontFamily: {
        inter: ["Inter", "monospace"]
      },
    },
  },
  plugins: [],
};
