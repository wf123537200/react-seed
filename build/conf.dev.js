const path = require('path');
const webpack = require('webpack');
const base = require('./conf.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = Object.assign({
    entry: {
        bundle: '../src',
        vendor: ['react', 'react-dom', '@tencent/tbd-design-react2']
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
        filename: `[name].js`,
        chunkFilename: '[name].js'
    },
    // 快速模式
    devtool: "cheap-module-eval-source-map",
    context: __dirname,
    // 开发服务器配置
    devServer: {
        // 开发端口代理
        proxy: {
            '/api': 'http://localhost:3000'
        },
        // 指向当前开发根目录，方便引用其他目录文件
        contentBase: path.join(__dirname, '../src'),
        // 启动压缩
        compress: true,
        // 热加在时是否显示警告和错误
        noInfo: false,
        publicPath: '/',
        hot: true,
    },
    // 添加插件
    plugins: [
        // 为热加载添加插件
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
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
            filename: 'css/[name].css'
        }),
    ]
}, base.opts);