import React from "react";
import style from './interval.module.css';

const Interval = (props) => {
    return (
        <div className={style.wrapper}>
            <h5 className='card-title'>Интервал обновления секундомера: {props.currentInterval} сек.</h5>
            <div className='btn-group'>
                <button className='btn btn-info' onClick={() => {
                    props.changeInterval(-1)
                }}>-
                </button>
                <button className='btn btn-info' onClick={() => {
                    props.changeInterval(1)
                }}>+
                </button>
            </div>
        </div>
    )
}

export default Interval;