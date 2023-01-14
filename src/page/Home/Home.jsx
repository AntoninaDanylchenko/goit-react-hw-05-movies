import { findMovies } from 'api/moviesSearchApi';
import MoviesGallaryComponent from 'components/MoviesGallaryComponent';
import MainContainer from 'components/MainContainer';
import useMovieSearchHook from 'api/movieSearchComponent';
import { TrendingTitle } from './Home.styled';

const Home = () => {
  const popularMovies = useMovieSearchHook(findMovies);
  const { movieArr, error, isLoading } = popularMovies;

  return (
    <main>
      <MainContainer isLoading={isLoading} error={error} movieArr={movieArr}>
        <TrendingTitle>Trending today</TrendingTitle>
        {movieArr.length !== 0 && <MoviesGallaryComponent movies={movieArr} />}
      </MainContainer>
    </main>
  );
};
export default Home;
