import { useParams } from 'react-router-dom';
import { findMoviesReviews } from 'api/moviesSearchApi';
import MainContainer from 'components/MainContainer';
import MovieReviewComponent from 'components/MovieReviewComponent';
import useMovieSearchHook from 'api/movieSearchComponent';

const MoviesDetails = () => {
  const { id } = useParams();

  const moviesActors = useMovieSearchHook(findMoviesReviews, id);
  const { movieArr, error, isLoading } = moviesActors;
  return (
    <MainContainer isLoading={isLoading} error={error} movieArr={movieArr}>
      {!isLoading && movieArr.length !== 0 && (
        <MovieReviewComponent movies={movieArr} />
      )}
    </MainContainer>
  );
};

export default MoviesDetails;
