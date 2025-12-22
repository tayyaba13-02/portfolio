/** @type {import('tailwindcss').Config} */
export default {
    // Define the files Tailwind should scan for class names
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            // Define custom color palette variables
            colors: {
                'custom-dark': '#020617',
                'custom-darker': '#0f172a',
            },
            // Configure custom animation timings and behaviors
            animation: {
                'float': 'float 20s ease-in-out infinite',
                'pulse-slow': 'pulse 3s ease-in-out infinite',
            },
            // Define the keyframes for custom animations
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
