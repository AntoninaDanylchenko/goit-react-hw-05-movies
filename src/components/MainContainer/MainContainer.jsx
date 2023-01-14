import Loader from 'components/Loader';

const MainContainer = ({ isLoading, error, children }) => {
  return (
    <>
      {isLoading && <Loader />}
      {error && <h2>{error}</h2>}
      {children}
    </>
  );
};
export default MainContainer;
