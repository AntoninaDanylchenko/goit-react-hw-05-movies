import { findMovies } from 'api/moviesSearchApi';
import PopularMovies from 'page/PopularMovies';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../Loader';
import useMovieSearchHook from 'api/movieSearchHook';

const Home = () => {
  const popularMovies = useMovieSearchHook(findMovies);
  const { movieArr, error, isLoading } = popularMovies;
  return (
    <main>
      {isLoading && <Loader />}
      {error && <h2>{error}</h2>}
      {movieArr.length !== 0 && <PopularMovies movies={movieArr} />}
      {/* <ToastContainer /> */}
    </main>
  );
};
export default Home;
