const merge = require("webpack-merge");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

var common = require("./webpack.common.js");

module.exports = merge(common, {
    plugins: [
        new UglifyJSPlugin({ sourceMap: true })
    ]
});
