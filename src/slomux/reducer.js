
// actions
const CHANGE_INTERVAL = 'CHANGE_INTERVAL';

// action creators
export const changeInterval = (value) => ({
    type: CHANGE_INTERVAL,
    payload: value,
});

// reducers
export const reducer = (state, action = '') => {
    //  debugger;
    switch(action.type) {
        case CHANGE_INTERVAL:
            // debugger;
            let newState = {...state}; // делаем поверхностную копию стейта (не стоит нарушать принципы FLUX)
            newState.currentInterval = newState.currentInterval + action.payload; // записываем новое значение
            return newState; // возвращаем новое значение
        default:
            return state
    }
};

