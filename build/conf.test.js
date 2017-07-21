const path = require('path');
const base = require('./conf.base');
const fs = require('fs');

// 入口文件集合函数,每个文件进行打包
module.exports = Object.assign({
    entry: {
        'xx': path.resolve(__dirname, '../demo/App.jsx')
    },
    output: {
        path: path.resolve(__dirname, "../res"),
        publicPath: "/",
        filename: '[name].js',
        libraryTarget: 'umd',
        library: '[name]',
        umdNamedDefine: true
    },
    devtool: false,
    // 添加插件
    plugins: [
    ],
    externals : {
        react: 'react'
    }
}, base.opts);