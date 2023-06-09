
import React, { useState, useEffect, useRef, Suspense } from 'react';
import { Outlet, Link, useParams, useLocation, useNavigate, Routes, Route } from 'react-router-dom';
import { getMovieDetails, IMAGE_URL } from 'services/movies.api';
import css from './MovieDetails.module.css';

const Cast = React.lazy(() => import('components/Cast/Cast'));
const Reviews = React.lazy(() => import('components/Reviews/Reviews'));

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [movie, setMovie] = useState({});
  const location = useLocation();

  const { movieId } = useParams();
  const backLinkLocation = useRef(location.state?.from ?? '/');
  const history = useNavigate();

  const onGoBack = () => {
    history(backLinkLocation.current);
  };

  useEffect(() => {
    async function fetchMovie() {
      try {
        const data = await getMovieDetails(movieId);
        if (data) {
          setMovieDetails(data);
          setMovie(data);
        } else {
          setMovieDetails({});
          setMovie({});
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovie();
  }, [movieId]);

  return (
    <div>
      <Link to={backLinkLocation.current}>
        <button type="button" onClick={onGoBack} className={css.goBackButton}>
          Go back
        </button>
      </Link>
      {movieDetails && movieDetails.title ? (
        <div className={css.movieContainer}>
          <div className={css.movieImg}>
            <img
              src={
                movie.poster_path
                  ? IMAGE_URL + movie.poster_path
                  : 'https://bitsofco.de/content/images/2018/12/broken-1.png'
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
            <p>{movieDetails.overview}</p>
            <h3>Genres</h3>
            <ul className={css.genres}>
              {movieDetails.genres &&
                movieDetails.genres.map(item => (
                  <li key={item.id}>{item.name}</li>
                ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className={css.notFound}>This movie is not found</div>
      )}
      <div className={css.addInfoWrapper}>
        <h4 className={css.addInfoTitle}>Additional information</h4>
        <ul className={css.addInfoList}>
          <li>
            <Link to={`${movieId}/cast`} className={css.link}>
              Cast
            </Link>
          </li>
          <li>
            <Link to={`${movieId}/reviews`} className={css.link}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={`${movieId}/cast`} element={<Cast movieId={movieId} />} />
          <Route path={`${movieId}/reviews`} element={<Reviews movieId={movieId} />} />
        </Routes>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;

// import React, { useState, useEffect,  Suspense } from 'react';
// import { Outlet, Link, useParams, useLocation, useNavigate, Routes, Route } from 'react-router-dom';
// import { getMovieDetails, IMAGE_URL } from 'services/movies.api';
// import css from './MovieDetails.module.css';

// const Cast = React.lazy(() => import('components/Cast/Cast'));
// const Reviews = React.lazy(() => import('components/Reviews/Reviews'));

// const MovieDetails = () => {
//   const [movieDetails, setMovieDetails] = useState({});
//   const [movie, setMovie] = useState({});
//   const location = useLocation();

//   const { movieId } = useParams();
//   const backLinkLocation = location.state?.from ?? '/';
//   const history = useNavigate();

//   const onGoBack = () => {
//     history(backLinkLocation.current);
//   };

//   useEffect(() => {
//     async function fetchMovie() {
//       try {
//         const data = await getMovieDetails(movieId);
//         if (data) {
//           setMovieDetails(data);
//           setMovie(data);
//         } else {
//           setMovieDetails({});
//           setMovie({});
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     }

//     fetchMovie();
//   }, [movieId]);

//   return (
//     <div>
//       <Link to={backLinkLocation}>
//         <button type="button" onClick={onGoBack} className={css.goBackButton}>
//           Go back
//         </button>
//       </Link>
//       {movieDetails && movieDetails.title ? (
//         <div className={css.movieContainer}>
//           <div className={css.movieImg}>
//             <img
//               src={
//                 movie.poster_path
//                   ? IMAGE_URL + movie.poster_path
//                   : 'https://bitsofco.de/content/images/2018/12/broken-1.png'
//               }
//               alt={movie.title}
//               width=""
//               height=""
//             />
//           </div>
//           <div>
//             <h2>{movie.title}</h2>
//             <p>User Score: {`${movie.vote_average * 10}`}%</p>
//             <h3>Overview</h3>
//             <p>{movieDetails.overview}</p>
//             <h3>Genres</h3>
//             <ul className={css.genres}>
//               {movieDetails.genres &&
//                 movieDetails.genres.map(item => (
//                   <li key={item.id}>{item.name}</li>
//                 ))}
//             </ul>
//           </div>
//         </div>
//       ) : (
//         <div className={css.notFound}>This movie is not found</div>
//       )}
//       <div className={css.addInfoWrapper}>
//         <h4 className={css.addInfoTitle}>Additional information</h4>
//         <ul className={css.addInfoList}>
//           <li>
//           <Link to= "cast" state = {{from :backLinkLocation}} className={css.link}>
//               Cast
//             </Link>
//           </li>
//           <li>
//             <Link to= "reviews" state = {{from :backLinkLocation}} className={css.link}>
//               Reviews
//             </Link>
//           </li>
//         </ul>
//       </div>

//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//           <Route path={`${movieId}/cast`} element={<Cast movieId={movieId} />} />
//           <Route path={`${movieId}/reviews`} element={<Reviews movieId={movieId} />} />
//         </Routes>
//         <Outlet />
//       </Suspense>
//     </div>
//   );
// };

// export default MovieDetails;
