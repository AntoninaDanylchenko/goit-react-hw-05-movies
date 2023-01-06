import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

const API_KEY = 'fe13ab826a741d40ca015441d0a0f529';
const BACKEND = 'https://api.themoviedb.org/3/';

export const findMovies = async () => {
  return await axios
    .get(`${BACKEND}trending/movie/week?api_key=${API_KEY}`)
    .then(r => r.data.results);
};

export const getMoviesById = async id => {
  return await axios
    .get(`${BACKEND}movie/${id}?api_key=${API_KEY}`)
    .then(r => r.data);
};

export const findMoviesActors = async id => {
  return await axios
    .get(`${BACKEND}movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
    .then(r => r.data.cast);
};

export const findMoviesReviews = async id => {
  return await axios
    .get(
      `${BACKEND}movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    )
    .then(r => r.data.results);
};
