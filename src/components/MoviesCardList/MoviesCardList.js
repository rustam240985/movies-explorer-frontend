import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import { AMOUNT_CARDS_DESKTOP, AMOUNT_CARDS_MOBILE, LOAD_ERROR, WIDTH_MOBILE } from '../../utils/constants';
import { useEffect, useState } from 'react';

function MoviesCardList({ cards, onSearch, onSearchShort, apiUrl, loading, savedMovies, notFound, searchValue, isChecked, required, error, isValidation }) {
  const [totalShow, setTotalShow] = useState(AMOUNT_CARDS_DESKTOP);

  const showAllByDefault = cards.length <= totalShow;
  const cardsToShow = showAllByDefault
    ? cards
    : cards.slice(0, totalShow);

  useEffect(() => {
    const resize = (e) => {
      setTimeout(() => {
        if (e.target.window.innerWidth < WIDTH_MOBILE) {
          setTotalShow(AMOUNT_CARDS_MOBILE);
        } else {
          setTotalShow(AMOUNT_CARDS_DESKTOP);
        }
      }, 66)
    }

    window.addEventListener('resize', resize)

  }, [])

  useEffect(() => {
    setTotalShow(AMOUNT_CARDS_DESKTOP);
  }, [])

  function handleShowAll() {
    setTotalShow(val => val + AMOUNT_CARDS_DESKTOP);
  }

  return (
    <>
      <SearchForm onSearch={onSearch} onSearchShort={onSearchShort} setTotalShow={setTotalShow} searchValue={searchValue} isChecked={isChecked} required={required} isValidation={isValidation} />
      <section className="cards" aria-label="Список фильмов">
        {loading ? (<Preloader />) :
          (error && <span className="cards__error">{LOAD_ERROR}</span>) ||
          (notFound ? <span className="cards__not-found">Ничего не найдено</span> : '') ||
          (cardsToShow?.map((card) => (
            < MoviesCard key={card.id || card._id} movie={card} apiUrl={apiUrl} savedMovies={savedMovies} />
          )))
        }
      </section>
      <button className={`more-btn more-btn_align ${showAllByDefault ? 'more-btn_hidden' : ''}`} type="button" onClick={handleShowAll}>Ещё</button>
    </>
  )
}

export default MoviesCardList;