import React from 'react'
import countryList from 'country-list'
import { EditButton } from '../editButton/EditButton'

export const DetailedContact = ({ contact }) => (
  <div>
    <div className='contact-line_last-name'>{contact.lastName}</div>
    <div className='contact-line_first-name'>{contact.firstName}</div>
    <div className='contact-line_email'>{contact.email}</div>
    <div className='contact-line_country'>{countryList.getName(contact.country)}</div>
    <EditButton contact={contact}/>
  </div>
)