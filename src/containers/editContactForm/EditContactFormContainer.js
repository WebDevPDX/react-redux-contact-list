import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { editContact } from '../../actions/editContact'
import ContactForm from '../../components/contactForm/ContactForm'

function mapStateToProps(state, props) {
	return {
		contact: state.contacts.find(contact => {
      return contact._id === props.match.params.id})
	}
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({
    editThisContact: editContact
	}, dispatch)
}

const EditContactFormContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(ContactForm))

export default EditContactFormContainer;