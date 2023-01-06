const MovieReviewPage = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, author, content }) => (
        <li key={id}>
          <h2>{author}</h2>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};
export default MovieReviewPage;
