const webpack = require('webpack')
const baseConfig = require('./webpack.base.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const rules = {
    rules: []
        .concat(baseConfig.module.rules)
        .concat([
            {
                test: /\.global\.scss/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    'postcss-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: '[path][name]__[local]--[hash:base64:5]'
                        }
                    },
                    'postcss-loader',
                    'sass-loader'
                ],
                exclude: /\.global\.scss/,
            }
        ])
}

const config = {
    devServer: {
        historyApiFallback: true
    },

    devtool: 'cheap-module-eval-source-map',

    module: Object.assign({},
        baseConfig.module,
        rules
    ),

    plugins: []
        .concat(baseConfig.plugins)
        .concat([
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('development'),
                'process.env.DEBUG': JSON.stringify('true')
            }),
            new HtmlWebpackPlugin({
                title: 'Bladerunner',
                template: 'src/index.ejs',
                hash: true
            }),
        ])
}

module.exports = Object.assign({}, baseConfig, config)
