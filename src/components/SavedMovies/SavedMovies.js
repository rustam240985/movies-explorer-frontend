import React, { useEffect } from 'react';
import './SavedMovies.css';

import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies({ movies, onSearch, onSearchShort, loading, notFound, error, isValidation }) {

  useEffect(() => {
    onSearch('');
    onSearchShort(false)
  }, [])

  function handleSearch(value) {
    onSearch(value);
  }

  function handleSearchShort(check) {
    onSearchShort(check);
  }

  return (
    <>
      <main className="main container">
        <MoviesCardList cards={movies} onSearch={handleSearch} onSearchShort={handleSearchShort} loading={loading} notFound={notFound} required={false} error={error} isValidation={isValidation} />
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;