import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { loadState, saveState } from './localStorage'
import reducer from '../reducers'

const storedState = loadState();

export const store = createStore(reducer, storedState, composeWithDevTools())

store.subscribe(() => {
  saveState(store.getState())
})