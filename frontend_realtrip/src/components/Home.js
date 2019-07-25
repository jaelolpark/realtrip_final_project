import React, { Component } from 'react'
import Searchbar from "./Searchbar"
import TourCard from "./TourCard" 


import '../stylesheets/Home.scss'


export default class Home extends Component {

  state = { allTours: [] }

  componentDidMount() {
    fetch('http://localhost:3000/tours')
    .then(res  => res.json())
    .then(json => { this.setState({ allTours: json })
  })}
  
  render() {
    return (
      <div id="home">
        <div >
          <Searchbar />
        </div>

        <div className='tour-container'>
          { this.state.allTours.map(tour => <TourCard tour={tour} />) }
        </div>
      </div>
    )
  }
}
