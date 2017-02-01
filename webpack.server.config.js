const webpack = require('webpack')
const baseConfig = require('./webpack.base.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const loaders = {
    loaders: []
        .concat(baseConfig.module.loaders)
        .concat([
            {
                test: /\.global\.scss/,
                loaders: [
                    'style',
                    'css?importLoaders=1',
                    'postcss',
                    'sass'
                ],
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style',
                    'css?modules&importLoaders=1&localIdentName=[path][name]__[local]___[hash:base64:5]',
                    'postcss',
                    'sass'
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

    entry: Object.assign({},
        baseConfig.entry,
        {
            app: [
                'webpack-dev-server/client?http://0.0.0.0:9090/',
                'webpack/hot/only-dev-server',
                baseConfig.entry.app
            ]
        }
    ),

    module: Object.assign({},
        baseConfig.module,
        loaders
    ),

    output: Object.assign({},
        baseConfig.output,
        { publicPath: '/' }
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
