import React, { Component, useState } from "react";
import "../styles/App.css";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 0, x: 0, y: 0, started: false };
    this.timerInterval = null;
    this.keyListener = this.keyListener.bind(this);
    this.gameStart = this.gameStart.bind(this);
  }

    keyListener(evt)  {
    console.log(evt);
    if (this.state.started) {
      if (evt.keyCode === 37) {
        this.setState({ x: this.state.x - 5 })
      }
      else if (evt.keyCode === 38) {
        this.setState({ y: this.state.y - 5 })
      }
      else if (evt.keyCode === 39) {
        this.setState({ x: this.state.x + 5 })
      }
      else if (evt.keyCode === 40) {
        this.setState({ y: this.state.y + 5 })
      }

    }
  }
  gameStart()  {    
    console.log ( "...sahib...");
    this.setState({  started: true });
   this.timerInterval = setInterval(() =>
      this.setState({ time: this.state.time + 1 }), 1 * 1000);
    
      document.addEventListener("keydown", this.keyListener);
  }
  componentDidMount() {
    //document.addEventListener("keydown", this.keyListener);
  }
  componentDidUpdate() {
    if (this.state.x === 250 && this.state.y === 250) {
      clearInterval(this.timerInterval); document.removeEventListener("keydown", this.keyListener);
    }
  }

  componentWillUnmount() {
    //document.removeEventListener("keydown", this.keyListener);
  }



  render() {
    return (
      <>
        {!this.state.started ? <button className='start' onClick={this.gameStart}> click me</button> :
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
