var webpackConfig = require('./build/conf.test.js');
module.exports = function(config) {
    config.set({

        basePath: '',

        frameworks: [
            'jasmine', 'chai'
        ],

        files: [
            'test/*.js'
        ],

        preprocessors: {
            'test/*.js': ['webpack']
        },

        webpack: webpackConfig,

        webpackMiddleware: {
            noInfo: true
        },

        port: 9876,

        colors: true,

        autoWatch: true,

        browsers: ['PhantomJS'],

        customLaunchers: {  //自定义浏览器启动器
            'PhantomJS_custom': {
                base: 'PhantomJS',
                options: {
                    windowName: 'my-window',
                    settings: {
                        webSecurityEnabled: false
                    }
                },
                flags: ['--load-images=true'],
                debug: true
            }
        },

        phantomjsLauncher: {
            // 资源（比如测试模块）出错时依旧保持phantom不退出
            exitOnResourceError: true
        }
    });
};