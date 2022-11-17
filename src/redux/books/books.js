import { createAsyncThunk } from '@reduxjs/toolkit';

const ADD_BOOK = 'book-store/books/ADD_BOOK';
const GET_BOOK = 'book-store/books/GET_BOOK';
const REMOVE_BOOK = 'book-store/books/REMOVE_BOOK';
const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/wFyRQkqy7Ko6BjeqyGdg/books/';

export default function bookReducer(state = [], action) {
  switch (action.type) {
    case `${GET_BOOK}/fulfilled`: return [...action.payload];
    case `${GET_BOOK}/rejected`: return state;
    case `${ADD_BOOK}/fulfilled`: return [...state, action.payload];
    case `${REMOVE_BOOK}/fulfilled`:
      return state.filter((book) => book.item_id.toString() !== action.payload.toString());
    default: return state;
  }
}

export const addBookAsync = createAsyncThunk(ADD_BOOK, async (book) => {
  const result = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  }).then((response) => response.text())
    .then((result) => (result === 'Created' ? book : null));
  return result;
});

export const getBookAsync = createAsyncThunk(GET_BOOK, async () => {
  const bookArray = [];
  await fetch(baseUrl, {
    method: 'GET',
    headers: {
      'content-Type': 'application/json',
    },
  }).then((result) => {
    const obj = result.text();
    return obj;
  }).then((result) => {
    const obj = JSON.parse(result);
    Object.keys(obj).forEach((key) => {
      bookArray.push({ ...obj[key][0], item_id: key });
    });
  });
  return bookArray;
});

export const removeBookAsync = createAsyncThunk(REMOVE_BOOK, async (id) => {
  const response = await fetch(baseUrl + id.toString(), {
    method: 'DELETE',
    headers: {
      'content-Type': 'application/json',
    },
  }).then((response) => response.text())
    .then((result) => (result === 'The book was deleted successfully!' ? id : null));
  return response;
});
