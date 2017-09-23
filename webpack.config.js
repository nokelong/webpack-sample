const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const webpackConfig = {
    entry:{
    	app: __dirname + '/app/main.js'
    },
    output:{
    	path: __dirname + '/build',
    	filename: 'bundle.js' 
    },

    devtool:'eval',
    devServer:{
        contentBase: "./build",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        // inline: true,//实时刷新
        port:8080,
        hot: true
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
            use:[
              {
                loader: 'style-loader'
              },{
                loader: 'css-loader'
              }
            ]         
          }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: __dirname + "/build/index.html",
            template: __dirname + "/app/index.html",
            inject: true          
        }),
        new webpack.HotModuleReplacementPlugin(),//热加载插件
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("style.css")
    ]
}

module.exports = webpackConfig;