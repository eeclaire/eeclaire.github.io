const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const marked = require('marked');

// markdown to html
const renderer = new marked.Renderer();
console.log(renderer)


module.exports = {
    entry: {
        jsx: path.resolve(__dirname, 'src','js','app.jsx')
    },
    output: {
        path: path.join(__dirname, 'static'),
        filename: 'app.js'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.scss']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    presets: ['react', 'latest'],
                }
            }, {
                test: /\.md$/,
                use: [
                {
                    loader: "html-loader"
                },
                {
                    loader: "markdown-loader",
                    options: {
                        pedantic: true,
                        gfm: true,
                        renderer
                    }
                }
                ]
            }, {
                test: /\.json$/,
                loader: 'json-loader'
            }, {
                // Parse .scss files with node-sass & then autoprefix them, then make it css
                test: /\.scss?$/,
                loader: ExtractTextPlugin.extract({
                    use: [
                        {loader: 'css-loader'},
                        {loader: 'postcss-loader'},
                        {loader: 'sass-loader'}
                    ],

                }),
            }],
    },
    plugins: [
        new ExtractTextPlugin('main.css')
    ],
    devServer: {
        contentBase: '.',
        hot: true
    }
};
