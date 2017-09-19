const webpackConfig = {
    entry:{
    	app: __dirname + '/app/main.jsx'
    },
    output:{
    	path: __dirname + '/public',
    	filename: 'bundle.js' 
    },

    devtool:'cheap-module-source-map',
    devServer:{
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        port:8080
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
            loader: 'jsx-loader',
            exclude: /node_modules/
          }
        ]
    }
}

module.exports = webpackConfig;