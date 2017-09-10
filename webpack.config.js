var CleanWebpackPlugin = require('clean-webpack-plugin');

var webpack = require('webpack');

var ExtractTextPlugin = require("extract-text-webpack-plugin");

var HtmlWebpackPlugin = require('html-webpack-plugin');

var WEBPACK_ENV = process.env.WEBPACK_ENV || 'dev';

console.log(WEBPACK_ENV);

var getHtmlConfig = function (name) {
	return {
		template: './src/view/' + name +'.html',
		filename: 'view/' + name + '.html',
		inject: true,
		hash: true,
		chunks: ['common', name]
	}
}
 var config = {
	entry: {
		common: ['./src/page/common/index.js'],
		index: ['./src/page/index/index.js'],
		login: ['./src/page/login/index.js']
	},
	output: {
		path: './dist',
		publicPath: '/dist/',
		filename: 'js/[name].js'
	},
	externals: {
		jquery: 'window.jQuery'
	},
	 module: {
        loaders: [
	        { test: /\.string$/, loader: "html" },
	        { test: /\.(woff|woff2|eot|ttf|otf)\??.*$/, loader: "file-loader?limit=50&name=resource/[name].[ext]" },

	        { test: /\.(png|svg|jpg|gif)\??.*$/, loader: "file-loader?limit=50&name=resource/[name].[ext]" },

	        { test: /\.(png|jpg|gif)\??.*$/, loader: "url-loader?limit=50&name=resource/[name].[ext]" },
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") }
        ]
    },
    resolve: {
        alias: {
        	node_modules: __dirname + '/node_modules',
        	util: __dirname + '/src/util',
        	page: __dirname + '/src/page',
        	service: __dirname + '/src/service',
        	image: __dirname + '/src/image'
        }
    },
	plugins: [
		// new CleanWebpackPlugin(['dist']),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common',
			filename: 'js/base.js'
		}),
		new ExtractTextPlugin("css/[name].css"),
		new HtmlWebpackPlugin(getHtmlConfig('index')),
		new HtmlWebpackPlugin(getHtmlConfig('login'))
	]
}

if ('dev' === WEBPACK_ENV) {
	config.entry.common.push('webpack-dev-server/client?http://localhost:8088/')
}

module.exports = config;
