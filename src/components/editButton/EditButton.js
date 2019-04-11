import React from 'react'
import { Link } from 'react-router-dom'

export const EditButton = ({ contact }) => (
  <Link to={`edit/${contact._id}`} className='button is-primary is-fullwidth'>
    Edit
  </Link>
)