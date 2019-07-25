import React, { Component } from 'react';
import { connect } from 'react-redux';
import {createUser} from '../actions/authActions';

class SignUp extends Component {
  state = {
    first_name: '',
    last_name: '',
    username: '',
    password: '',
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.createUser(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Sign Up For An Account</h1>

        <label>First Name</label>
        <input
          name='first_name'
          placeholder='First Name'
          value={this.state.first_name}

          onChange={this.handleChange}
          /><br/>
        <label>Last Name</label>
        <input
          name='last_name'
          placeholder='Last Name'
          value={this.state.last_name}
          onChange={this.handleChange}
          /><br/>
        <label>Username</label>
        <input
          name='username'
          placeholder='Username'
          value={this.state.username}
          onChange={this.handleChange}
          /><br/>
        <label>Password</label>
        <input
          name='password'
          type='password'
          placeholder='Password'
          value={this.state.password}
          onChange={this.handleChange}
          /><br/>
        <input type='submit'/>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createUser: userInfo => dispatch(createUser(userInfo))
})

export default connect(null, mapDispatchToProps)(SignUp);