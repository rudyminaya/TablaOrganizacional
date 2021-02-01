module.exports = {
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                secundario: '#56A7F2',
                primario: '#2E52F8',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
