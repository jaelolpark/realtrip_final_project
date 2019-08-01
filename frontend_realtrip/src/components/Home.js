import React, { Component } from 'react'
import Searchbar from "./Searchbar"
import { connect } from 'react-redux';
import { fetchTours } from '../actions/tourActions';

import Modal from 'react-modal'

import PropTypes from 'prop-types';

import '../stylesheets/Home.scss'


class Home extends Component {
  componentDidMount() {
    this.props.fetchTours();
  }  

  state = { showTourModal: false }

  renderTourModal = ()=> {
    let tour = this.state.showTourModal
    Modal.setAppElement('#root')
    console.log(tour)
    return <Modal id='Tour-Modal' isOpen='true'>
      <div class="float-sm-right" id='guide_info'>
        <h3>Tour's Guide</h3>
        <img src={tour.guide.avatar} right width="200px" height="200px"/>
        <br/>
        Name: {tour.guide.full_name}
        <br/>
        Second_Language: {tour.guide.second_language}
      </div>
      <div>
        <img src={tour.image_url} center width="700px" height="450px"/>
      </div><br/>
      <div id='name'>
        <h3>{tour.title}</h3>
      </div>
      <div id='location'>
        <h5>Location: {tour.location}</h5>
      </div>
      <div id='details'>
        Details: {tour.details}
      </div><br/>
      <div id='second_language'> 
        Second Language: {tour.second_language}
      </div>
      <div id='price'>
        Price per Person: ${tour.price}
      </div>
      <div id='include'>
        Includes: {tour.include}
      </div>
      <div id='exclude'>
        Excludes: {tour.exclude}
      </div>
      <div id='ppl'>
        Maximum Number of Tourist: {tour.number_of_ppl}
      </div>

      <button id='close' onClick={()=> this.setState({showTourModal: false}) }>Close</button>
    </Modal>
  }
  render() {
    const tourCards = this.props.tours.map( tour => (
      <div onClick={()=> this.setState({ showTourModal: tour })} key={tour.id} className="tour-card" style={{ backgroundImage: `url(${tour.image_url})` }}>
      <p className='price'>${tour.price}</p>
      <h5 className='heading'>{tour.title}</h5>
    </div>
    ))
    return (
      <div id="home">
        {this.state.showTourModal && this.renderTourModal()}

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

Home.propTypes = {
  fetchTours: PropTypes.func.isRequired,
  tours: PropTypes.array.isRequired,
  newTour: PropTypes.object
};

const mapStateToProps = state => ({
  tours: state.tours.tours,
  newTour: state.tours.tour
});

export default connect(mapStateToProps, {fetchTours})(Home)

