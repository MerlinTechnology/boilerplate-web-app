const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const baseConfig = require('./webpack.base.config')

const rules = {
    rules: []
        .concat(baseConfig.module.rules)
        .concat([
            {
                test: /\.global\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1
                            }
                        },
                        'postcss-loader',
                        'sass-loader'
                    ]
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                modules: true,
                                localIdentName: '[hash:base64:5]'
                            }
                        },
                        'postcss-loader',
                        'sass-loader'
                    ]
                }),
                exclude: /\.global\.scss/
            }
        ])
}

const config = {
    devtool: 'hidden-source-map',

    module: Object.assign({},
        baseConfig.module,
        rules
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
            new ExtractTextPlugin({filename: 'css/style.css', allChunks: true }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                },
                sourceMap: true
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
