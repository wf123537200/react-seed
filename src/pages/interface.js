const ajax = {
    // 登录
    LOGIN: 'login',
};

// 前缀
const API_PATH_PRE_FIX = '/api/';
// 增加前缀
let INTERFACE = {};
for (let key in ajax) {
    INTERFACE[key] = API_PATH_PRE_FIX + ajax[key];
}

export default INTERFACE;
export {ajax};

