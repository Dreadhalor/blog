import { Config } from 'tailwindcss';

export default {
  content: ['./**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        muted: 'hsl(var(--muted))',
      },
    },
  },
  plugins: [],
} satisfies Config;
