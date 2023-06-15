import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ cards, isSave }) {


  return (
    <div className="card-list">
      <section className="cards">
        {cards?.map((card) => (
          <MoviesCard key={card.id} movie={card} isSave={isSave} />
        ))}
      </section>
      {cards.length > 3 &&
        <button className="card-list__more-btn" type="button">Ещё</button>
      }
    </div>
  )
}

export default MoviesCardList;