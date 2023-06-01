// // import css from './Movies.module.css';
// // import { useState, useEffect } from 'react';
// // import { searchMovies } from 'services/movies.api';
// // import { Link, useLocation, useNavigate } from 'react-router-dom';
// // import Notiflix from 'notiflix';

// // const Movies = () => {
// //   const [movieToFind, setMovieToFind] = useState('');
// //   const [movies, setMovies] = useState([]);

// //   const location = useLocation();
// //   const history = useNavigate();

// //   useEffect(() => {
// //     const searchString = new URLSearchParams(location.search).get('query');

// //     if (searchString) {
// //       const getMovies = async () => {
// //         const { results } = await searchMovies(searchString);

// //         setMovies(results);
// //         setMovieToFind(searchString);

// //         console.log(searchString);
// //       };

// //       getMovies();
// //     }
// //   }, [location.search]);

// //   const handleSubmit = async e => {
// //     e.preventDefault();

// //     if (movieToFind.trim()) {
// //       const { results } = await searchMovies(movieToFind);

// //       setMovies(results);
// //       setMovieToFind('');

// //       if (results.length === 0) {
// //         Notiflix.Notify.warning(
// //           'No movies found! Please change your request and try again'
// //         );
// //       }

// //       history.push({
// //         ...location,
// //         search: `query=${movieToFind}`,
// //       });
// //     }
// //   };

// //   return (
// //     <>
// //       <header className={css.searchbar}>
// //         <form className={css.searchForm} onSubmit={handleSubmit}>
// //           <input
// //             onChange={e => setMovieToFind(e.target.value)}
// //             className={css.SearchFormInput}
// //             type="text"
// //             autoComplete="off"
// //             autoFocus
// //             placeholder="Search movie"
// //             value={movieToFind}
// //           />
// //           <button type="submit" className={css.searchFormButton}>
// //             search
// //           </button>
// //         </form>
// //       </header>
// //       {movies.length > 0 &&
// //         movies.map(({ id, title, poster_path }) => (
// //           <ul>
// //             <li key={id}>
// //               <Link
// //                 to={{
// //                   pathname: `/movies/${`${id}`}`,
// //                   state: {
// //                     from: {
// //                       location,
// //                     },
// //                   },
// //                 }}
// //               >
// //                 <img
// //                   src={
// //                     poster_path
// //                       ? `https://image.tmdb.org/t/p/w300${poster_path}`
// //                       : 'https://pomogaetsrazu.ru/images/offers/2829219234.jpg'
// //                   }
// //                   alt={title}
// //                 />
// //                 <p>{title}</p>
// //               </Link>
// //             </li>
// //           </ul>
// //         ))}
// //     </>
// //   );
// // };

// // export default Movies;

// import React, { useState, useEffect } from 'react';
// import { searchMovies } from 'services/movies.api';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import Notiflix from 'notiflix';
// import css from './Movies.module.css';

// const Movies = () => {
//   const [movieToFind, setMovieToFind] = useState('');
//   const [movies, setMovies] = useState([]);

//   const location = useLocation();
//   const history = useNavigate();

//   useEffect(() => {
//     const searchString = new URLSearchParams(location.search).get('query');

//     if (searchString) {
//       const getMovies = async () => {
//         const { results } = await searchMovies(searchString);

//         setMovies(results);
//         setMovieToFind(searchString);
//       };

//       getMovies();
//     }
//   }, [location.search]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (movieToFind.trim()) {
//       const { results } = await searchMovies(movieToFind);

//       setMovies(results);
//       setMovieToFind('');

//       if (results.length === 0) {
//         Notiflix.Notify.warning(
//           'No movies found! Please change your request and try again'
//         );
//       }

//       history.push({
//         ...location,
//         search: `query=${movieToFind}`,
//       });
//     }
//   };

//   return (
//     <>
//       <header className={css.searchbar}>
//         <form className={css.searchForm} onSubmit={handleSubmit}>
//           <input
//             onChange={(e) => setMovieToFind(e.target.value)}
//             className={css.SearchFormInput}
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search movie"
//             value={movieToFind}
//           />
//           <button type="submit" className={css.searchFormButton}>
//             search
//           </button>
//         </form>
//       </header>
//       {movies.length > 0 && (
//         <ul>
//           {movies.map(({ id, title, poster_path }) => (
//             <li key={id}>
//               <Link
//                 to={{
//                   pathname: `/movies/${id}`,
//                   state: {
//                     from: location,
//                   },
//                 }}
//               >
//                 <img
//                   src={
//                     poster_path
//                       ? `https://image.tmdb.org/t/p/w300${poster_path}`
//                       : 'https://pomogaetsrazu.ru/images/offers/2829219234.jpg'
//                   }
//                   alt={title}
//                 />
//                 <p>{title}</p>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </>
//   );
// };

// export default Movies;
import React, { useState, useEffect } from 'react';
import { searchMovies } from 'services/movies.api';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Notiflix from 'notiflix';
import css from './Movies.module.css';

const Movies = () => {
  const [movieToFind, setMovieToFind] = useState('');
  const [movies, setMovies] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchString = new URLSearchParams(location.search).get('query');

    if (searchString) {
      const getMovies = async () => {
        const { results } = await searchMovies(searchString);

        setMovies(results);
        setMovieToFind(searchString);
      };

      getMovies();
    }
  }, [location.search]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (movieToFind.trim()) {
      const { results } = await searchMovies(movieToFind);

      setMovies(results);
      setMovieToFind('');

      if (results.length === 0) {
        Notiflix.Notify.warning(
          'No movies found! Please change your request and try again'
        );
      }

      navigate(`/movies`, { state: { query: movieToFind } });
    }
  };

  return (
    <>
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={handleSubmit}>
          <input
            onChange={(e) => setMovieToFind(e.target.value)}
            className={css.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
            value={movieToFind}
          />
          <button type="submit" className={css.searchFormButton}>
            search
          </button>
        </form>
      </header>
      {movies.length > 0 && (
        <ul>
          {movies.map(({ id, title, poster_path }) => (
            <li key={id}>
              <Link
                to={{
                  pathname: `/movies/${id}`,
                  state: {
                    from: location,
                  },
                }}
              >
                <img
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w300${poster_path}`
                      : 'https://pomogaetsrazu.ru/images/offers/2829219234.jpg'
                  }
                  alt={title}
                />
                <p>{title}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Movies;
