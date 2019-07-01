import {changeInterval} from "../../slomux/reducer";
import React from "react";
import connect from "../../slomux/connect";
import Interval from "./Interval";

class IntervalComponent extends React.Component {
    render() {
        return (
            <Interval {...this.props} />
        )
    }
}

export default connect((state) => { return { currentInterval: state.currentInterval } },(dispatch) => {
    return {
        changeInterval: (value) => { dispatch(changeInterval(value))} // диспатчим по экшену changeInterval
    }
})(IntervalComponent); // оборачиваем IntervalComponent