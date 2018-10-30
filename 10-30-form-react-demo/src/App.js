import React, { Component } from 'react';
import logo from './logo.svg';
import Login from './Login';
import MainContainer from './MainContainer';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      logged: false,
      username: ''
    }
  }
  handleLogin = (username, isLoggedIn) => {
    console.log(username, isLoggedIn, ' in hangleLogin');

    this.setState({
      username: username,
      logged: isLoggedIn
    });
  }
  render() {
    console.log(this.state);
    return (
      <div className="App">
        {this.state.logged ? <MainContainer username={this.state.username}/> : <Login handleLogin={this.handleLogin} />}
      </div>
    );
  }
}

export default App;
