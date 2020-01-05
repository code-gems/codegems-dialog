const path = require('path');

module.exports = {
	context: __dirname,
	entry: [
		'./demo/index.js',
		'./dist/codegems-dialog.js',
		'./dist/codegems-dialog-overlay.js',
		'./dist/test.js',
	],
	devtool: 'inline-source-map',
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				include: [path.resolve(__dirname, 'src')],
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.js'],
		modules: ['node_modules'],
	},
	output: {
		filename: 'codegems-dialog.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devServer: {
		open: true,
		contentBase: 'demo',
	},
	watch: true,
};
