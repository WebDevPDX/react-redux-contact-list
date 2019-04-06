import React, { Component }from 'react'
import { AddButton } from '../addButton/AddButton'
import { DetailsButton } from'../../components/detailsButton/DetailsButton'
import { DeleteButton } from '../../components/deleteButton/DeleteButton'
import './contactsList.css'

class ContactsList extends Component {

  deleteHandler(contact) {
    this.props.deleteThisContact(contact)
  }

  createContactLine(contact) {
    return(
      <div className='contact-line' key={contact._id}>
        <div className='contact-line_last-name'>{contact.lastName}</div>
        <div className='contact-line_first-name'>{contact.firstName}</div>
        <DetailsButton contact={contact}/>
        <DeleteButton deleteContact={() => this.deleteHandler(contact)}/>
      </div>
    )
  }

  render () {
    return (
      <div className='contacts-list'>
        <AddButton />
        {this.props.contacts.map(contact => this.createContactLine(contact))}
      </div>
    )
  }  
}

export default ContactsList