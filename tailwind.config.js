/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            primary: "rgb(var(--color-primary))",
            secondary: "rgb(var(--color-secondary))",
            lightBg: "rgb(var(--color-lightBg))",
            darkBg: "rgb(var(--color-darkBg))",
            neutral: colors.neutral,
            red: colors.red,
            orange: colors.orange,
            amber: colors.amber,
            yellow: colors.yellow,
            green: colors.green,
            emerald: colors.emerald,
            teal: colors.teal,
            sky: colors.sky,
            blue: colors.blue,
            indigo: colors.indigo,
            violet: colors.violet,
            fuschia: colors.fuschia,
            pink: colors.pink,
            rose: colors.rose,
        },
        extend: {
            fontFamily: {
                main: ["Raleway"],
            },
        },
    },
    future: {
        hoverOnlyWhenSupported: true,
    },
    plugins: [],
};
