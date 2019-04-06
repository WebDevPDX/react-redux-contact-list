import React from 'react'
import { AddButton } from '../addButton/AddButton'
import AllContacts from '../../containers/allContacts/AllContacts'
import './contactsList.css'


export const ContactsList = () => (
  <div className='contacts-list'>
    <AddButton />
    <AllContacts />
  </div>
)