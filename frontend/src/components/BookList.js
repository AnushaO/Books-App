import React from 'react';
import BookItem from './BookItem';

const BookList = ({ books }) => {
  return (
    <div>
      {books.length === 0 ? (
        <p>No books found.</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book.id || book.volumeInfo.title}>
              <BookItem book={book} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
