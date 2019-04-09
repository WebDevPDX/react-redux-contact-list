import v4 from 'uuid/v4'

const initialState = [
  {
    _id: v4(),
    firstName: 'ExampleFN',
    lastName: 'ExampleLN',
    email: 'fn.ln@gmail.com',
    country: 'US',
  },
]

const contacts = (state = initialState, action) => {
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
