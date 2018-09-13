const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const isDev = process.env.NODE_ENV === 'development';

let config = {
	context : path.resolve(__dirname,'../'),
	mode : "development",
	entry : './src/index.js',
	output : {
		filename : 'bundle.js',
		path : path.resolve(__dirname,'../dist')
	},
	devServer : {
		port:4000,
		host:'0.0.0.0',
		overlay:{
			errors:true,
		}
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
				'less-loader'
			]
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
		new VueLoaderPlugin()
	]
}

console.log(config);


module.exports = config