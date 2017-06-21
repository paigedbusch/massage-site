import React, { Component } from 'react';
import Home from "./Home/home.js";
import NavBar from "./Home/navbar.js";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Avery's Massage Thing</h2>
          <NavBar></NavBar>
        </div>
        <p className="App-intro">
          Stuff about Avery, stuff about massage stuff.
        </p>
      </div>
    );
  }
}

export default App;
