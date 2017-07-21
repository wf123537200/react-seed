import * as actions from './actions';

export function getInitialState() {
    return {};
}

export const reducers = function (state, action) {
    const actionHandlers = {
        [actions.YOUR_ACTIONS2]() {
            return state;
        }
    };
    if (action.type in actionHandlers) {
        return actionHandlers[action.type]();
    }
    return state;
};
