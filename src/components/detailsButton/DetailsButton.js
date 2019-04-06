import React from 'react'
import { NavLink } from 'react-router-dom'
import './detailsButton.css'


export const DetailsButton = ({ contact }) => (
  <NavLink to='user' className='details-link'>
    <button className='details-button'>Details</button>
  </NavLink>
)