module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: '#F7F5FB',
        dark: '#2E3844',
        primary: '#F58A07',
        secondary: '#084887',
        hover: '#909CC244',
        icon: '#909CC2'
      }
    },
    fontFamily: {
      brand: ['Fakedes Outline', 'sans serif'],
      body: ['Valkyrie', 'sans serif'],
      sans: ['sans serif'],
    },
  },
  content: ["./content/*.md", "./layouts/**/*.html"],
  plugins: []
}
