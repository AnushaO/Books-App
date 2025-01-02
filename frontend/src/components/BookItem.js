import React from 'react';

const BookItem = ({ book }) => {
  const { title, authors, imageLinks, description, publisher, publishedDate } = book.volumeInfo;
  
  return (
    <div className="book-item">
      <img src={imageLinks?.thumbnail} alt={title} />
      <h3>{title}</h3>
      <p><strong>Author(s):</strong> {authors?.join(', ')}</p>
      <p><strong>Publisher:</strong> {publisher}</p>
      <p><strong>Published Date:</strong> {publishedDate}</p>
      <p><strong>Description:</strong> {description}</p>
    </div>
  );
};

export default BookItem;
