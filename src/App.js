import React, { Component } from 'react';
import { ContactsList } from './components/contactsList/ContactsList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='app-wrapper'>
        <ContactsList />
      </div>
    )
  }
}

export default App;
