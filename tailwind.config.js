module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#0FCFEC",
          "secondary": "#19D3AE",
          "accent": "#3A4256",
          "neutral": "#2F2938",
          "base-100": "#EFEFF6",
          "info": "#8BB1F8",
          "success": "#165A4B",
          "warning": "#F2CA73",
          "error": "#EE4B2B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
