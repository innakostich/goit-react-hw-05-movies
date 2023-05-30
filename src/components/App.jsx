import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { BeatLoader } from 'react-spinners';
import { ToastContainer } from 'react-toastify';
import  slugify  from 'slugify';
import css from './App.module.css';

const API_KEY = '81a8869c255f2e2cdd160d2494e708bd';
const BASE_URL = 'https://api.themoviedb.org/3';

const Loader = () => (
  <div className={css.loaderContainer}>
    <BeatLoader color="#555" />
  </div>
);

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/trending/all/day?api_key=${API_KEY}`
        );
        setTrendingMovies(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch trending movies:', error);
        setLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={css.home}>
      <h1>Trending Movies</h1>
      <ul>
        {trendingMovies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    if (searchQuery) {
      try {
        const response = await axios.get(
          `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}`
        );
        setSearchResults(response.data.results);
      } catch (error) {
        console.error('Failed to search movies:', error);
      }
    }
  };

  return (
    <div className={css.movies}>
      <h1>Search Movies</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

const MovieDetails = ({ match }) => {
  const { movieId } = match.params;
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
        );
        setMovie(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch movie details:', error);
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (loading) {
    return <Loader />;
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

const Cast = ({ match }) => {
  const { movieId } = match.params;
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
        );
        setCast(response.data.cast);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch movie credits:', error);
        setLoading(false);
      }
    };

    fetchMovieCredits();
  }, [movieId]);

  if (loading) {
    return <Loader />;
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

const Reviews = ({ match }) => {
  const { movieId } = match.params;
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
        );
        setReviews(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch movie reviews:', error);
        setLoading(false);
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={css.reviews}>
      <h1>Reviews</h1>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>{review.content}</li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div className={css.container}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />} />
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Routes>
        </Suspense>
      </div>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
