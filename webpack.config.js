var CleanWebpackPlugin = require('clean-webpack-plugin');

var webpack = require('webpack');

var ExtractTextPlugin = require("extract-text-webpack-plugin");

var HtmlWebpackPlugin = require('html-webpack-plugin');

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
		filename: 'js/[name].js'
	},
	externals: {
		jquery: 'window.jQuery'
	},
	 module: {
        loaders: [
	        { test: /\.html$/, loader: "html" },
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") }
        ]
    },
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common',
			filename: 'js/base.js'
		}),
		new ExtractTextPlugin("css/[name].css"),
		new HtmlWebpackPlugin(getHtmlConfig('index')),
		new HtmlWebpackPlugin(getHtmlConfig('login'))
	]
}

module.exports = config;
