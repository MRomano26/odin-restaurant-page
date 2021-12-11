const path = require('path');

module.exports = {
    mode: 'development',
    entry: 'index.js',
    devtool: 'inline-source-map',
    output: {
        __filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};
