import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AllContactsContainer from '../../containers/allContacts/AllContactsContainer'
import DetailedContactContainer from '../../containers/detailedContact/DetailedContactContainer'
import AddContactFormContainer from '../../containers/addContactForm/AddContactFormContainer'
import EditContactFormContainer from '../../containers/editContactForm/EditContactFormContainer'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <Router>
          <Switch>
            <Route path="/" exact component={AllContactsContainer} />
            <Route path="/user/:id" exact component={DetailedContactContainer} />
            <Route path="/user/edit/:id" exact component={EditContactFormContainer} />
            <Route path="/add" component={AddContactFormContainer} />
            <Route component={AllContactsContainer} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
