import axios from 'axios';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/vOSPgS2ScVjdmjkxsYg5/books';
// App Actions to update state
const ACTIONS = {
  ADDED_BOOK: 'bookStore/books/ADDED_BOOK',
  REMOVED_BOOK: 'bookStore/books/REMOVED_BOOK',
  FETCH_BOOKS: 'bookStore/books/FETCH_BOOKS',
};

// an object contains Different types of action as
// it's key and the value is an specific function
const cases = {
  [ACTIONS.FETCH_BOOKS]: (state, action) => {
    console.log(action.payload);
    return [action.payload];
  },
  [ACTIONS.ADDED_BOOK]: (state, action) => [...state, action.payload],
  [ACTIONS.REMOVED_BOOK]: (state, action) => state.filter((item) => item.id !== action.index),
};

const initialState = [];

// Books reducer function
export default function bookReducer(state = initialState, action) {
  const handler = cases[action.type];
  return handler ? handler(state, action) : state;
}

const booksLoaded = (books) => ({
  type: ACTIONS.FETCH_BOOKS,
  payload: books,
});

export const fetchBooks = (dispatch) => {
  axios.get(baseURL).then((response) => {
    dispatch(booksLoaded(response.data));
  });
};

// Async function to get data from external API

fetchBooks();

export const addBook = (book) => ({
  type: ACTIONS.ADDED_BOOK,
  payload: book,
});

export const removeBook = (index) => ({
  type: ACTIONS.REMOVED_BOOK,
  index,
});
