import { Link } from 'react-router-dom';

const PopularMovies = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, original_title, poster_path }) => (
        <li key={id}>
          <Link to={`/movies/${id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={original_title}
            />{' '}
            {original_title}-{id}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default PopularMovies;
