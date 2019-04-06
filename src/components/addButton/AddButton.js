import React from 'react'
import { NavLink } from 'react-router-dom'
import './addButton.css'


export const AddButton = () => (
  <NavLink to='add' className='add-button'>
    <button>Add Contact</button>
  </NavLink>
)