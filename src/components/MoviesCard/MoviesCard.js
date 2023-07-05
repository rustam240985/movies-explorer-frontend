import React, { useContext, useEffect, useState } from 'react';
import './MoviesCard.css';
import { AppContext } from '../../contexts/AppContext';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { MINUTE_DIGIT, ONE_HOUR } from '../../utils/constants';

function MoviesCard({ movie, apiUrl, savedMovies }) {
  const { handleDeleteSavedMovie, handleSaveDeleteMovie } = useContext(AppContext);
  const { email } = useContext(CurrentUserContext);
  const [isLikeMovie, setLikeMovie] = useState(false);

  const hours = parseInt(movie.duration / ONE_HOUR);
  const minutes = parseInt(movie.duration % ONE_HOUR);
  const formatHours = hours === 0 ? '' : hours + 'ч';
  const formatMinutes = minutes.toString().length < MINUTE_DIGIT ? '0' + minutes + 'м' : minutes + 'м';

  useEffect(() => {
    if (savedMovies) {
      savedMovies.some(i => i.movieId === movie.id) ? setLikeMovie(true) : setLikeMovie(false);
    }
  }, [savedMovies]);

  let isOwn;

  if (movie.owner) {
    const { owner: { email: emailOwner } } = movie
    isOwn = email === emailOwner;
  }

  function handleClickDelete() {
    handleDeleteSavedMovie(movie);
  }

  function handleSaveDelMovie() {
    handleSaveDeleteMovie(movie);
  }

  const cardBtn = !isOwn ?
    <button className={`card__btn card__btn_action_save ${isLikeMovie ? 'card__btn_active' : ''}`} type="button" onClick={handleSaveDelMovie}></button> :
    <button className="card__btn card__btn_action_del" type="button" onClick={handleClickDelete}></button>

  return (

    <article className={`card`}>
      <a className="card__link" href={movie.trailerLink} target="_blank" rel="noopener noreferrer">Трейлер</a>
      <div className="card__text">
        <div className="card__info">
          <h2 className="card__title">{movie.nameRU}</h2>
          <span className="card__time">{`${formatHours} ${formatMinutes}`}</span>
        </div>
        {cardBtn}
      </div>
      <img className="card__poster" src={apiUrl + movie.image.url || movie.image} alt={movie.nameRU}></img>
    </article>

  )
}

export default MoviesCard;