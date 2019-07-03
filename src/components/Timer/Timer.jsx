//imports
import React from "react";
import IntervalComponent from "../Interval/IntervalComponent";

// main function
const Timer = (props) => {
    return (
        <div className='card'>
            <div className="card-body">
                <IntervalComponent/>
                <div className='card-text text-center'>
                    Секундомер: {props.currentTime} сек.
                </div>
                <div className='btn-group w-100'>
                    <button type='button' className='btn btn-success' disabled={props.runningStatus}
                            onClick={props.handleStart}>Старт
                    </button>
                    <button type='button' className='btn btn-danger' disabled={!props.runningStatus}
                            onClick={props.handleStop}>Стоп
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Timer;