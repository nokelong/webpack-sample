const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

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
        alias: {
            '@': resolve('app') ,
            'VIEWS':resolve('app/views'),        
            'COMPONENTS':resolve('app/components')
        }
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