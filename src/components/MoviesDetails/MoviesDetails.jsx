import { useParams, Outlet, Link } from 'react-router-dom';
import { getMoviesById } from 'api/moviesSearchApi';
import Loader from 'components/Loader';
import MovieDetailPage from 'page/MovieDetailPage';
import useMovieSearchHook from 'api/movieSearchHook';

const MoviesDetails = () => {
  const { id } = useParams();

  const popularMovies = useMovieSearchHook(getMoviesById, id);
  const { movieArr, error, isLoading } = popularMovies;

  return (
    <main>
      {isLoading && <Loader />}
      {error && <h2>{error}</h2>}
      {movieArr.length !== 0 && <MovieDetailPage movie={movieArr} />}
      <Link to={`/movies/${id}/cast`}>Cast</Link>
      <Link to={`/movies/${id}/reviews`}>Reviews</Link>
      <Outlet />
    </main>
  );
};

export default MoviesDetails;
