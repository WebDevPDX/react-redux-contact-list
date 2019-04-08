import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { addNewContact } from '../../actions/addNewContact'
import ContactForm from '../../components/contactForm/ContactForm'

function mapStateToProps(state) {
	return {

	}
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({
    addContact: addNewContact
	}, dispatch)
}

const AddContactFormContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(ContactForm))

export default AddContactFormContainer;