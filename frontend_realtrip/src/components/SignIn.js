import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLoginFetch } from '../actions/authActions';
import { withRouter } from 'react-router-dom';
import '../stylesheets/SignIn.scss'

class SignIn extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.userLoginFetch(this.state)
    this.props.history.push('/profile')
  }

  render() {
    console.log(this.props.history)
    return (
      <div class="container">
    <div class="signin-row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <div class="signin">
            <h5 class="card-title text-center">Sign In</h5>
      <form class="form-signin" onSubmit={this.handleSubmit}>
              <div class="form-label-group">
              <label>Username</label>

                <input name='username' placeholder='Username' class="form-control" value={this.state.username} onChange={this.handleChange}
          />
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
  </div> 
    )
  }
}

const mapDispatchToProps = dispatch => ({
userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
})

export default withRouter(connect(null, mapDispatchToProps)(SignIn));