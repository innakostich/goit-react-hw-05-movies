
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getReviews } from 'services/movies.api';

export default function MovieReview({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { results } = await getReviews(movieId);
        setReviews(results);
      } catch (error) {
        console.log('Error fetching movie reviews:', error);
      }
    };

    if (movieId) {
      fetchReviews();
    }
  }, [movieId]);

  return (
    <div>
      {reviews.length > 0 ? (
        <>
          <ul>
            {reviews.map(({ id, author, content }) => (
              <li key={id}>
                <h4>{author}</h4>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>No reviews available for this movie.</p>
      )}
    </div>
  );
}

MovieReview.propTypes = {
  movieId: PropTypes.string.isRequired,
};
