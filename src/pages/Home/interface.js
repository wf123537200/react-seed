// 公共interface引入
import {ajax as ca} from '../interface';


let INTERFACE = {
    INTER_A: 'inter_a'
};

const ajax = Object.assign({}, ca, INTERFACE);

// 前缀
const API_PATH_PRE_FIX = '/api/';
// 增加前缀
for (let key in ajax) {
    INTERFACE[key] = API_PATH_PRE_FIX + ajax[key];
}

export default INTERFACE;