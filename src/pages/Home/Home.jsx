
import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/movies.api';
import { Link, useLocation } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';

const HomePage = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      const { results } = await fetchTrendingMovies();
      setMovies(results);
      setLoading(false);
    };

    getMovies();
  }, []);

  return (
    <>
      <h1>Trending today</h1>

      {loading ? (
        <BeatLoader color="#555" loading={loading} />
      ) : (
        movies &&
        movies.map(({ id, title }) => (
          <ul key={id}>
            <li>
              <Link
                to={{
                  pathname: `/movies/${id}`,
                  state: {
                    from: {
                      location,
                      label: 'Back to Home',
                    },
                  },
                }}
              >
                <p>{title}</p>
              </Link>
            </li>
          </ul>
        ))
      )}
    </>
  );
};

export default HomePage;
