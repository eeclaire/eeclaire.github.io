const  webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

module.exports = {
	entry: './src/js/app.jsx',
	output: {
		path: './static',
		filename: 'app.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx', '.scss']
	},
	module: {
		loaders: [{
	      // Process all .js files w/ babel-loader
	      test: /\.jsx?$/,
	      exclude: /node_modules/,
	      loader: 'babel',
	      query: {
	      	cacheDirectory: true,
	      	presets: ['react', 'es2015'],
	      },
	  }, {
	  	test: /\.md$/, loader: "html!markdown"
	  }, {
            test: /\.json$/,
            loader: 'json'
      }, {
	      // Don't compress svgs, but still include them
	      test: /\.(svg)/,
	      loaders: [
	      'file-loader?name=[path][name].[ext]',
	      ],
	  }, {
	      // Compress images with image-webpack, a wrapper around imagemin
	      test: /\.(png|jgp|gif)/,
	      loaders: [
	      'file-loader?name=[path][name].[ext]',
	      'image-webpack-loader?optimizationLevel=5&interlaced=false'
	      ],
	  }, {
	      // Parse .scss files with node-sass & then autoprefix them, then make it css
	      test: /\.scss?$/,
	      loader: ExtractTextPlugin.extract('css-loader!postcss-loader!sass-loader'),
	  }],
	},
	postcss: function() {
		return [precss, autoprefixer];
	},
	plugins: [
	new webpack.optimize.UglifyJsPlugin({
		compress: {
			warnings: false,
		},
		output: {
			comments: false,
		},
	}),

	new ExtractTextPlugin('main.css', {
		allChunks: true,
	})
	],
	watch: true
}