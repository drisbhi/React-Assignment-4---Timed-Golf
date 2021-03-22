import React, { Component, useState } from "react";
import "../styles/App.css";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 0, x: 0, y: 0, started: false };
    this.timerInterval = null;
  }
  KeyListener = (evt) => {
    if (this.state.started) {
      if (evt.KeyCode === 37) {
        this.setState({ x: this.state.x - 5 })
      }
      else if (evt.KeyCode === 38) {
        this.setState({ y: this.state.y - 5 })
      }
      else if (evt.KeyCode === 39) {
        this.setState({ x: this.state.x + 5 })
      }
      else if (evt.KeyCode === 40) {
        this.setState({ y: this.state.y + 5 })
      }

    }
  }
  gameStart = () => {
    this.setState({
      started: true,
    });
    this.timerInterval = setInterval(() =>
      this.setState({ timer: this.state.time + 1 }), 1 * 1000);
    document.addEventListener("keydown", this.KeyListener);
  }
  componentDidMount() {

  }
  componentDidUpdate() {
    if (this.state.x === 250 && this.state.y === 250) {
      clearInterval(this.timerInterval); document.addEventListener("keydown", this.KeyListener);
    }
  }

  componentWillUnmount() {

  }



  render() {
    return (
      <>
        {!this.state.started ? <button className='start' onClick={this.gameStart}></button> :
          (<>
            <div className="ball" style={{ left: this.state.x + "px", top: this.state.y + 'px' }}> </div>
            <div className="hole" style={{ left: "250px", top: '250px' }}></div>
            <div className="heading-timer">{this.state.time}</div>
          </>
          )}
      </>
    );
  }
}

export default Timer;
