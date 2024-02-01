/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#d3a096',
                'primary-50': '#fbf6f5',
                'primary-100': '#f6ecea',
                'primary-200': '#f0dcd8',
                'primary-300': '#e4c3bd',
                'primary-400': '#d3a096',
                'primary-500': '#ba7264',
                'primary-600': '#aa6558',
                'primary-700': '#8e5347',
                'primary-800': '#77463d',
                'primary-900': '#643f38',
                'primary-950': '#351e1a',
            },
            backgroundColor: {
                primary: '#aa6558',
                'primary-50': '#fbf6f5',
                'primary-100': '#f6ecea',
                'primary-200': '#f0dcd8',
                'primary-300': '#e4c3bd',
                'primary-400': '#d3a096',
                'primary-500': '#ba7264',
                'primary-600': '#aa6558',
                'primary-700': '#8e5347',
                'primary-800': '#77463d',
                'primary-900': '#643f38',
                'primary-950': '#351e1a',
            },

        },
    },
    plugins: [],
}
