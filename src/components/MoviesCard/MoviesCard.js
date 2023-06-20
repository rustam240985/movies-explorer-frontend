import React from 'react';
import './MoviesCard.css';

function MoviesCard({ movie, isSave }) {

  return (
    <article className="card">
      <div className="card__text">
        <div className="card__info">
          <h2 className="card__title">{movie.name}</h2>
          <span className="card__time">{movie.time}</span>
        </div>
        <button className={isSave ? 'card__del' : 'card__save'} type="button"></button>
      </div>
      <img className="card__poster" src={movie.url} alt={movie.name}></img>
    </article>
  )
}

export default MoviesCard;