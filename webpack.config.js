var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    devtool: 'inline-source-map',
    context: __dirname + '/src',
    entry: './app/app.js',
    plugins: [
        new HtmlWebpackPlugin({
            inject: 'head',
            template: 'index.html'
        })
    ],
    output: {
        path: __dirname + '/src',
        filename: './build/bundle.js'
    },
    resolve: {
        root: __dirname + '/src'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            include: [
                path.resolve(__dirname + '/src/app')
            ],
            loader: 'babel-loader'
        }, {
            test: /\.html$/,
            loader: 'raw'
        }]
    }
};

module.exports = config;
