import React, { Component } from 'react'
import { connect } from 'react-redux'

class Mytrips extends Component {
  render() {

    if (!this.props.currentUser.id)
      return null

    let user = this.props.currentUser

    const myBookings = user.tours.map( tour => (
      <div key={tour.id} className="tour-card" style={{ backgroundImage: `url(${tour.image_url})` }}>
      <h5 className='heading'>{tour.title}</h5>
    </div>
    ))

    return (
      <div>
        <div class="tour-container">
        { myBookings }
        </div>
      </div>
    )
  }
}

let mapStateToProps = state => ({ currentUser: state.auth.currentUser })
export default connect(mapStateToProps)(Mytrips)
