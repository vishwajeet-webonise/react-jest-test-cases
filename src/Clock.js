import React from "react";

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.tiemrId = setInterval(() => this.tick(), 1000);
    if (this.props.stop) {
      setTimeout(() => this.stopTick(), 5000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.tiemrId);
  }

  render() {
    {
      const showdate = this.props.stop;
      return (
        <div className="App">
          {showdate ? "showing date and time to stop : " : "only time : "}
          {showdate
            ? this.state.date.toString()
            : this.state.date.toTimeString()}
        </div>
      );
    }
  }

  tick = () => {
    this.setState({ date: new Date() });
  };

  stopTick = () => {
    clearInterval(this.tiemrId);
  };
}
