import './Movies.css';

import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { MOVIE_API_URL } from '../../utils/constants';
import { useEffect } from 'react';

function Movies({ movies, onSearch, onSearchShort, loading, savedMovies, notFound }) {

  useEffect(() => {
    onSearch(localStorage.getItem('search-value-movie'));
    onSearchShort(JSON.parse(localStorage.getItem('short-cheked-movie')));
  }, [])

  function handleSearch(value) {
    localStorage.setItem('search-value-movie', value);
    onSearch(value)
  }

  function handleSearchShort(check) {
    localStorage.setItem('short-cheked-movie', check);
    onSearchShort(check);
  }

  return (
    <>
      <main className="main movies">
        <MoviesCardList cards={movies} onSearch={handleSearch} onSearchShort={handleSearchShort} apiUrl={MOVIE_API_URL} loading={loading} savedMovies={savedMovies} notFound={notFound} searchValue={localStorage.getItem('search-value-movie')} isChecked={JSON.parse(localStorage.getItem('short-cheked-movie'))} />
      </main>
      <Footer />
    </>
  )
}

export default Movies;