// const { FaRegBell } = require("react-icons/fa");

module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      trasparent: 'trasparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'blue': '#1fb6ff',
      'blue-dark':'#003d99',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': {
        100: '#273444',
        200: '#1c2631',
      },
      'gray': '#8492a6',
      'gray-light': '#d3dce6',

      'light-blue': '#41F7F4',
      'dark-green-blue': '#299F9D',

      'purple': {
        100: '#6E37E5',
        200: '#4E27A3',
      },
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      'mono': ['ui-monospace', 'SFMono-Regular', 'Fira Code VF', 'Menlo','Monaco','Consolas','Liberation Mono','Courier New,monospace'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        'pack-sea': "url('../src/img/tim-peterson-KYVZck2IW9E.jpg')",
      },
    }
  },
  plugins: [],
}
