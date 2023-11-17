import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'webdesign1': "url('./public/img/webdesign1.jpg')",
      //   'webdesign2': "url('./public/img/webdesign2.jpg')",
      //   'webdesign3': "url('../public/img/webdesign3.jpg')",
      // },
    },
  },
  plugins: [],
}
export default config
