import React from 'react'
import './detailsButton.css'


export const DetailsButton = ({ showDetails }) => (
  <button className='details-button' onClick={showDetails}>Details</button>
)