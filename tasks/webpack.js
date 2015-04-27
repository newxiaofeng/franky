/**
 * Created by hongyu.feng on 2015/4/15.
 */
var webpack = require('webpack');
module.exports = function(grunt, options) {
    return {
        dev: {
            entry: {main: './app/app'},
            resolve: {
                extensions: ['', '.js', '.jsx']
            },
            output: {
                filename: "./tmp/[name].js",
                chunkFilename: '[name].chunk.js',
                publicPath: '/'
            },
            module: {
                loaders: [
                    {
                        test: /\.(js|jsx)$/,
                        loader: "jsx-loader?harmony=true"
                    },
                    {
                        test: /\.css$/,
                        loader: 'style!css'
                    },
                    {
                        test: /\.less$/,
                        loader: "style!css!less"
                    },
                    {
                        test: /\.(png|jpg|gif)$/,
                        loader: 'url-loader?limit=8192&name=[name].[ext]'
                    },
                ]
            },
            plugins: [
                new webpack.ProvidePlugin({
                    "$": "jquery",
                    "jQuery": "jquery",
                    "windows.jQuery": "jquery"
                })
            ]
        }
    }
}