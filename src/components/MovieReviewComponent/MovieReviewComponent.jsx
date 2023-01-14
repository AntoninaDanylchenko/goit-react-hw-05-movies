import {
  ReviewList,
  ReviewItem,
  ReviewAuthor,
} from './MovieReviewComponent.styled';
const MovieReviewComponent = ({ movies }) => {
  <ReviewList>
    {movies.map(({ id, author, content }) => (
      <ReviewItem key={id}>
        <ReviewAuthor>{author}</ReviewAuthor>
        <p>{content}</p>
      </ReviewItem>
    ))}
  </ReviewList>;
};
export default MovieReviewComponent;
