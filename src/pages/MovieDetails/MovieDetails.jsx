import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useParams, NavLink, useLocation, useNavigate, Routes, Route } from 'react-router-dom';
import { getMovieDetails, IMAGE_URL } from 'services/movies.api';
import Loader from 'components/Loader/Loader';
import css from './MovieDetails.module.css';

const Review = lazy(() => import('components/Reviews/Reviews'));
const Cast = lazy(() => import('components/Cast/Cast'));

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const history = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const getMovie = async () => {
      const currentMovie = await getMovieDetails(movieId);
      setMovie(currentMovie);
    };

    getMovie();
  }, [movieId]);

  const onGoBack = () => {
    history(location?.state?.from?.location ?? '/movies');
  };

  return (
    <>
      {!movie ? (
        <div className={css.notFound}>This movie is not found</div>
      ) : (
        <>
          <button type="button" onClick={onGoBack} className={css.goBackButton}>
            Go back
             </button>

          <div className={css.movieContainer}>
            <div className={css.movieImg}>
              <img
                src={
                  movie.poster_path
                    ? IMAGE_URL + movie.poster_path
                    : `https://bitsofco.de/content/images/2018/12/broken-1.png`
                }
                alt={movie.title}
                width=""
                height=""
              />
            </div>

            <div>
              <h2>{movie.title}</h2>
              <p>User Score: {`${movie.vote_average * 10}`}%</p>
              <h3>Overview</h3>
              <p>{`${movie.overview}`}</p>
              <h3>Genres</h3>
              <p>{`${movie.genres.map((genre) => genre.name).join(' / ')}`}</p>
            </div>
          </div>
        </>
      )}
      <hr />
      <p>Additional information</p>
      <nav>
        <NavLink
          to={`/movies/${movieId}/cast`}
          className={css.link}
          activeclassname={css.active}
        >
          Cast
        </NavLink>
        <NavLink
         to={`/movies/${movieId}/reviews`}
          className={css.link}
          activeclassname={css.active}
        >
          Reviews
        </NavLink>
      </nav>

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/movies/:movieId/cast" element={<Cast movieId={movieId} />} />
          <Route path="/movies/:movieId/reviews" element={<Review movieId={movieId} />} />
        </Routes>
      </Suspense>
    </>
  );
}