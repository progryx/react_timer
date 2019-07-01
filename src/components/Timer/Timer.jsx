import React from "react";
import IntervalComponent from "../Interval/IntervalComponent";


const Timer = (props) => {
    return (
        <div>
            <IntervalComponent />
            <div>
                Секундомер: {props.currentTime} сек.
            </div>
            <div>
                <button onClick={props.handleStart}>Старт</button>
                <button onClick={props.handleStop}>Стоп</button>
            </div>
        </div>
    )
}

export default Timer;