// actions
const CHANGE_INTERVAL = 'CHANGE_INTERVAL';
const TOGGLE_TIMER = 'TOGGLE_TIMER';


// action creators
export const changeInterval = (value) => ({
    type: CHANGE_INTERVAL,
    payload: value,
});
export const toggleTimer = (value) => ({
    type: TOGGLE_TIMER,
    status: value,
})

// reducers
export const reducer = (state, action = '') => {
    switch (action.type) {
        case CHANGE_INTERVAL: {
            let newState = {...state}; // делаем поверхностную копию стейта (не стоит нарушать принципы FLUX)
            if (newState.currentInterval === 1) { // проверка на отрицательное значение интервала
                newState.disabledInterval = true ? null : newState.disabledInterval = true;
                if (action.payload !== 1) action.payload = 0
            } else {
                if (action.payload === 1) {
                    newState.currentInterval > 1 ? newState.disabledInterval = false : newState.disabledInterval = true;
                } else {
                    newState.currentInterval - 1 > 1 ? newState.disabledInterval = false : newState.disabledInterval = true;
                }
            }
            newState.currentInterval = newState.currentInterval + action.payload;
            return newState; // возвращаем новое значение
        }
        case TOGGLE_TIMER: {
            let newState = {...state};
            if (action.status) { newState.runningStatus = true } else { newState.runningStatus = false }
            return newState;
        }
        default:
            return state
    }
};

