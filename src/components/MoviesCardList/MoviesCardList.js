import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ cards, isSave }) {


  return (
    <>
      <section className="cards" aria-label="Список фильмов">
        {cards?.map((card) => (
          <MoviesCard key={card.id} movie={card} isSave={isSave} />
        ))}
      </section>
      {cards.length > 3 &&
        <button className="more-btn more-btn_align" type="button">Ещё</button>
      }
    </>
  )
}

export default MoviesCardList;