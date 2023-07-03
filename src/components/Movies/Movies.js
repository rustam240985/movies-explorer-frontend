import './Movies.css';

import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { MOVIE_API_URL } from '../../utils/constants';
import { useContext, useEffect } from 'react';
import { AppContext } from '../../contexts/AppContext';

function Movies({ movies, onSearch, onSearchShort, loading, savedMovies, notFound, error }) {

  const { searchLocalValue, isChecked } = useContext(AppContext);

  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [onSearch])

  function handleSearch(value) {
    localStorage.setItem('search-value-movie', value);
    onSearch(value);
  }

  function handleSearchShort(check) {
    localStorage.setItem('short-checked-movie', check);
    onSearchShort(check);
  }

  return (
    <>
      <main className="main movies">
        <MoviesCardList cards={movies} onSearch={handleSearch} onSearchShort={handleSearchShort} apiUrl={MOVIE_API_URL} loading={loading} savedMovies={savedMovies} notFound={notFound} error={error} searchValue={searchLocalValue} isChecked={isChecked} required={true} />
      </main>
      <Footer />
    </>
  )
}

export default Movies;