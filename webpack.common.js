const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./js/app.js",
    context: here(),
    output: {
        filename: "[name].[hash].js",
//        publicPath: '/static/',
        path: here('dist/static'),
        pathinfo: true
    },
    module: {
        loaders: [
            { test: /\.js$/, loaders: ["babel"], exclude: /node_modules/ },
            { test: /\.css$/, loaders: ["style", "css"] }
        ]
    },
    /* devServer: {
        hot: false,
        quiet: true,
        publicPath: "",
        contentBase: here('dist'),
        open: true
    }, */
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Happy New Year 2018',
            // save index.html one director back from the output path
            filename: '../index.html',
            template: 'index.template.ejs',
            hash: false
        })
    ]
};
if (process.env.NODE_ENV === "test") {
}

function here(d) {
    if (!d) {
        return __dirname;
    }
    return path.resolve(__dirname, d);
}
