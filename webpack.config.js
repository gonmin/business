 var config = {
	entry: {
		index: ['./src/page/index/index.js'],
		login: ['./src/page/login/index.js']
	},
	output: {
		path: './dist',
		filename: 'js/[name].js'
	}
}

module.exports = config;
