import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import countryList from 'country-list'

const DetailContact = ({ contact }) => (
  <div>
    <div className='contact-line_last-name'>{contact.lastName}</div>
    <div className='contact-line_first-name'>{contact.firstName}</div>
    <div className='contact-line_email'>{contact.email}</div>
    <div className='contact-line_country'>{countryList.getName(contact.country)}</div>
  </div>
)

function mapStateToProps(state, props) {
	return {
		contact: state.contacts.find(contact => {
      return contact._id === props.match.params.id})
	}
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({

	}, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailContact))