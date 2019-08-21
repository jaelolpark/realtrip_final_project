import React, { Component } from 'react'
import { connect } from 'react-redux'

export default class TourPage extends Component {

  state = { tour: null }

  componentDidMount() {
    fetch('http://localhost:3000/tours/'+this.props.tour_id)
    .then(res => res.json())
    .then(res => {
      this.setState({ tour: res })
    })
  }
  render() {
    if (!this.state.tour)
      return null

    let tour = this.state.tour
    
    return (
      
      <div>
        <h1>{tour.title}</h1>
   

      </div>
    )
  }
}
