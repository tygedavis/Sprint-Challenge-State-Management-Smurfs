import React, { Component } from "react";

//Components
import Form from './Form';
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
