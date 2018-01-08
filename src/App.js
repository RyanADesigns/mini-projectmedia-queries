import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      isAnimON: false
    }
  }

  toggleAnimation(){
    this.setState({
      isAnimON: !this.state.isAnimON
    })
  }
  render() {
    return (
      <div className="App">
        <div className="nav">
        <div>START BOOTSTRAP</div>
        <div className="words">ABOUT DOWNLOAD CONTACT</div>
        <button className="menu"> menu </button>
        </div>
        <div className="content">
          <h1> CSS ANIMATIIONS </h1>
          <button onClick={() => this.toggleAnimation()}>click me</button>
          <div className={this.state.isAnimON ? "square animation1": "square"}> </div>
         
          <div className="circle animation2"></div>

          
        </div>
        
      </div>
    );
  }
}

export default App;
