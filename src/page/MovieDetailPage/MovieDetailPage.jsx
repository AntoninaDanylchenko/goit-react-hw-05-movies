const MovieDetailPage = ({ movie }) => {
  return (
    <main>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.original_title}
      />
      <div>
        <h2>{movie.original_title}</h2>
        <p>{movie.overview}</p>
      </div>
    </main>
  );
};
export default MovieDetailPage;
