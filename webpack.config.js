const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
				exclude: /node_modules/,
			},
    ],
  },
  resolve: {
		extensions: ['.tsx', '.ts', '.js', '.css'],
	},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'makenna-tour-3.js',
    library: "productTour",
  },
};