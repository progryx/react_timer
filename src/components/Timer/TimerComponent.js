import React from "react";
import connect from "../../slomux/connect";
import IntervalComponent from "../Interval/IntervalComponent";
import Timer from "./Timer";

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

    handleStart = () => {
        this.intervalID = setInterval(() => this.setState({
            currentTime: this.state.currentTime + this.props.currentInterval,
        }), this.props.currentInterval+'000') // интервал будет работать через каждые currentInterval секунд.
    }

    handleStop = () => {
        this.setState({ currentTime: 0 }); // обнуляем стейт
        clearInterval(this.intervalID); // останавливаем отсчет
    }
}


export default connect((state) => { return { currentInterval: state.currentInterval } }, () => {})(TimerContainer);