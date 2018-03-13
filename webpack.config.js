'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
 
const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    
    devtool: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.join(__dirname, 'src/index.js')
      ],
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: '[name].js',
        publicPath: '/'
      },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader",
                options: {
                    includePaths: ["absolute/path/a", "absolute/path/b"]
                }
            }]
        }],
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel'],
                exclude: /node_modules/,
                presets: ['react', 'es2015'],
            },
          
           ]
        
    },
    plugins: [
        extractSass,
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            inject: 'body',
            filename: 'index.html'
       }),
       new webpack.optimize.OccurrenceOrderPlugin(),
       new webpack.HotModuleReplacementPlugin(),
       new webpack.NoErrorsPlugin(),
       new webpack.DefinePlugin({
         'process.env.NODE_ENV': JSON.stringify('development')
       })
    ]
};



