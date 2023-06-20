import React from 'react';
import './Techs.css';

function Techs() {

  return (
    <section className="techs container" id="techs">
      <p className="section-caption techs__caption">Технологии</p>
      <h2 className="techs__title section-title">7 технологий</h2>
      <p className="techs__text section-text">На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <nav className="nav-tab">
        <ul className="nav-tab__list techs__nav">
          <li className="nav-tab__item techs__nav-item">
            <a className="nav-tab__link" href="https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/HTML_basics" target="_blank" rel="noopener noreferrer">HTML</a>
          </li>
          <li className="nav-tab__item techs__nav-item">
            <a className="nav-tab__link" href="https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/CSS_basics" target="_blank" rel="noopener noreferrer">CSS</a>
          </li>
          <li className="nav-tab__item techs__nav-item">
            <a className="nav-tab__link" href="https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/JavaScript_basics" target="_blank" rel="noopener noreferrer">JS</a>
          </li>
          <li className="nav-tab__item techs__nav-item">
            <a className="nav-tab__link" href="https://react.dev/" target="_blank" rel="noopener noreferrer">React</a>
          </li>
          <li className="nav-tab__item techs__nav-item">
            <a className="nav-tab__link" href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">Git</a>
          </li>
          <li className="nav-tab__item techs__nav-item">
            <a className="nav-tab__link" href="https://expressjs.com/ru/" target="_blank" rel="noopener noreferrer">Express.js</a>
          </li>
          <li className="nav-tab__item techs__nav-item">
            <a className="nav-tab__link" href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">mongoDB</a>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default Techs;