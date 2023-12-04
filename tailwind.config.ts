import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                'fun-green': '#186049',
                'eden': '#247158',
                'tradewind': '#6AB29B',
                'dawn-pink': '#E4D5C7',
                'almond-forest': '#95877A'
            }
        },
    },
    plugins: [
        require("daisyui")
    ],
}
export default config
