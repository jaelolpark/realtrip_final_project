import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss';
import logo from '../../logo.png'

let loggedIn = false;

export default function Navbar() {
  return (
    <div class="container">
      <div id="navbar" >
        <Link class="navbar-brand " to="/">
          <img id="logo" src={logo} alt="Real Trip logo" />
        </Link>
        
        <div className='log-btns'>
          <div className='navbar-item'><Link to='/'>Become a Partner</Link></div>
          {
            loggedIn ?
            <Fragment>
              <div className='navbar-item'><Link to='/'>Sign-out</Link></div>
            </Fragment>
            :
            <Fragment>
              <div className='navbar-item'><Link to='/sign-in'>Sign-in</Link></div>
              <div className='navbar-item'><Link to='/'>Sign-up</Link></div>
            </Fragment>
          }
        </div>
      </div> 
    </div>
  )
}
