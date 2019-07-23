import React from 'react'

export default function TourCard (props) {
  return(
    <div className="tour-card" style={{ backgroundImage: `url(${props.tour.image_url})` }}>
      <p className='price'>${props.tour.price}</p>
      <h5 className='heading'>{props.tour.title}</h5>
    </div>
  ) 
}
