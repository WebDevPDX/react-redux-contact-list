import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { DetailedContact } from '../../components/detailedContact/DetailedContact'


function mapStateToProps(state, props) {
	return {
		contact: state.contacts.find(contact => {
      return contact._id === props.match.params.id})
	}
}

const DetailedContactContainer = withRouter(connect(mapStateToProps, null)(DetailedContact))

export default DetailedContactContainer