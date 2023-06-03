
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Container from './components/Layout/Container';
import Loader from './components/Loader/Loader';
import Navigation from './components/Header/Navigation';

const BASE_URL = 'https://api.themoviedb.org/3';

const HomePage = lazy(() => import('./pages/Home/Home'));
const MoviesPage = lazy(() => import('./pages/Movies/Movies'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetails/MovieDetails'));
const NotFoundView = lazy(() => import('./pages/NotFoundView'));

export default function App() {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/movies" element={<MoviesPage baseUrl={BASE_URL} />} />
          <Route
            path="/movies/:movieId/*"
            element={<MovieDetailsPage baseUrl={BASE_URL} />}
          />
          <Route path="/*" element={<NotFoundView />} />
        </Routes>
      </Suspense>
    </Container>
  );
}