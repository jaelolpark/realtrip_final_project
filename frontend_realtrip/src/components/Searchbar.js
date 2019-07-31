import React, { Component } from 'react'
import '../stylesheets/Searchbar.scss'


export default class Searchbar extends Component {
  render() {
    return (
      <div id="Searchbar">
        <h1 id='title'>Where To Go?</h1>

        <div id='search'>
          <input type="text" placeholder="Search 'Destination'" aria-label="Search"></input>
          <button type="submit">Search</button>
        </div>
      </div>
    )
  }
}
