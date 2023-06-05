// import React, { lazy, Suspense } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Container from './components/Layout/Container';
// import Loader from './components/Loader/Loader';
// import Navigation from './components/Header/Navigation';

// const BASE_URL = 'https://api.themoviedb.org/3';

// const HomePage = lazy(() => import('./pages/Home/Home'));
// const MoviesPage = lazy(() => import('./pages/Movies/Movies'));
// const MovieDetailsPage = lazy(() => import('./pages/MovieDetails/MovieDetails'));
// const NotFoundView = lazy(() => import('./pages/NotFoundView'));
// const Cast = lazy(() => import('./components/Cast/Cast'));
// const Review = lazy(() => import('./components/Reviews/Reviews'));

// export default function App() {
//   return (
//     <Container>
//       <Navigation />
//       <Suspense fallback={<Loader />}>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/movies" element={<MoviesPage baseUrl={BASE_URL} />} />
//           <Route path="/movies/:movieId/*" element={<MovieDetailsPage baseUrl={BASE_URL} />} />
//           <Route path="/movies/:movieId/cast" element={<Cast />} />
//           <Route path="/movies/:movieId/reviews" element={<Review movieId={movieId} />} />

//           <Route path="/*" element={<NotFoundView />} />
//         </Routes>
//       </Suspense>
//     </Container>
//   );
// }
// import React, { lazy, Suspense } from 'react';
// import { Route, Routes, useParams } from 'react-router-dom';
// import Container from './components/Layout/Container';
// import Loader from './components/Loader/Loader';
// import Navigation from './components/Header/Navigation';

// const BASE_URL = 'https://api.themoviedb.org/3';

// const HomePage = lazy(() => import('./pages/Home/Home'));
// const MoviesPage = lazy(() => import('./pages/Movies/Movies'));
// const MovieDetailsPage = lazy(() => import('./pages/MovieDetails/MovieDetails'));
// const NotFoundView = lazy(() => import('./pages/NotFoundView'));
// const Cast = lazy(() => import('./components/Cast/Cast'));
// const Review = lazy(() => import('./components/Reviews/Reviews'));

// export default function App() {
//   const params = useParams(); 
//   const { movieId } = params; 

//   return (
//     <Container>
//       <Navigation />
//       <Suspense fallback={<Loader />}>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/movies" element={<MoviesPage baseUrl={BASE_URL} />} />
//           <Route path="/movies/:movieId/*" element={<MovieDetailsPage baseUrl={BASE_URL} />} />
//           <Route path="/movies/:movieId/reviews" element={<Review movieId={movieId} />} />
//           <Route path="/movies/:movieId/cast" element={<Cast movieId={movieId} />} />
//           <Route path="/*" element={<NotFoundView />} />
//         </Routes>
//       </Suspense>
//     </Container>
//   );
// }
import React, { lazy, Suspense } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import Container from './components/Layout/Container';
import Loader from './components/Loader/Loader';
import Navigation from './components/Header/Navigation';

const BASE_URL = 'https://api.themoviedb.org/3';

const HomePage = lazy(() => import('./pages/Home/Home'));
const MoviesPage = lazy(() => import('./pages/Movies/Movies'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetails/MovieDetails'));
const NotFoundView = lazy(() => import('./pages/NotFoundView'));
const Cast = lazy(() => import('./components/Cast/Cast'));
const Review = lazy(() => import('./components/Reviews/Reviews'));

const MovieReviews = () => {
  const { movieId } = useParams();

  return <Review movieId={movieId} />;
}

const MovieCast = () => {
  const { movieId } = useParams();

  return <Cast movieId={movieId} />;
}


export default function App() {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage baseUrl={BASE_URL} />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage baseUrl={BASE_URL} />} />
          <Route path="/movies/:movieId/reviews" element={<MovieReviews />} />
          <Route path="/movies/:movieId/cast" element={<MovieCast />} />
          <Route path="/*" element={<NotFoundView />} />
        </Routes>
      </Suspense>
    </Container>
  );
}

