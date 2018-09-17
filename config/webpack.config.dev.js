const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');  //自动加载js
const webpack = require('webpack');
//const ExtractPlugin = require('extract-text-webpack-plugin');    //分离css文件 webpack4不再使用
const ExtractCSSPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV === 'development';

let config = {
	context : path.resolve(__dirname,'../'),
	mode : "development",
	entry : './src/index.js',
	output : {
		filename : 'bundle.[hash:8].js',
		path : path.resolve(__dirname,'../dist')
	},
	module : {
		rules : [{
			test : /\.vue$/,
			loader : 'vue-loader',
			/*options : {
				loaders : {
					js : 'coffee-loader'
				}
			}*/
		},{
			test : /\.jsx$/,
			loader : 'babel-loader',
		},{
			test : /\.(gif|jpg|jpeg|png|svg)$/,
			use:[{
				loader:'url-loader',
				options:{
					limit : 1024,
					name:'[name]-aaa.[ext]'
				}
			}]
		}]
	},
	plugins : [
		new webpack.DefinePlugin({
			'process.env' : {
				NODE_ENV : isDev?'"development"':'"production"'
			}
		}),
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin(),
		
		new webpack.NoEmitOnErrorsPlugin()
	]
}


if(isDev){
	config.devServer = {
		port:4000,
		host:'0.0.0.0',
		overlay:{
			errors:true,
		},
		//open : true, //自动打开新页面
		hot:true
	},
	config.devtool = '#cheap-module-eval-source-map';
	config.module.rules.push({
		test : /\.css$/,
		use: [
			'style-loader',
			'css-loader'
		]
	},{
		test : /\.less$/,
		use :[
			'style-loader',
			'css-loader',
			{
				loader:'postcss-loader'
			},
			'less-loader'
		]
	},{
		test : /\.styl/,
		use :[
			'style-loader',
			'css-loader',
			{
				loader:'postcss-loader',
				options:{
					sourceMap:true
				}
			},
			'stylus-loader'
		]
	});
	config.plugins.push(new webpack.HotModuleReplacementPlugin()); //热加载只在dev使用  且和 chunkhash不能同时使用
}else{
	config.output.filename = '[name].[chunkhash:8].js';
	config.module.rules.push({
		test : /\.css$/,
		use: [
			{
				loader:ExtractCSSPlugin.loader,
				options:{
					publicPath:path.resolve(__dirname,'../dist/css')
				}
			},
			'css-loader'
		]
	},{
		test : /\.less$/,
		use :[
			{
				loader:ExtractCSSPlugin.loader,
				options:{
					publicPath:path.resolve(__dirname,'../dist/css')
				}
			},
			'css-loader',
			{
				loader:'postcss-loader'
			},
			'less-loader'
		]
	},{
		test : /\.styl/,
		use :[
			{
				loader:ExtractCSSPlugin.loader,
				options:{
					publicPath:path.resolve(__dirname,'../dist/css')
				}
			},
			'css-loader',
			{
				loader:'postcss-loader'
			},
			'stylus-loader'
		]

	})

	config.plugins.push(
		new ExtractCSSPlugin({
			filename:'[name].[hash:8].css',
			chunkFilename:'[id].css'
		})
	)


}

console.log(config);


module.exports = config