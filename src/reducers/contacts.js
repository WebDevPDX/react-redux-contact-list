const initialState = [
  {
    _id: 1,
    firstName: 'Falk',
		lastName: 'Schwiefert',  
		email: 'falk.schwiefert@gmail.com',
		country: 'ES',
  },
  {
  _id: 2,
  firstName: 'Test',
	lastName: 'TestTest', 
	email: 'test@gmail.com',
	country: 'MX',
  },
]

const contacts = (state = initialState, action) => {
	console.log(action.type, action.payload)
	switch (action.type) {
		// case 'GET_CONTACTS':
		// 	return state 

		case 'ADD_CONTACT':
			const ids = state.map(contact => contact._id)
			const maxId = Math.max(...ids)
			console.log(action)
			return state.concat([{
				_id: maxId+1, 
				firstName: action.contact.firstName, 
				lastName: action.contact.lastName, 
				email: action.contact.email,
				country: action.contact.country,
			}])

		case 'DELETE_CONTACT':
			return state.filter( contact => {
				return (contact._id !== action.payload._id)
			})

		// case 'UPDATE_CONTACT':
		// 	return state.map( contact => {
		// 		if (contact._id === action.id) {
		// 			return {_id: action.id, name: action.name, phone: action.phone, email: action.email}
		// 		}
		// 		return contact
		// 	})
		
		default:
			return state		

	}
}

export default contacts
