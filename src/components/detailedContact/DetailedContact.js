import React from 'react'
import countryList from 'country-list'
import { EditButton } from '../editButton/EditButton'

import './detailedContact.css'

export const DetailedContact = ({ contact }) => (
  <div className='details-wrapper'>
    <div className='details-wrapper_line last-name'>{contact.lastName}</div>
    <div className='details-wrapper_line first-name'>{contact.firstName}</div>
    <div className='details-wrapper_line email'>{contact.email}</div>
    <div className='details-wrapper_line country'>{countryList.getName(contact.country)}</div>
    <EditButton contact={contact}/>
  </div>
)