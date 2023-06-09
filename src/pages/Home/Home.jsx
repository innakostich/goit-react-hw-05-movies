// import { useState, useEffect } from 'react';
// import { fetchTrendingMovies } from 'services/movies.api';
// import { Link, useLocation } from 'react-router-dom';
// import { BeatLoader } from 'react-spinners';

// const HomePage = () => {
//   const location = useLocation();
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getMovies = async () => {
//       const { results } = await fetchTrendingMovies();

//       setMovies(results);
//       setLoading(false);
//     };

//     getMovies();
//   }, []);

//   return (
//     <>
//       <h1>Trending today</h1>

//       {loading ? (
//         <BeatLoader color="#506f70" />
//       ) : (
//         <ul>
//           {movies.map(({ id, title }) => (
//             <li key={id}>
//               <Link
//                 to={{
//                   pathname: `/movies/${id}`,
//                   state: {
//                     from: {
//                       location,
//                       label: 'Back to Home',
//                     },
//                   },
//                 }}
//               >
//                 <p>{title}</p>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </>
//   );
// };

// export default HomePage;
import React, { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/movies.api';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';

const HomePage = () => {
  const location = useLocation();
  const history = useNavigate();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {const getMovies = async () => {
      const { results } = await fetchTrendingMovies();
      setMovies(results);
       setLoading(false);};
        getMovies();}, []);

  const handleGoBack = () => {history.goBack();};

  return (
    <>
      <h1>Trending today</h1>

      {loading ? ( <BeatLoader color="#506f70" /> ) : (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>{title}</Link>
            </li>
          ))}
        </ul>
      )}

      <button onClick={handleGoBack}>Назад</button>
    </>
  );
};

export default HomePage;

