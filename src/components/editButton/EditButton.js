import React from 'react'
import { NavLink } from 'react-router-dom'
import './editButton.css'


export const EditButton = ({ contact }) => (
  <NavLink to={`edit/${contact._id}`} className='add-button'>
    <button>Edit</button>
  </NavLink>
)