import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

export default function Actions({ id }) {
  const dispatch = useDispatch();

  const handleRemove = () => dispatch(removeBook(id));
  return (
    <div>
      <button type="button">Comment</button>
      <button type="button" onClick={handleRemove}>
        Remove
      </button>
      <button type="button">Edit</button>
    </div>
  );
}
