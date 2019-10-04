import React, { Component } from 'react';
import './App.css';
import myPic from './micah.jpg'




class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Micah Elinor Feras</h2>
          <img src={myPic} className="Main-pic" alt="selfpic" width="193.7" height="265.6" align="right"/>
        </div>
        <p className="App-intro" align="left">
            Nice to meet you!<br></br>
            I am junior Electrical Engineering and Computer Science student at Berkeley.<br></br>
            I am passionate about renewable technology, power systems, and software development.
        </p>
      </div>
    );
  }
}

export default App;
