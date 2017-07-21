export const YOUR_ACTIONS2 = 'YOUR_ACTIONS2';

// 返回方式1
export function yourActions(args) {
    return function (dispatch) {
        dispatch(yourActions2(args));
    };
}

// 返回方式2
export function yourActions2(args) {
    return {type: YOUR_ACTIONS2, args};
}