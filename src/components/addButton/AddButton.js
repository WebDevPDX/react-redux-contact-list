import React from 'react'
import { Link } from 'react-router-dom'
import './addButton.css'


export const AddButton = () => (
  <Link to='add' className='add-button'>
    Add Contact
  </Link>
)