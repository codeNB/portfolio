'use strict';

const webpack = require('webpack');
const path = require('path');
const defaultConfig = require('./webpack.config');

defaultConfig.output.path = path.resolve(__dirname, 'bin/rel');

defaultConfig.plugins = defaultConfig.plugins.concat([

    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': "'production'",
        }
    }),

    new webpack.optimize.UglifyJsPlugin(),

]);

module.exports = defaultConfig;