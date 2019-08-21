import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';

class Schedule extends Component {

  state = { showSchedule: false }

  render() {

    if (!this.props.currentUser.id)
      return null

    let user = this.props.currentUser

    const myTours = user.my_tours.map( tour => (
      <Link to={ '/tours/'+tour.id } >
        <div onClick={()=>this.setState({ showSchedule: tour})} key={tour.id} className="tour-card" style={{ backgroundImage: `url(${tour.image_url})` }}>
          <h5 className='heading'>{tour.title}</h5>
        </div>
      </Link>
    ))
  
    return (
      <div class="tour-container">
        {myTours}
      </div>
    
    )
  }
}

let mapStateToProps = state => ({ currentUser: state.auth.currentUser })
export default connect(mapStateToProps)(Schedule)