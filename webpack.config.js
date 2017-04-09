var webpack = require("webpack");
var path = require("path");
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('vender','vender.bundle.js');
module.exports = {
	//指定入口文件
	// entry:[path.join(__dirname,"public/js/main.js")],
	// entry:['webpack-dev-server/client?http://127.0.0.1:3001',
 //        		'webpack/hot/only-dev-server',
 //         		path.join(__dirname,'public/js/main.js')],
	entry:{
		// main:path.join(__dirname,"public/js/main.js"),
		main:['webpack-dev-server/client?http://127.0.0.1:3001',
        		'webpack/hot/only-dev-server',
         		path.join(__dirname,'public/js/main.js')],
		vender:['webpack-dev-server/client?http://127.0.0.1:3001',
        		'webpack/hot/only-dev-server',"react","react-dom"]
	},
	//指定打包后输出的路径和文件名
	output:{
        path:path.join(__dirname,'public/js/dist'),
        publicPath:"http://localhost:3001/dist",
        filename:"[name].bundle.js"
    },
	plugins:[commonsPlugin,new webpack.HotModuleReplacementPlugin(),new webpack.NoErrorsPlugin()],
	//配置加载器
	module:{
		loaders:[
			{test:/\.css$/,loader:"style!css"},
			{test:/\.less$/,loader:"style!css!less"},
			// {test: /\.js$/,exclude: /node_modules/,loader: 'jsx?harmony' },
			// { test: /\.js?$/,exclude: /node_modules/,loader:'babel',
	  //           query: {presets: ['es2015','react']}
	  //       },
	  	{ test: /\.js$/,exclude: /node_modules/, loader: 'react-hot!babel?presets[]=react,presets[]=es2015' },
			{test:/\.(png|jpg)$/,loader:"url?limit=8192"}
		]
	},
	//配置模块的别名
	resolve:{
		root:path.join(__dirname,"public"),
		extensions:['','.js','.less'],
		alias:{
			"Font":"index",
			"ajax":"js/ajax",
			"main":"js/main",
			"Index":"modules/index/Index",
			"Login":"modules/login/Login",
			"Backpages":"modules/backpages/Backpages",
			"Backheader":"modules/backpages/Backheader",
			"Backleft":"modules/backpages/Backleft",
	  	"Backright":"modules/backpages/Backright",
			"Showsusers":"modules/backpages/Showsusers",
			"Limittime":"modules/backpages/Limittime",
			"Twoarea":"modules/backpages/Twoarea",
			"Recogoods":"modules/backpages/Recogoods",
			"Goodlist":"modules/backpages/Goodlist",
			"Orderinfo":"modules/backpages/Orderinfo",
		}
	}
};
