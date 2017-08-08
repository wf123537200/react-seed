const path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: undefined,
    output: {
        pathinfo: true
    },
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
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/,
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
            }, {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: '[name].[ext]?[hash:7]'
                        }
                    }
                ]
            }, {
                test: /\.woff|\.woff2|\.svg|.eot|\.ttf/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name].[ext]?[hash:7]'
                        }
                    }
                ]
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
            "src": path.resolve(__dirname, "../src"),
            "tbdd": "@tencent/tbd-design-react2",
            "utils": path.resolve(__dirname, "../src/utils")
        },
    },
};