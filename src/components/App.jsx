import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import MoviesDetails from './MoviesDetails/MoviesDetails';
import Movies from './Movies';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cast from './Cast';
import Reviews from './Reviews';
import Layout from './Layout/Layout';

export const App = () => {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/movies" element={<Movies />} />
        <Route path=":id" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};
