// React
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getProfileFetch } from './actions/authActions';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import Schedule from './components/Schedule';
import tourForm from './components/TourForm';
import Mytrips from './components/Mytrips';
import ThingsTodo from './components/ThingsTodo';
import TourPage from './components/TourPage';
import Edit_Profile from './components/Edit_Profile'
// Redux
import {connect} from 'react-redux';

// CSS
import './App.scss';

class App extends Component {
  
componentDidMount(){
  let token = localStorage.getItem('token')
  if(token) {
    this.props.findUser()
  }
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
            <Route exact path='/tourForm' component={tourForm} />
            <Route exact path='/schedule' component={Schedule} />
            <Route exact path='/mytrips' component={Mytrips} />
            <Route exact path='/thingstodo' component={ThingsTodo} />
            <Route exact path='/edit_profile' component={Edit_Profile} />
            {/* <Route path='/sign-in' component={SignIn} /> */}
            <Route path='/sign-in' render={() => this.props.loggedIn ? <Redirect to='/mytrips' /> :  <SignIn /> } />

            <Route path='/sign-up' render={() => this.props.loggedIn ? <Redirect to='/mytrips' /> :  <SignUp /> } />
            {/* <Route path='/sign-up' component={SignUp} /> */}

            {/* <Route path='/profile' component={Profile} /> */}
            <Route path='/profile' render={() => this.props.loggedIn ? <Profile /> : <Redirect to='/sign-in' /> } />
            <Route path='/tours/:id' render={ props => <TourPage tour_id={props.match.params.id} /> } />
          </Switch>
        </div>
    )
  }
}
const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn 
})

const mapDispatchToProps = dispatch => {
  return {
    findUser: () => dispatch(getProfileFetch())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);