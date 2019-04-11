import React from 'react'


export const DeleteButton = ({ deleteContact }) => (
  <div className='button is-danger is-outlined' onClick={deleteContact}>Delete</div>
)