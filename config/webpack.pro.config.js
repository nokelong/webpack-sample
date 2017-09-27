const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.base.config');
const merge = require('webpack-merge');

module.exports = merge(baseWebpackConfig, {
    plugins:[
        new webpack.optimize.UglifyJsPlugin()
    ]
});