import React, { Component } from 'react';

class MainContainer extends Component {
  render(){
    return(
      <h1> Hello {this.props.username}</h1>
    )
  }
}

export default MainContainer
