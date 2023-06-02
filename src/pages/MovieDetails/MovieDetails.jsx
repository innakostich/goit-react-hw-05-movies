
import Loader from 'components/Loader/Loader';
import { useState, useEffect, lazy, Suspense } from 'react';
import {
  useParams,
  NavLink,
  useLocation,
  useNavigate,
  Routes,
  Route,
  useMatch,
} from 'react-router-dom';
import { getMovieDetails, IMAGE_URL } from '../../services/movies.api';
import css from './MovieDetails.module.css';

const MovieReview = lazy(() => import('components/Reviews/Reviews'));
const MovieCastView = lazy(() => import('components/Cast/Cast'));

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const history = useNavigate();
  const location = useLocation();
  const match = useMatch();

  useEffect(() => {
    const getMovie = async () => {
      const currentMovie = await getMovieDetails(movieId);

      setMovie(currentMovie);
    };

    getMovie();
  }, [movieId]);

  const onGoBack = () => {
    history.push(location?.state?.from?.location ?? '/movies');
  };

  return (
    <>
      {!movie ? (
        <div className={css.notFound}>This movie is not found</div>
      ) : (
        <>
          <button type="button" onClick={onGoBack}>
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
          to={{ pathname: `${match?.url}/cast`, state: location.state }}
          className={css.link}
          activeClassName={css.active}
        >
          Cast
        </NavLink>
        <NavLink
          to={{ pathname: `${match?.url}/reviews`, state: location.state }}
          className={css.link}
          activeClassName={css.active}
        >
          Reviews
        </NavLink>
      </nav>

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={`${match?.path}/cast`}>
            <MovieCastView movieId={movieId} />
          </Route>

          <Route path={`${match?.path}/reviews`}>
            <MovieReview movieId={movieId} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
