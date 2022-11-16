// App Actions to update state
const CHECK_STATUS = 'bookStore/categories/CHECK_STATUS'

// an object contains Different types of action as
// it's key and the value is an specific function
const cases = {
  [CHECK_STATUS]: (state, action) => {
    return [...state, action.payload]
  }
}

// Books reducer function
export default function categoriesReducer (state = [], action) {
  const handler = cases[action.type]
  return handler ? handler(state, action) : state
}

export const checkStatus = () => {
  return {
    type: CHECK_STATUS,
    payload: 'Under construction'
  }
}
