/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    colors: {
      gray: {
        light: '#F1F1F1',
        default: '#D4DAE1',
        dark: 'rgba(0,0,0,.75)',
      },
      blue: {
        default: '#255186',
        light: '#2c60a0',
        featured: '#D4DAE1',
      },
      red: '#D84B4B',
      green: '#229954',
      orange: '#F5B041',
      white: {
        default: '#fff',
        dark: '#F8F8F8',
      },
      black: '#000',
    },
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
    },
    extend: {
      spacing: {
        '30': '30px',
        '14': '3.5rem',
        '80': '80px',
        '75view': '75vh',
        '80view': '80vh',
        '60view': '60vh',
        '25vmax': '30vmax',
        '2half': '10px',
      },
      borderRadius: {
        default: '20px',
      },
      scale: {
        'invert': '-1',
      },
      opacity: {
        '35': '.35',
        '85': '.85',
      },
      minHeight: {
        '80': '70px',
        '50p': '50%',
      },
      maxWidth: {
        '70p': '70%',
        '75p': '75%',
      },
      height: {
        '70p': '55%',
      },
    },
  },
  variants: {},
  plugins: []
}
