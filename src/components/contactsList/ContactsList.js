import React, { Component }from 'react'
import { AddButton } from '../addButton/AddButton'
import { DetailsButton } from'../../components/detailsButton/DetailsButton'
import { DeleteButton } from '../../components/deleteButton/DeleteButton'

class ContactsList extends Component {

  deleteHandler(contact) {
    this.props.deleteContact(contact)
  }

  createContactLine(contact) {
    return(
      <div className='box' key={contact._id}>
      <div className='columns'>
        <div className='column'>
          <div className='columns is-mobile'>
            <div className='column'>{contact.lastName}</div>
            <div className='column'>{contact.firstName}</div>
          </div>
        </div>
        <div className='column'>
          <div className='columns is-mobile'>
            <div className='column'>
              <DetailsButton contact={contact}/>
            </div>
            <div className='column'>
              <DeleteButton deleteContact={() => this.deleteHandler(contact)}/>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }

  render () {
    return (
      <div className=''>
        <div className='column'>
          <AddButton />
        </div>
        <div className='column'>
          {this.props.contacts.map(contact => this.createContactLine(contact))}
        </div>
      </div>
    )
  }  
}

export default ContactsList