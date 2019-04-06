import React from 'react'
import { NavLink } from 'react-router-dom'
import './detailsButton.css'


export const DetailsButton = ({ contact }) => (
  <NavLink to={`user/${contact._id}`} className='details-link'>
    <button className='details-button'>Details</button>
  </NavLink>
)