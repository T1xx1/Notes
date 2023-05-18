/** @type {import('tailwindcss').Config} */
export default {
   content: [
      "index.html",
      "./src/**/*.{js,ts,jsx,tsx}"
   ],
   theme: {
      extend: {
         colors: {
            gray: {
               5: "#80808080",
               10: "#808080"
            }
         }
      },
   },
   plugins: [],
}

