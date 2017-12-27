const path = require("path");

module.exports = {
    entry: "./app.js",
    context: here("js"),
    output: {
        filename: "bundle.js",
        path: here(),
        pathinfo: true
    },
    module: {
        loaders: [
            { test: /\.js$/, loaders: ["babel"], exclude: /node_modules/ },
            { test: /\.css$/, loaders: ["style", "css"] }
        ]
    }
};
if (process.env.NODE_ENV === "test") {
}

function here(d) {
    if (!d) {
        return __dirname;
    }
    return path.resolve(__dirname, d);
}
