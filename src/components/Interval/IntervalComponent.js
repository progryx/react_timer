
//imports
import {changeInterval} from "../../slomux/reducer";
import React from "react";
import connect from "../../slomux/connect";
import Interval from "./Interval";

//main function (container component)


class IntervalComponent extends React.PureComponent {
    render() {
        return (
            <Interval {...this.props} />
        )
    }
}

export default connect((state) => { return { currentInterval: state.currentInterval, disabledInterval: state.disabledInterval, runningStatus: state.runningStatus } },(dispatch) => {
    return {
        changeInterval: (value) => { dispatch(changeInterval(value))} // диспатчим по экшену changeInterval
    }
})(IntervalComponent); // оборачиваем IntervalComponent