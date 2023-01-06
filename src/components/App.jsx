import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import MoviesDetails from './MoviesDetails/MoviesDetails';
import Movies from './Movies';
// import NotFound from './NotFound';
import Cast from './Cast';
import Reviews from './Reviews';

export const App = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/goit-react-hw-05-movies/">Home</NavLink>
          <NavLink to="/goit-react-hw-05-movies/movies">Movies</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/goit-react-hw-05-movies/" element={<Home />} />
        <Route
          path="/goit-react-hw-05-movies/movies/:id"
          element={<MoviesDetails />}
        >
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/goit-react-hw-05-movies/movies" element={<Movies />} />
        <Route
          path="/goit-react-hw-05-movies/movies/:id"
          element={<MoviesDetails />}
        >
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </>
  );
};
