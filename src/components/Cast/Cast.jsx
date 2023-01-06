import { useParams } from 'react-router-dom';
import { findMoviesActors } from 'api/moviesSearchApi';
import Loader from 'components/Loader';
import MovieActorsPage from 'page/MovieActorsPage';
import useMovieSearchHook from 'api/movieSearchHook';

const MoviesDetails = () => {
  const { id } = useParams();

  const moviesActors = useMovieSearchHook(findMoviesActors, id);
  const { movieArr, error, isLoading } = moviesActors;
  return (
    <>
      {isLoading && <Loader />}
      {error && <h2>{error}</h2>}
      {movieArr.length !== 0 && <MovieActorsPage movies={movieArr} />}
    </>
  );
};

export default MoviesDetails;
