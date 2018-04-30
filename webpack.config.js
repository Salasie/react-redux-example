'use strict';

const path = require('path');

// Path build
var PATH_BUILD = path.resolve(__dirname, 'dist');

// Path src
var PATH_SRC = path.resolve(__dirname, 'src');

var config = {
	mode: 'development',
	entry: [
		'./src/webpack-public-path',
    	PATH_SRC + '/index.jsx'
	],
	output: {
		path: PATH_BUILD,
		filename:'bundle.js'
	},
	module: {

		rules: [
			{
				test: /\.(js|jsx)$/,
				include: PATH_SRC,
				use: 'babel-loader',
				exclude: /node_modules/
			}
		]

	}
};

module.exports = config;