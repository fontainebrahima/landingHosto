/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./js/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        quoteLeft: "url('../assets/icons/testimonials/quote-left.svg')",
        quoteRight: "url('../assets/icons/testimonials/quote-right.svg')",
      },
    },
  },
};

