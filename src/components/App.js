import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import './App.css';

class App extends Component {
  // constructor() {
  //   super();

  //   //   this.state = {
  //   //     result: '',
  //   //   };
  // }
  // handleClick = buttonName => {
  //   this.state = 0;
  // };

  render() {
    return (
      <div className="container">
        <div className="display">
          <Display />
        </div>
        <div className="button-panel">
          <ButtonPanel handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;
