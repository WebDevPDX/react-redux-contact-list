import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const DetailContact = ({ contact }) => (
  <div>
    <div className='contact-line_last-name'>{contact.lastName}</div>
    <div className='contact-line_first-name'>{contact.firstName}</div>
    <div className='contact-line_email'>{contact.firstName}</div>
    <div className='contact-line_country'>{contact.firstName}</div>
  </div>
)

function mapStateToProps(state, props) {
	return {
		contact: state.contacts.find(contact => {
      return contact._id === parseInt(props.match.params.id)})
	}
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({

	}, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailContact))