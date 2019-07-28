import React, { Component } from 'react';
import { connect } from 'react-redux';
import {createUser} from '../actions/authActions';
import '../stylesheets/SignUp.scss'

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
      <div class="container">
    <div class="signup-row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signup my-5">
          <div class="card-body">
            <h5 class="card-title text-center">Sign Up</h5>
      <form class="form-signup" onSubmit={this.handleSubmit}>
              <div class="form-label-group">
              <label>First name</label>
                <input name='first_name' placeholder='First Name' class="form-control" value={this.state.first_name} onChange={this.handleChange}/>
              </div>
    <br/>
              <div class="form-label-group">
              <label>Last name</label>
                <input name='last_name' placeholder='Last Name' class="form-control" value={this.state.last_name} onChange={this.handleChange}/>
              </div>
    <br/>
              <div class="form-label-group">
              <label>Username</label>
              <input name='username' placeholder='Username' class="form-control" value={this.state.username} onChange={this.handleChange}/>
              </div>
    <br/>
              <div class="form-label-group">
              <label>Password</label>
                <input type='password' name='password' placeholder='Password' class="form-control" value={this.state.password} onChange={this.handleChange}/>
                <br/>
              </div>
              <br/>
              <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
            </form>     
            </div>
        </div>
      </div>
    </div>
  </div> 
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createUser: userInfo => dispatch(createUser(userInfo))
})

export default connect(null, mapDispatchToProps)(SignUp);