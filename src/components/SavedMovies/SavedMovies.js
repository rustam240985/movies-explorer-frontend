import React, { useEffect } from 'react';
import './SavedMovies.css';

import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';


function SavedMovies({ movies, onSearch, onSearchShort, loading, notFound }) {

  useEffect(() => {
    onSearch('');
    onSearchShort(false)
  }, [])

  function handleSearch(value) {
    localStorage.setItem('search-value-saved-movie', JSON.stringify(value));
    onSearch(value)
  }

  function handleSearchShort(check) {
    localStorage.setItem('short-cheked-saved-movie', JSON.stringify(check));
    onSearchShort(check)
  }

  return (
    <>
      <main className="main container">
        <MoviesCardList cards={movies} onSearch={handleSearch} onSearchShort={handleSearchShort} loading={loading} notFound={notFound} />
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;