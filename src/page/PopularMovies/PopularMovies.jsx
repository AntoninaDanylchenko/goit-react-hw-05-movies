import { Link, useLocation } from 'react-router-dom';

const PopularMovies = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(({ id, original_title, poster_path }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={original_title}
            />{' '}
            {original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default PopularMovies;
