import React from 'react'
import { Link } from 'react-router-dom'
import countryList from 'country-list'
import { EditButton } from '../editButton/EditButton'

export const DetailedContact = ({ contact }) => {
  if(contact) {
    return (
    
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
  } else {
    return (
      <div className='column'>
        <Link className='button is-danger is-fullwidth is-large' to='/'>There is no contact with this ID! Back to Contact List</Link>
      </div>
    )
  }
}
