import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../App';
import css from './MovieDetails.module.css';
import { BeatLoader } from 'react-spinners';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await getMovieDetails(movieId);
        setMovie(response);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch movie details:', error);
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (loading) {
    return (
      <div className={css.loaderContainer}>
        <BeatLoader color="#555" />
      </div>
    );
  }

  if (!movie) {
    return null;
  }

  return (
    <div className={css.movieDetails}>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
        alt={movie.title}
        className={css.movieImage}
      />
    </div>
  );
};

export default MovieDetails;
