import forms from "@tailwindcss/forms";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
    ],

    theme: {
        extend: {
            colors: {
                blue: {
                    1: "#CDFAFA",
                    2: "#0AC8B9",
                    3: "#0397AB",
                    4: "#005A82",
                    5: "#0A323C",
                    6: "#091428",
                    7: "#0A1428",
                },
                gold: {
                    1: "#F0E6D2",
                    2: "#C8AA6E",
                    3: "#C8AA6E",
                    4: "#C89B3C",
                    5: "#785A28",
                    6: "#463714",
                    7: "#32281E",
                },
                gray: {
                    1: "#A09B8C",
                    1.5: "#5B5A56",
                    2: "#3C3C41",
                    3: "#1E2328",
                    4: "#1E282D",
                    5: "#010A13",
                },
            },
            fontFamily: {
                sans: ["Cinzel", ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms],
};
