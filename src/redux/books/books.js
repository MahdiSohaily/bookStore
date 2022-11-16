// App Actions to update state
const ACTIONS = {
  ADDED_BOOK: 'bookStore/books/ADDED_BOOK',
  REMOVED_BOOK: 'bookStore/books/REMOVED_BOOK',
};

// an object contains Different types of action as
// it's key and the value is an specific function
const cases = {
  [ACTIONS.ADDED_BOOK]: (state, action) => {
    console.log(action.payload);
    return [...state, action.payload];
  },
  [ACTIONS.REMOVED_BOOK]: (state, action) => {
    let newState = [...state];
    newState = newState.splice(action.index, 1);
    return [...newState];
  },
};

const initialState = [
  { id: 1, title: 'Awesome Book', Author: 'Mahdi Rezaei' },
  { id: 2, title: 'New Book', Author: 'Jafar Rezaei' },
];

// Books reducer function
export default function bookReducer(state = initialState, action) {
  const handler = cases[action.type];
  return handler ? handler(state, action) : state;
}

export const addBook = (book) => {
  return {
    type: ACTIONS.ADDED_BOOK,
    payload: book,
  };
};

export const removeBook = (index) => {
  return {
    type: ACTIONS.REMOVED_BOOK,
    index,
  };
};
