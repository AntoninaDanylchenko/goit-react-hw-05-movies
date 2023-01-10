import { useParams, useLocation } from 'react-router-dom';
import { getMoviesById } from 'api/moviesSearchApi';
import Loader from 'components/Loader';
import MovieDetailPage from 'page/MovieDetailPage';
import useMovieSearchHook from 'api/movieSearchComponent';

const MoviesDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const popularMovies = useMovieSearchHook(getMoviesById, id);
  const { movieArr, error, isLoading } = popularMovies;

  return (
    <main>
      {isLoading && <Loader />}
      {error && <h2>{error}</h2>}
      {movieArr.length !== 0 && (
        <MovieDetailPage movie={movieArr} backLinkHref={backLinkHref} />
      )}
    </main>
  );
};

export default MoviesDetails;
