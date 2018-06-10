import React, { Component } from 'react';
import Projects from './components/Projects';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="Name">
          Omar Rahman
        </h1>
        <p className="Title">
          Software Developer
        </p>
        <button className="cv-button">
          Download CV
        </button>
        <Projects fart="a lot"/>        
      </div>
    );
  }
}

export default App;
