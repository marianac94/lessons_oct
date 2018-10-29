import React, { Component } from 'react';
// This syntax right here ^ is called object destructering
import logo from './logo.svg';
import './App.css';

// calls the Hello.js
import Property from './Hello';
import Services from './Services';

// The stuff we are returning is called jsx, and this is a templating lenguage used in react.

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>CraigsList</h1>
          <Property />
          <Services />
      </div>
    );
  }
}

export default App;
