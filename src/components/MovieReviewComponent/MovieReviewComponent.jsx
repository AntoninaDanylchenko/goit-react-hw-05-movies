import {
  ReviewList,
  ReviewItem,
  ReviewAuthor,
  NoReview,
} from './MovieReviewComponent.styled';
const MovieReviewComponent = ({ movies }) => {
  return movies.length ? (
    <ReviewList>
      {movies.map(({ id, author, content }) => (
        <ReviewItem key={id}>
          <ReviewAuthor>{author}</ReviewAuthor>
          <p>{content}</p>
        </ReviewItem>
      ))}
    </ReviewList>
  ) : (
    <NoReview> There are no reviews for this film.</NoReview>
  );
};
export default MovieReviewComponent;
