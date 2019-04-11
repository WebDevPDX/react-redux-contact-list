import React from 'react'
import countryList from 'country-list'
import { EditButton } from '../editButton/EditButton'

export const DetailedContact = ({ contact }) => (
  <div className='column'>
    <div className='box'>
      <div className='columns'>
        <div className='column is-hidden-mobile'>Last Name:</div>
        <div className='column'>{contact.lastName}</div>
      </div>
      <div className='columns'>
        <div className='column is-hidden-mobile'>First Name:</div>
        <div className='column'>{contact.firstName}</div>
      </div>
      <div className='columns'>
        <div className='column is-hidden-mobile'>Email:</div>
        <div className='column'>{contact.email}</div>
      </div>
      <div className='columns'>
        <div className='column is-hidden-mobile'>Contry:</div>
        <div className='column'>{countryList.getName(contact.country)}</div>
      </div>
    </div>
    <EditButton contact={contact}/>
    
  </div>
)
