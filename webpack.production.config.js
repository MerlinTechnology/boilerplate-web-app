const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const baseConfig = require('./webpack.base.config')

const loaders = {
    loaders: []
        .concat(baseConfig.module.loaders)
        .concat([
            {
                test: /\.global\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader','css?importLoaders=1!postcss!sass'),
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css?modules&importLoaders=1&localIdentName=[hash:base64:5]!postcss!sass'),
                exclude: /\.global\.scss/,
            }
        ])
}

const config = {
    devtool: 'hidden-source-map',

    module: Object.assign({},
        baseConfig.module,
        loaders
    ),

    output: Object.assign({},
        baseConfig.output,
        {
            path: path.join(__dirname, "build/assets"),
            publicPath: "/assets/",
            filename: "bundle.js",
        }
    ),

    plugins: []
        .concat(baseConfig.plugins)
        .concat([
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify("production")
            }),
            new ExtractTextPlugin('css/style.css', { allChunks: true }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            }),
            new HtmlWebpackPlugin({
                title: 'Bladerunner',
                filename: path.join(__dirname, "build/index.html"),
                template: 'src/index.ejs',
                hash: true
            }),
        ])
}

module.exports = Object.assign({}, baseConfig, config)
