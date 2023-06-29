import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import { LOAD_ERROR } from '../../utils/constants';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../contexts/AppContext';

function MoviesCardList({ cards, onSearch, onSearchShort, apiUrl, loading, savedMovies, notFound, searchValue, isChecked }) {
  const { error, errorSavedMovies } = useContext(AppContext);
  const [totalShow, setTotalShow] = useState(7);

  const showAllByDefault = cards.length <= totalShow;
  const cardsToShow = showAllByDefault
    ? cards
    : cards.slice(0, totalShow);

  useEffect(() => {
    const resize = (e) => {
      setTimeout(() => {
        if (e.target.window.innerWidth < 461) {
          setTotalShow(5);
        } else {
          setTotalShow(7);
        }
      }, 66)
    }

    window.addEventListener('resize', resize)

  }, [])

  useEffect(() => {
    setTotalShow(7);
  }, [])

  function handleShowAll() {
    setTotalShow(val => val + 7);
  }

  return (
    <>
      <SearchForm onSearch={onSearch} onSearchShort={onSearchShort} setTotalShow={setTotalShow} searchValue={searchValue} isChecked={isChecked} />
      <section className="cards" aria-label="Список фильмов">
        {loading ? (<Preloader />) :
          ((error || errorSavedMovies) && <span className="cards__error">{LOAD_ERROR}</span>) ||
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