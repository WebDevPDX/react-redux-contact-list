import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { ContactsList } from './components/contactsList/ContactsList'
import DetailContact from './containers/detailContact/DetailContact'
import { UserForm } from './components/userForm/UserForm'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='app-wrapper'>
        <Router>
          <Route path="/" exact component={ContactsList} /> 
          <Route path="/user" component={DetailContact} />
          <Route path="/edit" component={UserForm} />
        </Router>
      </div>
    )
  }
}

export default App;
