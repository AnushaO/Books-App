import React from 'react';

const BookItem = ({ book }) => {
  const { title, authors, imageLinks, description } = book.volumeInfo;

  return (
    <div style={styles.card}>
      <img
        src={imageLinks?.thumbnail || 'https://via.placeholder.com/150'}
        alt={title}
        style={styles.image}
      />
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.authors}>
        {authors ? authors.join(', ') : 'Unknown Author'}
      </p>
      <p style={styles.description}>
        {description ? description.substring(0, 100) + '...' : 'No description available.'}
      </p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '10px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
  },
  image: {
    maxWidth: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '4px',
  },
  title: {
    fontSize: '16px',
    fontWeight: 'bold',
    margin: '10px 0',
  },
  authors: {
    fontSize: '14px',
    color: '#555',
    marginBottom: '10px',
  },
  description: {
    fontSize: '12px',
    color: '#777',
  },
};

export default BookItem;
