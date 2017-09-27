const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const webpackConfig = {
    entry:{
    	app: './app/main.js'
    },
    output:{
        path: path.resolve(__dirname, '../build'),
        filename: 'bundle.js'
    },  
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module:{
    	rules:[{
    	    test: /(\.js)$/,
    	    loader: 'babel-loader',
    	    exclude: /node_modules/
    	  },{
            test: /(\.jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/
          },{
            test: /\.css$/,
            use: [
                {
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader'
                }
            ]
          }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(['build'])
    ]
}

module.exports = webpackConfig;