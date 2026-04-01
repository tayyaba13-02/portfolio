/** @type {import('tailwindcss').Config} */
export default {
    // Define the files Tailwind should scan for class names
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                sky: {
                    50: '#f0f9ff',
                    400: '#38bdf8',
                    500: '#0ea5e9',
                    600: '#0284c7',
                },
                'custom-dark': '#000000',
                'custom-darker': '#050505',
            },
            spacing: {
                '125': '31.25rem',
            },
            blur: {
                '3xl': '64px',
            },
            animation: {
                'float': 'float 20s ease-in-out infinite',
                'pulse-slow': 'pulse 3s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
                    '25%': { transform: 'translateY(-20px) translateX(10px)' },
                    '50%': { transform: 'translateY(-10px) translateX(-10px)' },
                    '75%': { transform: 'translateY(-30px) translateX(5px)' },
                }
            }
        },
    },
    plugins: [],
}
