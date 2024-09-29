<<<<<<< HEAD
module.exports = require("../../packages/tailwind-config/tailwind.config");
=======
import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#007bff"
      }
    },
  },
  plugins: [],
}

export default config
>>>>>>> 9712037 (repository pull)
