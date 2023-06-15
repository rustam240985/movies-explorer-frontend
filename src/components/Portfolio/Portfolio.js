import React from 'react';
import './Portfolio.css';

function Portfolio() {

  return (
    <section className="portfolio container">
      <p className="portfolio__caption">Портфолио</p>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://rustam240985.github.io/russian-travel/" target="_blank" rel="noopener noreferrer">Статичный сайт</a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://rustam240985.github.io/mesto/" target="_blank" rel="noopener noreferrer">Адаптивный сайт</a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://rustam240985.github.io/react-mesto-auth/#/" target="_blank" rel="noopener noreferrer">Одностраничное приложение</a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;