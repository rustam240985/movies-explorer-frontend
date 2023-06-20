import React from 'react';
import './Promo.css';

import NavTab from '../NavTab/NavTab';

function Promo() {

  return (
    <section className="promo block-gap">
      <h1 className="promo__title section-title">Учебный проект студента факультета Веб-разработки.</h1>
      <NavTab />
    </section>
  )
}

export default Promo;