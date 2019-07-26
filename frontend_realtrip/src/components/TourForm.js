import React, { Component } from 'react'
import { connect } from 'react-redux';
import {createTour} from '../actions/tourActions';
import '../stylesheets/TourForm.scss'

import '../stylesheets/TourForm.scss'


export default class TourForm extends Component {

  state = {
    title: '',
    details: '',
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

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.createUser(this.state)
  }
  
  render() {
    return (
      <div class="container">
      <div class="tourform-row">
      <h1 class="card-title text-center">Make New Tour</h1>
      <br/>
      <br/>
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <form onSubmit={this.handleSubmit}>
        <div class="form-group">
            <label>Location</label>
            <input name="location" type="location" class="form-control" id="location" value={this.state.location} onChange={this.handleChange} placeholder="Location"/>
          </div>
          <div class="form-group">
            <label>Tour Title</label>
            <input name='title' type="tourTitle" class="form-control" id="tourTitle" value={this.state.title} onChange={this.handleChange} placeholder="Tour Title"/>
          </div>
          <div class="form-group">
            <label>Tour Details</label>
            <textarea name="details" class="form-control" id="exampleFormControlTextarea1" value={this.state.details} onChange={this.handleChange} rows="3"></textarea>
          </div>
          <div class="form-group">
            <label>Image file</label>
            <div class="custom-file">
              <input type="file" class="custom-efile-input" id="customFile" value={this.state.image_url} onChange={this.handleChange}/>
              <label class="custom-file-label" for="customFile">Choose file</label>
            </div>
          </div>
          <div class="form-group">
            <label>Price per Person($)</label>
            <input name="price" type="price" class="form-control" id="price" value={this.state.price} onChange={this.handleChange} placeholder="Price per Person($)"/>
          </div>
          <div class="form-group">
            <label>Includes</label>
            <input name="include" type="include" class="form-control" id="include" value={this.state.include} onChange={this.handleChange} placeholder="Includes"/>
          </div>
          <div class="form-group">
            <label>Excludes</label>
            <input name="exclude" type="exclude" class="form-control" id="exclude" value={this.state.exclude} onChange={this.handleChange} placeholder="Excludes"/>
          </div>
          <div class="form-group">
            <label>Maximum number of Tourist</label>
            <select name="number_of_ppl" class="form-control" value={this.state.number_of_ppl} onChange={this.handleChange}>
              <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option>
            </select>
          </div>
          
          <br/>
          <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Complete</button>
        </form>
      </div>
      </div>
      </div> 
    )
  }
}
