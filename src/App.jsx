import { Route, Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Container from './components/Layout/Container';
import { BeatLoader }  from 'components/Loader/Loader'

const BASE_URL = 'https://api.themoviedb.org/3';

const HomePage = lazy(() =>
  import('./pages/Home')
);
const MoviesPage = lazy(() =>
  import('./pages/Movies' )
);
const MovieDetailsPage = lazy(() =>
  import(
    './pages/MovieDetails/MovieDetails' )
);
const NotFoundView = lazy(() =>
  import('./pages/NotFoundView')
);

export default function App() {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<BeatLoader />}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/movies">
            <MoviesPage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <NotFoundView path="*" />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}