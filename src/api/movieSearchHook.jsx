import { useState, useEffect } from 'react';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const useMovieSearchHook = (apiFunction, id) => {
  const [movieArr, setMovieArr] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchToSearch() {
      try {
        setIsLoading(true);
        const r = await apiFunction(id);
        setMovieArr(r);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchToSearch();
  }, []);
  return { movieArr, error, isLoading };
};

export default useMovieSearchHook;
