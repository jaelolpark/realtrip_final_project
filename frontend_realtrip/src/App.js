// React
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getProfileFetch } from './actions/authActions';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Profile from './components/Profile';

// Redux
import {connect} from 'react-redux';

// CSS
import './App.scss';

class App extends Component {
  
componentDidMount(){
  // let token = localStorage.getItem('token')
  // if(token) {
  //   this.props.findUser()
  // }
}
  render() {
    console.log(this.props.currentUser)
    return (
        <div id='App'>
          <main>
            <Navbar />
          </main>
          <Switch>
            <Route exact path='/' component={Home} />
            
            {/* <Route path='/sign-in' component={SignIn} /> */}
            <Route path='/sign-in' render={() => this.props.loggedIn ? <Redirect to='/profile' /> :  <SignIn /> } />

            <Route path='/sign-up' render={() => this.props.loggedIn ? <Redirect to='/profile' /> :  <SignUp /> } />
            {/* <Route path='/sign-up' component={SignUp} /> */}

            {/* <Route path='/profile' component={Profile} /> */}
            <Route path='/profile' render={() => this.props.loggedIn ? <Profile /> : <Redirect to='/sign-in' /> } />
          </Switch>
        </div>
    )
  }
}
const mapStateToProps = state => ({
  // currentUser: state.auth.currentUser,
  loggedIn: state.auth.loggedIn
})

const mapDispatchToProps = dispatch => {
  return {
    findUser: () => dispatch(getProfileFetch())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);