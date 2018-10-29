import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';

class App extends Component {
  constructor(){
  // The constructor allows us to initilize the state of our componenent, the initial values of out componen in our app.

  // Initializes the Component's (the thing we are inheriting from) contructor, which allows to use this inside of the constructor, this is what super() is doing.
  super();
    this.state = {
      name: 'Cassandra',
      age: 94,
      count: 0,
      pokets: ['watch', 'phone', 'wallet']
    }
  }
  handleCount = (e) => {
    // arrow functions automatically bind this for us, which means we can use this inside of this function this instead of doing the commented out code in the constructor
    this.setState({
      count: this.state.count + 1
    });
    // this.setState merges the object you pass into it, with the current state, in the component that you are inside of, in our case the App component. After this.setState is called the app rerenders with the updated state, so basically the render method is called ago.
  }
  render() {
    return (
      <div className="App">
        <Header name={this.state.name} age={this.state.age}/>
        <p>The Count: {this.state.count}</p>
        <button onClick={this.handleCount}>Count {this.state.name}</button>
      </div>
    );
  }
}

export default App;
