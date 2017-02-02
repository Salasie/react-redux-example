'use strict';

const path = require('path');

// Path build
var PATH_BUILD = path.resolve(__dirname, 'dist');

// Path src
var PATH_SRC = path.resolve(__dirname, 'src');

var config = {
	entry: [
		'./src/webpack-public-path',
    	PATH_SRC + '/index.jsx'
	],
	output: {
		path: PATH_BUILD,
		filename:'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				include: PATH_SRC,
				loader: 'babel',
				exclude: /node_modules/
			}
		]

	}
};

module.exports = config;