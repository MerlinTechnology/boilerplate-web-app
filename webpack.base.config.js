const path = require('path');
const webpack = require("webpack");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer')
const precss = require('precss')
const mqpacker = require('css-mqpacker')

require('es6-promise').polyfill();

module.exports = {
    entry: {
        app: path.join(__dirname, "src/app.js"),
        vendor: ["react", "react-dom", "whatwg-fetch"],
    },
    output: {
        filename: '[name].js',
        pathInfo: true,
        publicPath: '/'
    },
    module: {
        loaders: [
            /**
              * Tell webpack how to load 'json' files because
              * by default, webpack only knows how to handle
              * JavaScript files.
              * When webpack encounters a 'require()' statement
              * where a 'json'' file is being imported, it will use
              * the json-loader.
              */
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel", // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ["es2015", "react", "stage-0"]
                }
            },
            {
                test: /\.jpe?g$|\.gif$|\.svg$|\.png$/,
                loader: "file?name=images/img-[sha512:hash:base64:12].[ext]"
            },
            {
                test: /\.woff$|\.ttf$|\.eot$|\.woff2$/,
                loader: "file?name=fonts/font-[sha512:hash:base64:12].[ext]"
            },
            {
                test: /\.wav$|\.mp3$/,
                loader: "file?name=medias/media-[sha512:hash:base64:12].[ext]"
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),
        new CopyWebpackPlugin([
            {from: '.htaccess', to: '../'}
        ])
    ],
    postcss: () => {
        return [autoprefixer, precss, mqpacker]
    },
    resolve: {
        root: path.resolve(__dirname, 'src')
    }
};
