var path = require('path');

module.exports = {
    entry: './app.js',
    context: here('js'),
    output: {
        filename: 'bundle.js',
        path: here()
    }
}
function here(d) {
    if (!d) {
        return __dirname;
    }
    return path.resolve(__dirname, d);
}