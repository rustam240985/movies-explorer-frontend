import './Movies.css';

import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { MOVIE_API_URL } from '../../utils/constants';
import { useEffect } from 'react';

function Movies({ movies, onSearch, onSearchShort, loading, savedMovies, notFound, error }) {

  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [onSearch])

  function handleSearch(value) {
    localStorage.setItem('search-value-movie', value);
    onSearch(value);
  }

  function handleSearchShort(check) {
    localStorage.setItem('short-cheked-movie', check);
    onSearchShort(check);
  }

  return (
    <>
      <main className="main movies">
        <MoviesCardList cards={movies} onSearch={handleSearch} onSearchShort={handleSearchShort} apiUrl={MOVIE_API_URL} loading={loading} savedMovies={savedMovies} notFound={notFound} error={error} searchValue={localStorage.getItem('search-value-movie')} isChecked={JSON.parse(localStorage.getItem('short-cheked-movie'))} required={true} />
      </main>
      <Footer />
    </>
  )
}

export default Movies;