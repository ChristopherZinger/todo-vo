const mix = require("laravel-mix");
const path = require("path");

const config = {
    components: [path.resolve(__dirname, "./node_modules/normalize.css")],
};

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: "sass-loader",
                        options: {
                            sassOptions: {
                                includePaths: config.components,
                                precision: 100,
                            },
                        },
                    },
                ],
            },
        ],
    },
});

mix.js("resources/js/app.js", "public/js")
    .sass("resources/scss/styles.scss", "public/css")
    .options({ autoprefixer: true })
    .ts("resources/js/app.tsx", "public/js")
    .react();

// .js("resources/js/app.js", "public/js")
// .react()
