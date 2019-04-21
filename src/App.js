import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Troy qliao <code>src/App.js</code> y nachozzzz.
          </p>
          <a
            className="App-link"
            href="https://www.youtube.com/watch?v=iHqa6ojKnHI"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aprende React Qliao
          </a>
        </header>
      </div>
    );
  }
}

export default App;
