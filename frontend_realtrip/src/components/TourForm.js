import React, { Component } from 'react'
import { connect } from 'react-redux';
import {createTour} from '../actions/tourActions';


import '../stylesheets/TourForm.scss'


export default class TourForm extends Component {

  state = {
    title: '',
    detail: '',
    second_language: '',
    number_of_ppl: '',
    price: '',
    location: '',
    include: '',
    exclude: '',
    image_url: '',
    start_time: '',
    end_time: ''
  }
  
  render() {
    return (
        <div className='tourCard'>
          <h1> Add Tour</h1>
        </div>
    )
  }
}
