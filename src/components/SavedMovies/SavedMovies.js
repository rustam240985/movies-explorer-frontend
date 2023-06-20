import React from 'react';
import './SavedMovies.css';

import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
function SavedMovies({ cards }) {

  return (
    <>
      <main className="main container">
        <SearchForm />
        <MoviesCardList cards={cards} isSave={true} />
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;