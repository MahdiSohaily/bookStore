import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import bookReducer from './books/books';
import categoriesReducer from './categories/categories';

const composeEnhancers = composeWithDevTools();

const store = createStore(
  combineReducers({
    books: bookReducer,
    categories: categoriesReducer,
  }),
  composeEnhancers,
);

export default store;
