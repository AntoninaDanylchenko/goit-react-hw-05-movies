import { useParams } from 'react-router-dom';
import { findMoviesReviews } from 'api/moviesSearchApi';
import MainContainer from 'components/MainContainer';
import MovieReviewComponent from 'components/MovieReviewComponent';
import useMovieSearchHook from 'api/movieSearchComponent';
import { NoReview } from '../MovieReviewComponent/MovieReviewComponent.styled';

const MoviesDetails = () => {
  const { id } = useParams();

  const moviesActors = useMovieSearchHook(findMoviesReviews, id);
  const { movieArr, error, isLoading } = moviesActors;
  return (
    <MainContainer isLoading={isLoading} error={error} movieArr={movieArr}>
      {!isLoading && movieArr.length !== 0 ? (
        <MovieReviewComponent movies={movieArr} />
      ) : (
        <NoReview> There are no reviews for this film.</NoReview>
      )}
    </MainContainer>
  );
};

export default MoviesDetails;
