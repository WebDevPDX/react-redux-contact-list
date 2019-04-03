import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { store } from './store'
import './index.css';
import ContactsList from './containers/contactsList';

ReactDOM.render(
    <Provider store={store}>
        <ContactsList />
    </Provider>, 
document.getElementById('root')
)
