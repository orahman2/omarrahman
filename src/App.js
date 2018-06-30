import React, { Component } from 'react';
import Projects from './components/Projects';
import BasicMap from './components/basic-map/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1 className="Name">
              Omar Rahman
            </h1>
          </div>
          <div className="col-md-12">
            <p className="Title">
              Software Developer
            </p>
          </div>
          <div className="col-md-12">
            <button className="btn btn-outline-primary">
              Download CV
            </button>
          </div>
          <div className="col-md-12">
            map of my life
          </div>
          <div className="col-md-12">
            <a target="_blank" href="http://github.com/orahman2" rel="noopener noreferrer" className="btn btn-primary">GitHub</a>
          </div>
          <div className="col-md-12">
            <script src="//platform.linkedin.com/in.js" type="text/javascript"></script>
            <script type="IN/MemberProfile" data-id="https://www.linkedin.com/in/omar-rahman-00708b110" data-format="inline" data-related="false"></script>
          </div>
          <div className="col-md-12">
          Projects:
            <Projects fart="a lot"/>
          </div>
          <BasicMap className="col-md-12"/>
        </div>
      </div>
    );
  }
}

export default App;
