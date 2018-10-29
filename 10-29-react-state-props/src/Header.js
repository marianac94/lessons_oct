import React, { Component } from 'react';

class Header extends Component {
  render() {
    console.log(this.props, '<--- this is props (objects)');

    return(
      <header>
        <ul>
          <li><a href="">Login</a></li>
          <li>Name: {this.props.name}</li>
          <li>Age: {this.props.age}</li>
        </ul>
      </header>
    )
  }
}

export default Header;
