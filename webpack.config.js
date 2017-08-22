'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    entry: './src/index.jsx',

    output: {
        filename: 'index.js',
    },

    resolve: {
        extensions: ['.js', '.jsx'],
    },

    plugins: [

        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body'
        }),

        new ExtractTextPlugin({
            filename: 'styles.css'
        }),

    ],

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({use: 'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]'}),
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: 'file-loader?name=/images/[hash].[ext]',
            }
        ]
    },

};