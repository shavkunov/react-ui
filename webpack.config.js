var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8080/',
        'webpack/hot/only-dev-server',
        './src/index.js'
	],

    output: {
        path: path.join(__dirname, '/build'),
        filename: 'bundle.js'
    },
    resolve: {
        modules: [__dirname, 'node_modules', 'src'],
        extensions: ['.js', '.jsx', '.css', '.json']
    },
    module: {
        rules: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['react-hot-loader', 'babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-0']
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
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
	]
};