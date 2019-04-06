export const loadState = () => {
  try {
    const storedState = localStorage.getItem('state')
    if (storedState ===null) {
      return undefined
    }
    return JSON.parse(storedState)
  }
  catch (err) {
    return undefined
  }
}

export const saveState = (state) => {
  try {
    const toStoreState = JSON.stringify(state)
    localStorage.setItem('state', toStoreState)
  }
  catch (err) {
    console.err(err)
  }
}