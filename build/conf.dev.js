const path = require('path');
const webpack = require('webpack');
const base = require('./conf.base');

module.exports = Object.assign({
    entry: {
        bundle: '../src',
        all: '../src/index-css'
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
        filename: `[name].js`,
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
    ]
}, base.opts);