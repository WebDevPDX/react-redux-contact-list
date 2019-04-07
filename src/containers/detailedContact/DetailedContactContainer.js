import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { DetailedContact } from '../../components/detailedContact/DetailedContact'


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

const DetailedContactContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailedContact))

export default DetailedContactContainer