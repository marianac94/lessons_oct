import React, { Component } from 'react';

import { Button, Form, Grid, Segment } from 'semantic-ui-react';

class Login extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password: ''
    }
  }
  handleInput = (e) => {
    console.log(e.currentTarget.name, e.currentTarget.value);
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // ^ to stop page from refreshing
    this.props.handleLogin(this.state.username, true);
  }
  render(){
    console.log(this.props, ' props in Login Component');
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          fluid icon="user" iconPosition="left"
          type="text"
          name="username"
          onChange={this.handleInput}
          value={this.state.username}
          placeholder="username"
        />

        <Form.Input
          fluid icon="lock" iconPosition="left"
          type="password"
          name="password"
          onChange={this.handleInput}
          value={this.state.password}
          placeholder="password"
        />

      <Button
        color="green"
        fluid size="large"
        type="Submit">
          Login
      </Button>

    </Form>
    );
  }
}

export default Login;
