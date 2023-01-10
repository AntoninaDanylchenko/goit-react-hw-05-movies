import { findMovies } from 'api/moviesSearchApi';
import PopularMovies from 'page/PopularMovies';
import Loader from '../Loader';
import useMovieSearchHook from 'api/movieSearchComponent';

const Home = () => {
  const popularMovies = useMovieSearchHook(findMovies);
  const { movieArr, error, isLoading } = popularMovies;
  return (
    <main>
      {isLoading && <Loader />}
      {error && <h2>{error}</h2>}
      {movieArr.length !== 0 && <PopularMovies movies={movieArr} />}
    </main>
  );
};
export default Home;
