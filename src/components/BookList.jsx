import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import InputBook from './InputBook';
import Actions from './Actions';

export default function BookList() {
  const books = useSelector((state) => state.books);
  const keys = books.length > 0 ? Object.keys(books[0]) : null;
  console.log(keys);
  const booksList = books.map((item) => (
    <div
      key={item.id}
      className="item"
      style={{ border: '1px solid gray', padding: '40px', margin: '20px' }}
    >
      <Book id={item.id} title={item.title} author={item.author} />
      <Actions id={item.id} />
    </div>
  ));
  return (
    <div className="wraper">
      <div>{booksList}</div>
      <div className="book_form">
        <InputBook />
      </div>
    </div>
  );
}

// const data = {
//   item1: [
//     { title: 'The Great Gatsby', author: 'John Smith', category: 'Fiction' },
//   ],
//   item2: [
//     { category: 'Fiction', title: 'The Great Gatsby', author: 'Mahdi Rezaei' },
//   ],
// };
