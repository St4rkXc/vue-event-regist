/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                // primary: '#25252B',
            },
            fontSize: {
                // xs: '14px',
                // base: '16px',
                // lg: '20px',
                // xl: '24px',
                // '2xl': '32px',
                // '3xl': '64px',
                // '4xl': '96px',
            },
        },
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: '#25252B',
                    secondary: '#636376',
                    'base-100': '#EFEFEF' /* background image */,
                },
            },
            'dark',
        ],
    },
    // eslint-disable-next-line no-undef
    plugins: [require('daisyui')],
}
