import React, { Component } from 'react'
import {connect} from 'react-redux';
import {getProfileFetch} from '../actions/authActions';

class Profile extends Component {
  render() {
    console.log(this.props.currentUser)
    return (
      <div className="profile">
        <h1>My Profile</h1>
      </div>
    )
  }
}

const mapDispatchToProps = state => ({
  currentUser: state.auth.currentUser
})

export default connect(mapDispatchToProps, {getProfileFetch})(Profile);