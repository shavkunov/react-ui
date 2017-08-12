var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'bundle.js'
    },
    resolve: {
        modules: [__dirname, 'node_modules', 'src'],
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
        rules: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query :{
        		presets: ['react', 'es2015', 'stage-0']
      		}   
        },

        {
	        test: /\.css$/,
	        loader: 'css-loader',
			query: {
			    modules: true,
			    localIdentName: '[name]__[local]___[hash:base64:5]'
			}
      	}
        ]
    }
};