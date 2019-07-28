import React, { Component } from 'react'
import Searchbar from "./Searchbar"
import { connect } from 'react-redux';
import { fetchTours } from '../actions/tourActions';

import '../stylesheets/Home.scss'


class Home extends Component {
  componentDidMount() {
    this.props.fetchTours();
  }

  render() {
    const tourCards = this.props.tours.map( tour => (
      <div className="tour-card" style={{ backgroundImage: `url(${tour.image_url})` }}>
      <p className='price'>${tour.price}</p>
      <h5 className='heading'>{tour.title}</h5>
    </div>
    ))
    return (
      <div id="home">
        <div >
          <Searchbar />
        </div>

        <div className='tour-container'>
          { tourCards }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  tours: state.tours.tours
});

export default connect(mapStateToProps, {fetchTours})(Home)

