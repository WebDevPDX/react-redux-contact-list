import uuid from 'uuid'

const initialState = [
  {
    _id: 'testID123',
    firstName: 'ExampleFN',
    lastName: 'ExampleLN',
    email: 'fn.ln@gmail.com',
    country: 'US',
  },
]

const contacts = (state = initialState, action) => {
  if (!action || !action.type) {
    return state
  }
  switch (action.type) {
    case 'ADD_CONTACT':
      return state.concat([
        {
          _id: uuid.v4(),
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
