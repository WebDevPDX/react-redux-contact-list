import { v4 } from 'node-uuid'

const initialState = [
  {
    _id: v4(),
    firstName: 'Falk',
    lastName: 'Schwiefert',
    email: 'falk.schwiefert@gmail.com',
    country: 'ES',
  },
  {
    _id: v4(),
    firstName: 'Test',
    lastName: 'TestTest',
    email: 'test@gmail.com',
    country: 'MX',
  },
]

const contacts = (state = initialState, action) => {
  console.log(action.type, action.contact)
  switch (action.type) {
    case 'ADD_CONTACT':
      return state.concat([
        {
          _id: v4(),
          firstName: action.contact.firstName,
          lastName: action.contact.lastName,
          email: action.contact.email,
          country: action.contact.country,
        },
      ])

    case 'DELETE_CONTACT':
      return state.filter((contact) => {
        return contact._id !== action.contact._id
      })

    case 'EDIT_CONTACT':
      return state.map((contact) => {
        if (contact._id === action.contact._id) {
          return {
            _id: action.contact._id,
            firstName: action.contact.firstName,
            lastName: action.contact.lastName,
            email: action.contact.email,
            country: action.contact.country,
          }
        } else {
          return contact
        }
      })

    default:
      return state
  }
}

export default contacts
