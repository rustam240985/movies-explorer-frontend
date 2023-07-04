import { useCallback, useEffect, useMemo, useState } from "react"

export const useMovies = (fetchMovies) => {
  const [state, setState] = useState({
    isLoggedIn: false,
    loading: false,
    movies: [],
    error: null,
  });

  const [search, setSearch] = useState('');
  const [shortMovies, setShortMovies] = useState(false);

  const handleFetchMovies = async () => {
    try {
      const movies = await fetchMovies();

      setState(state => ({
        ...state,
        movies
      }));
    } catch (error) {
      setState(state => ({
        ...state,
        error: error,
      }));
    } finally {
      setState(state => ({
        ...state,
        loading: false,
      }));
    }
  };

  useEffect(() => {
    if (state.isLoggedIn) {
      setState({
        ...state,
        loading: true,
      })

      handleFetchMovies();

    }

  }, [state.isLoggedIn]);

  const filteredMovies = useMemo(() => {
    const { movies } = state;

    if (!search && !shortMovies) {
      return movies;
    }

    const result = [];

    for (const movie of movies) {
      const { nameRU, duration } = movie;
      const searched = search && nameRU.toLowerCase().includes(search.toLowerCase());
      const short = shortMovies && duration < 40

      if (search && shortMovies) {
        if (searched && short) {
          result.push(movie);
        }
      }

      if (search && !shortMovies) {
        if (searched) {
          result.push(movie);
        }
      }

      if (!search && shortMovies) {
        if (short) {
          result.push(movie);
        }
      }
    }

    return result;
  }, [search, shortMovies, state.movies])

  const notFound = (search || shortMovies) && filteredMovies.length === 0;

  const handleSetSearch = useCallback((value) => {
    setSearch(value);
  }, [])

  const handleSetShortSearch = useCallback((check) => {
    setShortMovies(check);
  }, [])

  const handleSetLoggedIn = useCallback((isLoggedIn) => {
    setState(state => ({
      ...state,
      isLoggedIn: isLoggedIn,
    }))
  }, []);

  const handleAddMovie = useCallback((movie) => {
    setState(state => ({
      ...state,
      movies: [movie, ...state.movies]
    }));
  }, []);

  const handleDeleteMovie = useCallback((movie) => {
    setState(state => ({
      ...state,
      movies: state.movies.filter(m => m.movieId !== movie.movieId),
    }))

  }, []);

  const handleLoadAllMovies = useCallback(() => {
    setState({
      ...state,
      loading: true,
    })
    handleFetchMovies();

  }, []);

  const handleLoadLocalMovies = useCallback((movies) => {
    setState(state => ({
      ...state,
      movies,
    }))

  }, []);

  return {
    initMovies: state.movies,
    loading: state.loading,
    handleSetSearch,
    handleSetShortSearch,
    handleSetLoggedIn,
    handleAddMovie,
    handleDeleteMovie,
    handleLoadAllMovies,
    handleLoadLocalMovies,
    filteredMovies,
    notFound,
    error: state.error
  }

}