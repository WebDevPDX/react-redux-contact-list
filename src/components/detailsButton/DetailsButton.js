import React from 'react'
import { Link } from 'react-router-dom'


export const DetailsButton = ({ contact }) => (
  <Link to={`user/${contact._id}`} className='button is-primary'>
    Details
  </Link>
)