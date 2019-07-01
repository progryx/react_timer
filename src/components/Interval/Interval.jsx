import React from "react";

const Interval = (props) => {
    return (
        <div>
            <span>Интервал обновления секундомера: {props.currentInterval} сек.</span>
            <span>
          <button onClick={() =>{ props.changeInterval(-1) }}>-</button>
          <button onClick={() => { props.changeInterval(1) } }>+</button>
        </span>
        </div>
    )
}

export default Interval;