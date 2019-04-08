import React from 'react'
import { Link } from 'react-router-dom'
import './detailsButton.css'


export const DetailsButton = ({ contact }) => (
  <Link to={`user/${contact._id}`} className='details-button'>
    Details
  </Link>
)