import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import bookReducer from './books/books';
import categoriesReducer from './categories/categories';

const composeEnhancers = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(
  combineReducers({
    books: bookReducer,
    categories: categoriesReducer,
  }),
  composeEnhancers,
);

export default store;
