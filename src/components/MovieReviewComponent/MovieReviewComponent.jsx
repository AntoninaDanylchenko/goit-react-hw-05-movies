import {
  ReviewList,
  ReviewItem,
  ReviewAuthor,
} from './MovieReviewComponent.styled';
const MovieReviewComponent = ({ movies }) => {
  return movies.length !== 0 ? (
    <ReviewList>
      {movies.map(({ id, author, content }) => (
        <ReviewItem key={id}>
          <ReviewAuthor>{author}</ReviewAuthor>
          <p>{content}</p>
        </ReviewItem>
      ))}
    </ReviewList>
  ) : (
    <p> There are no reviews for this film.</p>
  );
};
export default MovieReviewComponent;
