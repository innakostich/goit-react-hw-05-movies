import React, { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../services/movie.api';
import css from './Home.module.css';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await getTrendingMovies();
        setTrendingMovies(response.results);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch trending movies:', error);
        setLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  if (loading) {
    return (
      <div className={css.loaderContainer}>
        <BeatLoader color="#555" />
      </div>
    );
  }

  return (
    <div className={css.home}>
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
