import React from "react";
import style from './interval.module.css';

const Interval = (props) => {
    return (
        <div className={style.wrapper}>
            <h5 className='card-title'>Интервал обновления секундомера: {props.currentInterval} сек.</h5>
            <fieldset disabled={props.runningStatus}>
                <div className='btn-group' >
                    <button type='button' className='btn btn-info' disabled={props.disabledInterval} onClick={() => {
                        props.changeInterval(-1)
                    }}>-
                    </button>
                    <button type='button' className='btn btn-info' onClick={() => {
                        props.changeInterval(1)
                    }}>+
                    </button>
                </div>
            </fieldset>
        </div>
    )
}

export default Interval;