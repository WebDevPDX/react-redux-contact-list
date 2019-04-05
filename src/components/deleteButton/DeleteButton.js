import React from 'react'
import './deleteButton.css'


export const DeleteButton = ({ deleteContact }) => (
  <button className='delete-button' onClick={deleteContact}>Delete</button>
)