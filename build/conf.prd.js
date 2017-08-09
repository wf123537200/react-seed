const path = require('path');
const webpack = require('webpack');
const base = require('./conf.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const APP_DIR = path.resolve(__dirname, '../');
const BUILD_DIR = path.resolve(__dirname, '../dist');

module.exports = Object.assign({
    entry: {
        all: APP_DIR + '/src/index',
        vendor: ['react', 'react-dom', '@tencent/tbd-design-react2']
    },
    output: {
        path: BUILD_DIR,
        filename: `[name][hash].js`,
        chunkFilename: '[name][chunkhash].js'
    },
    // 添加插件
    plugins: [
        //必须配置，react的公共模块
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'],
            filename: 'vendor.js'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(process.cwd(), 'src/index.html'),
            filename: 'index.html'
        }),
        new ExtractTextPlugin({
            allChunks: true,
            filename: 'css/[name].[contenthash].css'
        }),
    ]
}, base.opts);