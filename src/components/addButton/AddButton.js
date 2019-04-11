import React from 'react'
import { Link } from 'react-router-dom'


export const AddButton = () => (
  <Link to='add' className='button is-primary is-fullwidth'>
    Add Contact
  </Link>
)