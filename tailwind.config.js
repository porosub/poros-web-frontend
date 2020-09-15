module.exports = {
  theme: {
    variants: {
      textColor: ['responsive', 'hover', 'focus', 'group-hover'],
      backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
    },
    fontFamily: {
      'poros': ["Montserrat", 'Helvetica', 'sans-serif']
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        'primary': '#192F1C',
      },
      fontSize: {
        'tiny': ".6rem"
      },
      inset: {
        '1/2': '50%',
        '1':'1rem',
        '2':'2rem',
        '2p5':'2.5rem',
        '3':'3rem',
        '4':'4rem',
        '5':'5rem',
      },
      minWidth: {
        '0': '0',
        '1': '1rem',
        '2': '2rem',
        '3': '3rem',
        '4': '4rem',
        '5': '5rem',
        '14': '14rem',
        '15': '15rem',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem'
      }
    }
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  layers: process.env.NODE_ENV === 'production' ? ['utilities'] : undefined,
  purge: process.env.NODE_ENV === 'production' ? {
    layers: ['utilities'],
    content: [
      "./pages/**/*.{js,jsx,ts,tsx}",
      "./components/**/*.{js,jsx,ts,tsx}",
    ],
  } : undefined,
}