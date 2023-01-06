import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import MoviesDetails from './MoviesDetails/MoviesDetails';
// import Movies from '.`/Movies';
// import NotFound from './NotFound';
import Cast from './Cast';
import Reviews from './Reviews';

export const App = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        {/* </Route> */}
        {/* <Route path="/movies" element={<Movies />}>
          {/* <Route path=":moviesId" element={<MoviesDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route> */}
        {/* </Route>
        <Route path="*" element={<NotFound />} />  */}
      </Routes>
    </>
  );
};
