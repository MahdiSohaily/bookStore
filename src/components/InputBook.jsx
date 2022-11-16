import React, { useState } from 'react';
import { addBook } from '../redux/books/books';
import { useSelector, useDispatch } from 'react-redux';

export default function InputBook() {
  const length = useSelector((state) => state.books.length);
  const dispatch = useDispatch();
  // Input fields initial state
  const [data, setData] = useState({
    title: '',
    author: '',
  });

  //function to handle input values and change their state
  function handleChange(e) {
    const { target } = e;
    setData({
      ...data,
      [target.name]: target.value,
    });
  }

  // function to handle for submit to dispatch global store
  function handleSubmit(e) {
    e.preventDefault();
    const book = {
      id: length + 1,
      ...data,
    };

    console.log(book);
  }

  return (
    <section>
      <h2>Add New Book</h2>
      <form action="#" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          id="title"
          value={data.title}
          onChange={handleChange}
          aria-label="book_title"
          required
          minLength={3}
        />
        <input
          type="text"
          name="author"
          id="author"
          value={data.author}
          onChange={handleChange}
          aria-label="book_author"
          required
          minLength={3}
        />
        <input type="submit" value="Add Book" />
      </form>
    </section>
  );
}
