import React, { useState } from 'react';

const SearchBar = ({ onSearch, onClearSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery); // Trigger the search
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value === '') {
      onClearSearch(); // If search query is cleared, reset books
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.formContainer}>
      <input
        type="text"
        placeholder="Search for books..."
        value={searchQuery}
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === 'Backspace' && searchQuery === '') {
            onClearSearch(); // Reset books if the input is cleared with Backspace
          }
        }}
        style={styles.input}
      />
      <button type="submit" style={styles.searchButton}>Search</button>
    </form>
  );
};

const styles = {
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
    gap: '10px',
  },
  input: {
    padding: '12px 20px',
    width: '320px',
    border: '2px solid #3f51b5',
    borderRadius: '30px',
    fontSize: '16px',
    outline: 'none',
    transition: '0.3s ease',
  },
  searchButton: {
    padding: '12px 30px',
    backgroundColor: '#3f51b5',
    color: 'white',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
  },
};

export default SearchBar;
