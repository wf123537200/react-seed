const $ = require('jquery');

/**
 * 错误处理函数
 * @param options 请求参数对象
 * @param data response对象
 * @param isOk 是否是返回200的请求
 */
const errorHandler = function (options, data, isOk) {};

const isIgnore = function (options) {
    return options.url === '/api/accounts/';
};
const ajaxWrap = function () {
    $.ajaxSetup({
        //发送请求前触发
        beforeSend: function (xhr) {
            //可以设置自定义标头
            xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');
        },
        complete: function (xhr) {
            // 对不同返回值的拦截
            if (xhr.status === 401) {}
        }
    });

    // reload ajax send
    const oldAjax = $.ajax;

    $.ajax = function (options) {
        const opts = Object.assign({
            type: 'GET'
        }, options);
        opts.dataType = opts.dataType || 'json';
        opts.data = opts.type.toUpperCase() !== 'GET' ? JSON.stringify(opts.data) : opts.data;
        if (opts.data === '{}') opts.data = undefined;
        opts.success = function (data) {
            // 成功函数，一般有if
            options.success && options.success.call(null, data.data);

            // 错误处理函数，一般有if
            if(options.fail) {
                options.fail.call(null, data.data, data.message);
            } else {
                errorHandler(options, data, true);
            }
        };
        opts.error = function (data) {
            // isIgnore 函数中的函数不提示
            if (!data || isIgnore(options)) return;
            errorHandler(options, data);
            options.error && options.error.call(null, data.message);
        };

        return oldAjax.call(this, opts);
    }
};

export {
    ajaxWrap
}