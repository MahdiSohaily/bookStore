import React from 'react';
import BookList from './BookList';
import NewBook from './NewBook';

class BooksSection extends React.PureComponent {
  render() {
    return (
      <section>
        <BookList />
        <NewBook />
      </section>
    );
  }
}

export default BooksSection;
