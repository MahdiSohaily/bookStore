import React from 'react';
import Book from './Book';
import InputBook from './InputBook';
import Actions from './Actions';

export default function BookList() {
  const books = [
    { id: 1, title: 'Awesome Book', author: 'Mahdi Rezaei' },
    { id: 2, title: 'New Book', author: 'Sara Ahmadi' },
  ];

  const booksList = books.map((item) => (
    <div
      key={item.id}
      className="item"
      style={{ border: '1px solid gray', padding: '40px', margin: '20px' }}
    >
      <Book id={item.id} title={item.title} author={item.author} />
      <Actions />
    </div>
  ));
  return (
    <div className="wraper">
      <div> {booksList}</div>
      <div className="book_form">
        <InputBook />
      </div>
    </div>
  );
}
