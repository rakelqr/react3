import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Lamp from './Lamp.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         Lamp.js
        </header>
        <Lamp on />
        <Lamp />
      </div>
    );
  }
}

export default App;
