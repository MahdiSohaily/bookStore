import React from 'react';

export default function InputBook() {
  return (
    <section>
      <h2>Add New Book</h2>
      <form action="#">
        <input
          type="text"
          name="title"
          id="title"
          aria-label="book_title"
          required
          minLength={3}
        />
        <input
          type="text"
          name="author"
          id="author"
          aria-label="book_author"
          required
          minLength={3}
        />
        <input type="submit" value="Add Book" />
      </form>
    </section>
  );
}
