// imports
import React from "react";
import connect from "../../slomux/connect";
import Timer from "./Timer";
import {toggleTimer} from "../../slomux/reducer";


//main function (container component)
class TimerContainer extends React.Component{
    state = {
        currentTime: 0
    };
    intervalID = 0;
    render() {
        //debugger;
        return (
           <Timer {...this.props}
                  currentTime={this.state.currentTime}
                  handleStart={this.handleStart}
                  handleStop={this.handleStop}
           />
        )
    }
    // start event
    handleStart = () => {
        this.props.toggleTimer(true);
        this.intervalID = setInterval(() => this.setState({
            currentTime: this.state.currentTime + this.props.currentInterval
        }), this.props.currentInterval+'000') // интервал будет работать через каждые currentInterval секунд.
    }
    //stop event
    handleStop = () => {
        this.props.toggleTimer(false);
        this.setState({ currentTime: 0}); // обнуляем стейт
        clearInterval(this.intervalID); // останавливаем отсчет
    }
}


export default connect((state) => { return { currentInterval: state.currentInterval, disabledInterval: state.disabledInterval, runningStatus: state.runningStatus } }, (dispatch) => {
    return {
        toggleTimer: (value) => { dispatch(toggleTimer(value))} // диспатчим по экшену changeInterval
    }
})(TimerContainer);