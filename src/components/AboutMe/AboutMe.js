import React from 'react';
import './AboutMe.css';

function AboutMe() {

  return (
    <section className="about-me container" id="me">
      <h2 className="section-caption">Студент</h2>
      <div className="about-me__row">
        <div className="about-me__column">
          <p className="section-title about-me__name">Виталий</p>
          <p className="section-subtitle about-me__about">Фронтенд-разработчик, 30 лет</p>
          <p className="section-text about-me__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в
            компании
            «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с
            постоянной работы.
          </p>
          <a className="about-me__link" href="https://github.com/rustam240985" target="_blank" rel="noopener noreferrer">Github</a>
        </div>
        <div className="about-me__column">
          <p className="about-me__photo"></p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;