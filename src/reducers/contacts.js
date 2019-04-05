const initialState = [
  {
    _id: 1,
    firstname: 'Falk',
		lastname: 'Schwiefert',  
		email: 'falk.schwiefert@gmail.com',
		country: 'Spain',
  },
  {
  _id: 2,
  firstname: 'Test',
	lastname: 'TestTest', 
	email: 'test@gmail.com',
	country: 'test',
  },
]

const contacts = (state = initialState, action) => {
	console.log(action.type, action.payload)
	switch (action.type) {
		// case 'GET_CONTACTS':
		// 	return state 

		// case 'ADD_CONTACT':
		// 	return state.concat([{
		// 		_id: action.id, 
		// 		name: action.name, 
		// 		phone: action.phone, 
		// 		email: action.email
		// 	}])

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
