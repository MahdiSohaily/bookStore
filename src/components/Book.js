import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBookAsync } from '../redux/books/books';
import 'react-circular-progressbar/dist/styles.css';

const Book = (props) => {
  const {
    id, title, author, category,
  } = props;
  const dispatch = useDispatch();
  const progress = parseInt(Math.random() * 100, 10);
  return (
    <div className="book" id={id}>
      <div className="bookInfo">
        <span className="bookCategory">{category}</span>
        <span className="bookTitle">{title}</span>
        <span className="bookAuthor">{author}</span>
        <div className="bookActions">
          <button type="button">Comments</button>
          <div className="verticalLine" />
          <button type="button" onClick={() => { dispatch(removeBookAsync(id)); }}>Remove</button>
          <div className="verticalLine" />
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="infoContainer">
        <div className="progressContainer">
          <CircularProgressbar value={progress} text={`${progress}%`} />
        </div>
        <div className="verticalLine big" />
        <div className="chapterInfo">
          <div className="currenChapter">
            chapter info
          </div>
          <div>
            introduction
          </div>
          <button type="button">
            Update progress
          </button>
        </div>
      </div>
    </div>
  );
};

Book.defaultProps = {
  id: '0',
  title: 'Title',
  author: 'Author',
  category: 'Action',
};

Book.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
};

export default Book;
