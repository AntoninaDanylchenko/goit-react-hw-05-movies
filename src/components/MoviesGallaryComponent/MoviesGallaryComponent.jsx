import { useLocation } from 'react-router-dom';
import {
  PopularMovieList,
  MovieItem,
  MovieItemImg,
  MovieTitle,
  MovieLink,
} from './MoviesGallaryComponent.styled';

const MoviesGallaryComponent = ({ movies }) => {
  const location = useLocation();
  return (
    <PopularMovieList>
      {movies.map(({ id, original_title, poster_path }) => (
        <MovieItem key={id}>
          <MovieLink to={`/${id}`} state={{ from: location }}>
            <MovieItemImg
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={original_title}
            />{' '}
            <MovieTitle>{original_title}</MovieTitle>
          </MovieLink>
        </MovieItem>
      ))}
    </PopularMovieList>
  );
};
export default MoviesGallaryComponent;
