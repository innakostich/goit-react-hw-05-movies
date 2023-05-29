import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../services/movie.api';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        const response = await getMovieCredits(movieId);
        setCast(response.cast);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch movie credits:', error);
        setLoading(false);
      }
    };

    fetchMovieCredits();
  }, [movieId]);

  if (loading) {
    return (
      <div className={css.loaderContainer}>
        <BeatLoader color="#555" />
      </div>
    );
  }

  return (
    <div className={css.cast}>
      <h1>Cast</h1>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
