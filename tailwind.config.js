module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: '#F7F5FB',
        dark: '#15171a',
        primary: '#ADA897',
        secondary: '#FF2800',
        tertiary: '#C90A0A',
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
