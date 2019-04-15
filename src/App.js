import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/FunctionComponet';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div> <h1>Hello World!!</h1></div>       
        <Greet/>
      </div>
    );
  }
}

export default App;
