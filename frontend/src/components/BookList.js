import React from 'react';
import BookItem from './BookItem';

const BookList = ({ books }) => {
  if (books.length === 0) {
    return (
      <div style={styles.messageContainer}>
        <p className="no-books-message">No books found. Try searching for something else.</p>
      </div>
    );
  }

  return (
    <div style={styles.listContainer}>
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};

const styles = {
  listContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    padding: '20px',
  },
  messageContainer: {
    textAlign: 'center',
    marginTop: '50px',
  },
};

export default BookList;
