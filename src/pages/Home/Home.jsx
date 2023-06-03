
import React, { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/movies.api';
import { BeatLoader } from 'react-spinners';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetchTrendingMovies();
        setTrendingMovies(response.results);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch trending movies:', error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <BeatLoader color="#555" />
      </div>
    );
  }

  return (
    <div>
      <h1>Trending Movies</h1>
      <ul>
        {trendingMovies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
