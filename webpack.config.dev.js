'use strict';
const path = require('path');
const defaultConfig = require('./webpack.config');

defaultConfig.output.path = path.resolve(__dirname, 'bin/debug/');
defaultConfig.devtool = 'source-map';

defaultConfig.devServer = {
    proxy: {
        "/api/*": "http://localhost:8080",
    },
    contentBase: "./bin/debug",
    inline: true,
    port: 8081,
};

module.exports = defaultConfig;