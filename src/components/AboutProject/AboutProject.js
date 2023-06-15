import React from 'react';
import './AboutProject.css';

function AboutProject() {

  return (
    <section className="about-project container" id="project">
      <p className="section-caption about-project__caption">
        О проекте
      </p>
      <ul className="about-project__stages">
        <li className="about-project__stage">
          <p className="about-project__heading">
            Дипломный проект включал 5 этапов
          </p>
          <p className="about-project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </li>
        <li className="about-project__stage">
          <p className="about-project__heading">
            На выполнение диплома ушло 5 недель
          </p>
          <p className="about-project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <ul className="about-project__periods">
        <li className="about-project__period">
          <p className="about-project__period-heading about-project__period-heading_bg_green">
            1 неделя
          </p>
          <p className="about-project__period-text">
            Back-end
          </p>
        </li>
        <li className="about-project__period ">
          <p className="about-project__period-heading about-project__period-heading_bg_grey">
            4 недели
          </p>
          <p className="about-project__period-text">
            Front-end
          </p>
        </li>
      </ul>
    </section>
  )
}

export default AboutProject;