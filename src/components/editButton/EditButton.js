import React from 'react'
import { Link } from 'react-router-dom'
import './editButton.css'


export const EditButton = ({ contact }) => (
  <Link to={`edit/${contact._id}`} className='add-button'>
    Edit
  </Link>
)