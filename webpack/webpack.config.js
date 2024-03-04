const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, '..', './src/Index.tsx'),
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    output: {
        path: path.resolve(__dirname, '..', './build'),
        filename: 'bundle.js'
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, '..', './src/index.html')
        })
    ],
    mode: 'development',
    module: {
        rules: [
        {
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }
        ]
    }
};