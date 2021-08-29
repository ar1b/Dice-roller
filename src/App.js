import React, { Component } from 'react';
import Die from './die';
import RollDie from './roledie'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <RollDie />
      </div>
    );
  }
}

export default App;