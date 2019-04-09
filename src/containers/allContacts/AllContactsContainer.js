import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ContactsList from '../../components/contactsList/ContactsList'
import { deleteContact } from '../../actions/deleteContact'

function mapStateToProps(state) {
	return {
		contacts: state.contacts
	}
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({
    deleteContact: deleteContact
	}, dispatch)
}

const AllContactsContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(ContactsList))

export default AllContactsContainer;