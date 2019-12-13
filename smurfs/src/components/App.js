import React, { Component } from "react";

//Component
import SmurfCards from './SmurfCards';

import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Your Smurf Village!</h1>
        <SmurfCards />
        {/* <Form /> */}
      </div>
    );
  }
}

export default App;
