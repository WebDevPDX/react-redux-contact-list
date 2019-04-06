import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { DetailsButton } from'../../components/detailsButton/DetailsButton'
import { DeleteButton } from '../../components/deleteButton/DeleteButton'
import { deleteThisContact } from '../../actions/deleteThisContact'
import './allContacts.css'

class AllContacts extends Component {
  detailsHandler(contact) {
    console.log(contact)
  }
  deleteHandler(contact) {
    this.props.deleteThisContact(contact)
  }
  createContactLine(contact) {
    return(
      <div className='contact-line' key={contact._id}>
        <div className='contact-line_last-name'>{contact.lastname}</div>
        <div className='contact-line_first-name'>{contact.firstname}</div>
        <DetailsButton contact={contact}/>
        <DeleteButton deleteContact={() => this.deleteHandler(contact)}/>
      </div>
    )
  }
  render() {
    return (
      <div>
        {this.props.contacts.map(contact => this.createContactLine(contact))}
      </div>
    )
  } 
}

function mapStateToProps(state) {
	return {
		contacts: state.contacts
	}
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({
    deleteThisContact: deleteThisContact
	}, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AllContacts))