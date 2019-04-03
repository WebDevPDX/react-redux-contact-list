import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class ContactsList extends Component {
  createTableEntry(contact) {
    return (
      <tr key={contact._id}>
        <td>{contact.firstname}</td>
        <td>{contact.lastname}</td>
        <td>{contact.email}</td>
        <td>{contact.country}</td>
      </tr>
    )
  }
  render() {
    return (
      <table>
      <thead>
        <tr>
          <td>Last Name</td>
          <td>First Name</td>
          <td>Email</td>
          <td>Country</td>
        </tr>
      </thead>
      <tbody>
        {this.props.contacts.map(contact => this.createTableEntry(contact))}
      </tbody>
    </table>
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

	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList)