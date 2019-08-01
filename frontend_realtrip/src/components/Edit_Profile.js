import React, { Component } from 'react'
import {connect} from 'react-redux';
import {editUser} from '../actions/authActions';

class Edit_Profile extends Component {
  state = {
    // id: this.props.currentUser.id,
    // first_name: this.props.currentUser.first_name,
    // last_name: this.props.currentUser.last_name,
    // user_name: this.props.currentUser.username,
    // password: this.props.currentUser.password,
    // avatar: this.props.currentUser.avatar,
    // introduce: this.props.currentUser.introduce,
    // second_language: this.props.currentUser.second_language,
    // to_be_guide: this.props.currentUser.to_be_guide
  }



  componentDidMount() {
    this.setState({...this.props.user})
  }
  
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.editUser(this.state)
    this.props.history.push('/profile')
  }


  render() {
    console.log(this.state)
    return (
      <div>
        <div className="container">
        <div class="edit-row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signup my-5">
          <div class="card-body">
            <h3 class="card-title text-center">Edit My Info</h3>
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
              <label>Password</label>
                <input type='password' name='password' placeholder='Password' class="form-control" value={this.state.password} onChange={this.handleChange}/>
                <br/>
              </div>
              <div class="form-label-group">
              <label>Image URL</label>
                <input name='avatar' placeholder='Image URL' class="form-control" value={this.state.avatar} onChange={this.handleChange}/>
              </div>
    <br/>
    <div class="form-label-group">
              <label>Introduce</label>
                <input name='introduce' placeholder='Introduce' class="form-control" value={this.state.introduce} onChange={this.handleChange}/>
              </div>
    <br/>
    <div class="form-label-group">
              <label>Second Language</label>
                <input name='second_language' placeholder='Second Language' class="form-control" value={this.state.second_language} onChange={this.handleChange}/>
              </div>
    <br/>
              <br/>
              <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Complete</button>
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

let mapStateToProps = state => ({ user: state.auth.currentUser })

const mapDispatchToProps = dispatch => ({
  editUser: (userInfo) => dispatch(editUser(userInfo))
})

export default connect(null, mapDispatchToProps)(Edit_Profile);