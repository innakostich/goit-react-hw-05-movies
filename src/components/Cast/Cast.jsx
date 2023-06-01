
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getMovieCast, IMAGE_URL } from 'services/movies.api';
import css from './Cast.module.css';

const MovieCastView = ({ movieId }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const { cast } = await getMovieCast(movieId);
        setCast(cast);
      } catch (error) {
        console.log('Error fetching movie cast:', error);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <ul className={css.castList}>
      {cast.map(({ id, profile_path, name, character }) => (
        <li key={id} className={css.castItem}>
          <img
            src={
              profile_path
                ? IMAGE_URL + profile_path
                : 'https://bitsofco.de/content/images/2018/12/broken-1.png'
            }
            alt={name}
            width="100"
            height="100"
            className={css.castImage}
          />
          <p className={css.castName}>{name}</p>
          <p className={css.castCharacter}>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};

MovieCastView.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default MovieCastView;
