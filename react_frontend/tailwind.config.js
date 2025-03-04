/** @type {import('tailwindcss').Config} */
export default {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         colors: {
            'grey': '#3C4E58',
            'grey-light': '#C9CED0',
            'grey-dark': '#424549',
            'grey-darker': '#3e4245',
            'black-dark': '#0e1113',
            'black-light': '#1a1f23',
            'black-lighter': '#212529',
            'black-lightest': '#2b2f33',
            'verdigris': '#17BEBB',
            'verdigris-dark': '#12918f',
            'verdigris-darker': '#0C5A5A',
         },
         keyframes: {
            bounce: {
               "0%, 100%": { transform: "translateY(0)" },
               "50%": { transform: "translateY(-10px)" },
            },
            think: {
               "0%, 100%": { transform: "scale(1)" },
               "50%": { transform: "scale(1.5)" },
            },
            pulseText: {
               '0%, 100%': {
                  opacity: '0.5',
               },
               '50%': {
                  opacity: '1',
               },
            },
         },
         animation: {
            'pulse-text': 'pulseText 1.5s ease-in-out infinite',
            "bounce-one": "bounce 1.5s infinite ease-in",
            "bounce-two": "bounce 1.5s infinite ease-in 0.3s",
            "bounce-three": "bounce 1.5s infinite ease-in 0.6s",
            "think-one": "think 1.5s infinite ease-in-out",
            "think-two": "think 1.5s infinite ease-in-out 0.3s",
            "think-three": "think 1.5s infinite ease-in-out 0.6s",
         },
      },
   },
   plugins: [],
}
