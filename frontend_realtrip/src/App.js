import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignIn from './components/SignIn';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div id='App'>
        <main>
          <Navbar />
        </main>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/sign-in' component={SignIn} />
        </Switch>
      </div>
    )
  }
}

export default App;