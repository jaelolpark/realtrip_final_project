import React, { Component } from 'react'
import {connect} from 'react-redux';
import {getProfileFetch} from '../actions/authActions';
import { Link } from 'react-router-dom';
import '../stylesheets/Profile.scss';
import {Button, Row} from 'react-bootstrap'

class Profile extends Component {
  render() {
    console.log(this.props.currentUser)
    return (
      <div className="profile">
      <div class="card flex-row flex-wrap">
      <div class="card">
  <img src={this.props.currentUser.avatar} class="card-img-top" alt="profile_pic"/>
  <div class="card-body">
    <h3 class="card-title">{this.props.currentUser.full_name}</h3>
    <h5 class="card-text">{this.props.currentUser.introduce}</h5>
    <p class="card-text">Second Language: {this.props.currentUser.second_language}</p>  
    <Row>
    <Link className='ml-auto' to='/edit_profile'><Button>Edit Profile</Button></Link>
    </Row>
  </div>
</div>
    </div>
        </div>

    )
  }
}

const mapDispatchToProps = state => ({
  currentUser: state.auth.currentUser
})

export default connect(mapDispatchToProps, {getProfileFetch})(Profile);