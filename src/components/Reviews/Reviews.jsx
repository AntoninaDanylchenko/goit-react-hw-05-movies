import { useParams } from 'react-router-dom';
import { findMoviesReviews } from 'api/moviesSearchApi';
import Loader from 'components/Loader';
import MovieReviewPage from 'page/MovieReviewPage';
import useMovieSearchHook from 'api/movieSearchHook';

const MoviesDetails = () => {
  const { id } = useParams();

  const moviesActors = useMovieSearchHook(findMoviesReviews, id);
  const { movieArr, error, isLoading } = moviesActors;
  return (
    <>
      {isLoading && <Loader />}
      {error && <h2>{error}</h2>}
      {movieArr.length !== 0 && <MovieReviewPage movies={movieArr} />}
    </>
  );
};

export default MoviesDetails;
