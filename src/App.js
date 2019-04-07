import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import AllContactsContainer from './containers/allContacts/AllContactsContainer'
import DetailContact from './containers/detailContact/DetailContact'
import AddContactFormContainer from './containers/addContactForm/AddContactFormContainer'
import { UserForm } from './components/userForm/UserForm'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='app-wrapper'>
        <Router>
          <Switch>
            <Route path="/" exact component={AllContactsContainer} /> 
            <Route path="/user/:id" component={DetailContact} />
            <Route path="/edit/:id" component={UserForm} />
            <Route path="/add" component={AddContactFormContainer} />
            <Route component={AllContactsContainer} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
