module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    textColor: {
      'primary': '#022B69',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
