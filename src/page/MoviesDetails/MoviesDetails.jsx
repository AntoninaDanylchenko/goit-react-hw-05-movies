import { useParams, useLocation } from 'react-router-dom';
import { getMoviesById } from 'api/moviesSearchApi';
import MainContainer from 'components/MainContainer';
import MovieDetailComponent from 'components/MovieDetailComponent';
import useMovieSearchHook from 'api/movieSearchComponent';

const MoviesDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const popularMovies = useMovieSearchHook(getMoviesById, id);
  const { movieArr, error, isLoading } = popularMovies;

  return (
    <main>
      <MainContainer isLoading={isLoading} error={error} movieArr={movieArr}>
        {movieArr.length !== 0 && (
          <MovieDetailComponent movies={movieArr} backLinkHref={backLinkHref} />
        )}
      </MainContainer>
    </main>
  );
};

export default MoviesDetails;
