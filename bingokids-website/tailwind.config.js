/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple:      '#341e60', // primary brand color: header/footer bg, headings, body text on light bg
          purpleAccent:'#634bf5', // secondary purple, pill buttons (e.g. "Discover")
          cream:       '#f8f2e9', // default light section background
          orange:      '#ff9500', // hero/section accent background, "no ads" icons
          orangeCta:   '#ffc42e', // primary CTA button fill ("Start exploring")
          pink:        '#ffa1ff', // section accent background
          cyan:        '#a7f0ff', // section accent background
          cyanBright:  '#00d4ff', // About Us hero accent background
          yellow:      '#ffd109', // section accent background, star ratings
          yellowPale:  '#fffbad', // Awards hero / Research "Proof behind the play" bg
          green:       '#32e37b', // News hero background
          mint:        '#bbffd9', // News secondary background band
          white:       '#ffffff',
        }
      },
      fontFamily: {
        display: ['"Gotham Rounded"', 'sans-serif'],
        body: ['"PP Agrandir"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
