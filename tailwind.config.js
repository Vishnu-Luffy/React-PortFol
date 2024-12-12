/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/public/robot.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      keyframes: {
        //Our fall animation keyframes              
        fall: {
            '0%': { transform: 'translate(0%,-150%) skewX(0deg)' },
            '50%': { transform: 'translate(0%,0%) skewX(-10deg)' },
            '100%': { transform: 'translate(0%,150%) skewX(0deg)' },
          },
        },
  
  animation: {
       // You can then reference these keyframes by name in the 
       // animation section of your theme configuration
       fall: 'fall 3s ease infinite',
       // animation shorthand CSS property i.e
       // animation-name | animation-duration | animation-timing-function 
       // animation-iteration-count
  }
     },
  plugins: [],
}

}