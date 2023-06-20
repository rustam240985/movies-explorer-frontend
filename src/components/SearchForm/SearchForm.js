import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {

  return (
    <section className="search" aria-label="Поиск фильма">
      <form className="search__form">
        <input className="search__input" type="text" placeholder="Фильм" required />
        <button className="search__btn" type="submit">Поиск</button>
      </form>
      <FilterCheckbox />
    </section>
  )
}

export default SearchForm;