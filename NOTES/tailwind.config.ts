import type { Config } from 'tailwindcss'

// Added import
import { nextui } from '@nextui-org/react'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',

    // Added Entry
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'

  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },

  // Added entry
  darkMode: "class",

  // Call the 'nextui' function imported at the top
  plugins: [nextui()],
}
export default config
