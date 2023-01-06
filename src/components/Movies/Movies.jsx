import React, { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import { findMoviesByQuery } from '../../api/moviesSearchApi';
import Loader from 'components/Loader';
import PopularMovies from 'page/PopularMovies';
import {
  SearchbarContainer,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Movies.styled';

const Movies = () => {
  const [searchImgQuery, setSearchImgQuery] = useState('');
  const [movieArr, setMovieArr] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function fetchToSearch() {
    try {
      setIsLoading(true);
      const r = await findMoviesByQuery(searchImgQuery);
      if (r.length > 0) {
        return setMovieArr(r);
      } else {
        return toast.error(
          'Sorry, there are no images matching your search query.'
        );
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }
  const searchSubmit = e => {
    e.preventDefault();
    if (searchImgQuery.trim() === '') {
      toast.error('Please enter some world');
      return;
    }
    fetchToSearch();

    setSearchImgQuery('');
  };

  return (
    <>
      <SearchbarContainer>
        <SearchForm onSubmit={searchSubmit}>
          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search film"
            onChange={e =>
              setSearchImgQuery(e.currentTarget.value.toLowerCase())
            }
            value={searchImgQuery}
          />

          <SearchFormButton type="submit">
            <ImSearch />
          </SearchFormButton>
        </SearchForm>
      </SearchbarContainer>
      <main>
        {isLoading && <Loader />}
        {error && <h2>{error}</h2>}
        {movieArr.length !== 0 && <PopularMovies movies={movieArr} />}
      </main>
    </>
  );
};

export default Movies;
