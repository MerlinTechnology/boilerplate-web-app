const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

require('es6-promise').polyfill()

module.exports = {
    entry: {
        app: path.join(__dirname, 'src/app.js'),
        vendor: ['react', 'react-dom', 'whatwg-fetch']
    },
    output: {
        filename: '[name].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [['es2015', { modules: false }], 'react', 'stage-0'],
                            plugins: ['transform-object-rest-spread']
                        }
                    }
                ]
            },
            {
                test: /\.jpe?g$|\.gif$|\.svg$|\.png$/,
                use: 'file-loader?name=images/img-[sha512:hash:base64:12].[ext]'
            },
            {
                test: /\.woff$|\.ttf$|\.eot$|\.woff2$/,
                use: 'file-loader?name=fonts/font-[sha512:hash:base64:12].[ext]'
            },
            {
                test: /\.wav$|\.mp3$/,
                use: 'file-loader?name=medias/media-[sha512:hash:base64:12].[ext]'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.bundle.js'}),
        new CopyWebpackPlugin([
            {from: '.htaccess', to: '../'}
        ])
    ],
    resolve: {
        modules: [
            path.resolve(__dirname, 'src'),
            'node_modules'
        ]
    }
}
