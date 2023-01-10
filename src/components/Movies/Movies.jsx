import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
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
  const [searchParams, setSearchParams] = useSearchParams();
  let query = searchParams.get('query') ?? '';
  const [movieArr, setMovieArr] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function fetchToSearch() {
    try {
      setIsLoading(true);
      const r = await findMoviesByQuery(query);
      if (r.length > 0) {
        return setMovieArr(r);
      } else {
        setMovieArr([]);
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
    if (query.trim() === '') {
      toast.error('Please enter some world');
      return;
    }
    fetchToSearch();
    query = '';
  };
  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };
  return (
    <>
      <main>
        <SearchbarContainer>
          <SearchForm onSubmit={searchSubmit}>
            <SearchFormInput
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search film"
              onChange={e => updateQueryString(e.target.value)}
              value={query}
            />

            <SearchFormButton type="submit">
              <ImSearch />
            </SearchFormButton>
          </SearchForm>
        </SearchbarContainer>

        {isLoading && <Loader />}
        {error && <h2>{error}</h2>}
        {movieArr.length !== 0 && <PopularMovies movies={movieArr} />}
      </main>
    </>
  );
};

export default Movies;
