import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      nextVal: null,
      result: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { nextVal, result, operation } = this.state;
    this.setState(calculate({ nextVal, result, operation }, buttonName));
  }

  render() {
    const { nextVal, result } = this.state;

    return (
      <div className="container">
        <h1>Calculator</h1>
        <div className="display">
          <Display result={nextVal || result || '0'} />
        </div>
        <div className="button-panel">
          <ButtonPanel handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;
