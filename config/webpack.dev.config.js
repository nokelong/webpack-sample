const baseWebpackConfig = require('./webpack.base.config');
const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
    devtool:'inline-source-map',
    devServer:{
        contentBase: "../build",//本地服务器所加载的页面所在的目录
        hot: true
    },
    plugins:[
        new HtmlWebpackPlugin({
	    	filename: '../build/index.html',
	        template: 'index.html',
	        title:'sample project',
	        inject: true
	    }),
	    new webpack.HotModuleReplacementPlugin(),//热加载插件
    ]
});