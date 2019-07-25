import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux';
import '../stylesheets/Navbar.scss';
import logo from '../image/logo.png'
import {logoutUser} from '../actions/authActions';
import App from '../App';

class Navbar extends Component {

  handleClick = event => {
    event.preventDefault()
    // Remove the token from localStorage
    localStorage.removeItem("token")
    // Remove the user object from the Redux store
    this.props.logoutUser()
  }
  render() {
    return (
    <div id="app" class="container">
      <div id="navbar" >
        <Link class="navbar-brand " to="/"><img id="logo" src={logo} alt="Real Trip logo" /></Link>
        <div className='log-btns'>
          <div className='navbar-item'><Link to='/'>Home</Link></div>
          <div className='navbar-item'><Link to='/'>Things To Do</Link></div>
          <div className='navbar-item'><Link to='/'>Become a Partner</Link></div>
          {
           this.props.loggedIn ? 
            <Fragment>
              <div className='navbar-item'><Link to='/profile'>My Profile</Link></div>
              <div className='navbar-item' onClick={this.handleClick}><Link to='/'>Sign-out</Link></div>
            </Fragment>
            :
            <Fragment>
              <div className='navbar-item'><Link to='/sign-in'>Sign-in</Link></div>
              <div className='navbar-item'><Link to='/sign-up'>Sign-up</Link></div>
            </Fragment>
          }
        </div>
      </div> 
    </div>
    ) 
  }
}
const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  loggedIn: state.auth.loggedIn
})

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
