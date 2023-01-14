import { useParams } from 'react-router-dom';
import { findMoviesActors } from 'api/moviesSearchApi';
import MovieActorsComponent from 'components/MovieActorsComponent';
import useMovieSearchHook from 'api/movieSearchComponent';
import MainContainer from 'components/MainContainer';

const MoviesDetails = () => {
  const { id } = useParams();

  const moviesActors = useMovieSearchHook(findMoviesActors, id);
  const { movieArr, error, isLoading } = moviesActors;
  return (
    <MainContainer isLoading={isLoading} error={error} movieArr={movieArr}>
      {movieArr.length !== 0 && <MovieActorsComponent movies={movieArr} />}
    </MainContainer>
  );
};

export default MoviesDetails;
