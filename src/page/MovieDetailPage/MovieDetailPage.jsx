import { Link, NavLink, Outlet } from 'react-router-dom';
const MovieDetailPage = ({ movie, backLinkHref }) => {
  return (
    <>
      <Link to={backLinkHref}>Go back</Link>

      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.original_title}
      />
      <div>
        <h2>{movie.original_title}</h2>
        <p>{movie.overview}</p>
      </div>
      <NavLink to={`cast`}>Cast</NavLink>
      <NavLink to={`reviews`}>Reviews</NavLink>
      <Outlet />
    </>
  );
};
export default MovieDetailPage;
