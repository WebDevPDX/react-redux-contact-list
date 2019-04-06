import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class DetailContact extends Component {
  render() {
    return (
      <div>
        {console.log('loaded', this.props)}
        This is the detailsContact view
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

	}, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailContact))