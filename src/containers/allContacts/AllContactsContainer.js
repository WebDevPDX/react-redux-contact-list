import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ContactsList from '../../components/contactsList/ContactsList'
import { deleteThisContact } from '../../actions/deleteThisContact'

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

const AllContactsContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(ContactsList))

export default AllContactsContainer;