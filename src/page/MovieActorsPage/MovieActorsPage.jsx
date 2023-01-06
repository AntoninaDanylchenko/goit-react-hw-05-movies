const PopularMovies = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ original_name, profile_path, character, id }) => (
        <li key={id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${profile_path}`}
            alt={original_name}
          />{' '}
          {original_name}-{character}
        </li>
      ))}
    </ul>
  );
};
export default PopularMovies;
