import { createStore, combineReducers } from 'redux';
import bookReducer from './books/books';
import categoriesReducer from './categories/categories';

const store = createStore(
  combineReducers({
    books: bookReducer,
    categories: categoriesReducer,
  }),
);

export default store;
