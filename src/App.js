import React, { Component } from "react";
import logo from "./logo.svg";
import "./scss/main.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo1" />
          <h2>Welcome to React!</h2>
        </div>
        <p className="App-intro">
          <i className="fa fa-pencil" />To get started, edit{" "}
          <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
