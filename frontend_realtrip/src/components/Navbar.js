import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux';
import '../stylesheets/Navbar.scss';
import logo from '../image/logo.png'
import {logoutUser} from '../actions/authActions';
import App from '../App';


import {Dropdown} from 'react-bootstrap'

class Navbar extends Component {

  state = { myAc: true,
    guideDrop: true }

  handleClick = event => {
    event.preventDefault()
    // Remove the token from localStorage
    localStorage.removeItem("token")
    // Remove the user object from the Redux store
    this.props.logoutUser()
  }

  render() {
    console.log(this.state)
    return (
    <div id="app" className="container">
      <div id="navbar" >
        <Link className="navbar-brand " to="/"><img id="logo" src={logo} alt="Real Trip logo" /></Link>
        <div className='log-btns'>
          <div className='navbar-item'><Link to='/'>Home</Link></div>
          <div className='navbar-item'><Link to='/thingstodo'>Things To Do</Link></div>
          {
           this.props.loggedIn ? 
            <Fragment>
              {
                this.props.currentUser && this.props.currentUser.to_be_guide &&
                <Dropdown>
                  <button onClick={()=> this.setState({ guideDrop: !this.state.guideDrop}) }>Become Guide</button>
                  <div hidden={this.state.guideDrop}>
                    <Dropdown.Menu show={true} >
                      <Dropdown.Item eventKey="1" href="/schedule">My Schedules</Dropdown.Item>
                      <Dropdown.Item eventKey="2" href="/TourForm">Make New Tour</Dropdown.Item>
                    </Dropdown.Menu>
                  </div>
                </Dropdown>
              }

              <Dropdown>
                <button onClick={()=> this.setState({ myAc: !this.state.myAc }) }>My Account</button>
                <div hidden={this.state.myAc}>
                  <Dropdown.Menu show={true} >
                    <Dropdown.Item eventKey="1" href="/profile">Personal Info</Dropdown.Item>
                    <Dropdown.Item eventKey="2" href="/mytrips">My Trips</Dropdown.Item>
                  </Dropdown.Menu>
                </div>
              </Dropdown>

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
