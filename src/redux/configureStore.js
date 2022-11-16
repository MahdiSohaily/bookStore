import { combineReducers } from '@reduxjs/toolkit'
import bookReducer from './books/books'
import categoriesReducer from './categories/categories'

const store = combineReducers({
  books: bookReducer,
  categories: categoriesReducer
})

export default store
