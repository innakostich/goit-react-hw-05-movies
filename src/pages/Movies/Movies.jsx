import React, { useState } from 'react';
import { searchMovies } from '../../services/movie.api';
import css from './Movies.module.css';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    if (searchQuery) {
      try {
        const response = await searchMovies(searchQuery);
        setSearchResults(response.results);
      } catch (error) {
        console.error('Failed to search movies:', error);
      }
    }
  };

  return (
    <div className={css.movies}>
      <h1>Search Movies</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
