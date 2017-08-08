const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
// input dir
const APP_DIR = path.resolve(__dirname, './');
// output dir
const BUILD_DIR = path.resolve(__dirname, './dist');
const opts = {
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            presets: [
                                [
                                    'es2015',
                                    {
                                        'modules': false
                                    }
                                ],
                                'react',
                                'stage-0'
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.png$/,
                use: 'url-loader?limit=100000',
            },
            {
                test: /\.jpg$/,
                use: 'file-loader',
            },
            {
                test: /\.gif$/,
                use: 'file-loader',
            },
            /* for font-awesome */
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: 'url-loader?limit=10000&minetype=application/font-woff',
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: 'file-loader',
            },
            /* for require('*.less') */
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            /* for mapbox */
            {
                test: /\.json$/,
                use: 'json-loader',
            },
            {
                test: /\.js$/,
                include: APP_DIR + '/node_modules/mapbox-gl/js/render/painter/use_program.js',
                use: 'transform/cacheable?brfs',
            }
        ],
    },

    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, "app")
        ],
        extensions: [".js", ".json", ".jsx", ".css"],
        alias: {
            "components": path.resolve(__dirname, "../src/components"),
            "tbdd": "@tencent/tbd-design-react2",
            "utils": path.resolve(__dirname, "../src/utils")
        },
    },

    performance: {
        hints: false,// : "warning", // enum
        maxAssetSize: 200000, // int (in bytes),
        maxEntrypointSize: 400000, // int (in bytes)
        assetFilter: function (assetFilename) {
            return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
        }
    },
    externals : {
    }
};

exports.opts = opts;