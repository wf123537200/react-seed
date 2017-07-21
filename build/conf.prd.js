const path = require('path');
const webpack = require('webpack');
const base = require('./conf.base');

const APP_DIR = path.resolve(__dirname, '../');
const BUILD_DIR = path.resolve(__dirname, '../dist');

module.exports = Object.assign({
    entry: {
        all: APP_DIR + '/src/index',
        css: APP_DIR + '/src/index-css'
    },
    output: {
        path: BUILD_DIR,
        filename: `[name][hash].js`,
    },
    devtool: "cheap-module-source-map",
}, base.opts);