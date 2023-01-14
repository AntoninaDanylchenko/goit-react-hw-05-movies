import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Home from '../page/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './Layout/Layout';
import Cast from './Cast';
import Reviews from './Reviews';
import MoviesDetails from 'page/MoviesDetails';

const Movies = lazy(() => import('../page/Movies'));
// const MoviesDetails = lazy(() => import('../page/MoviesDetails'));
// const Reviews = lazy(() => import('./Reviews'));
// const Cast = lazy(() => import('./Cast'));

export const App = () => {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/:id" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="/movies" element={<Movies />} />

        <Route path="/:id" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};
