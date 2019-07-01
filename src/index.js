// Slomux — упрощённая, сломанная реализация Flux.
// Перед вами небольшое приложение, написанное на React + Slomux.
// Это нерабочий секундомер с настройкой интервала обновления.

// Исправьте ошибки и потенциально проблемный код, почините приложение и прокомментируйте своё решение.

// При нажатии на "старт" должен запускаться секундомер и через заданный интервал времени увеличивать свое значение на значение интервала
// При нажатии на "стоп" секундомер должен останавливаться и сбрасывать свое значение


//imports
import React from "react";
import ReactDOM from "react-dom";
import createStore from './slomux/createStore'
import Provider from './slomux/provider';
import TimerComponent from "./components/Timer/TimerComponent";
import {reducer} from "./slomux/reducer";
import style from './assets/css/main.module.css'


// init
let init = { // начальное значение для стейта
    currentInterval: 1
}

ReactDOM.render(<div className={style.wrapper}>
    <Provider store={createStore(reducer,init)}>
        <TimerComponent />
    </Provider></div>,
    document.getElementById('app')
)

