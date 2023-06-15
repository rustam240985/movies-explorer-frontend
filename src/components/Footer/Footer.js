import React from 'react';
import './Footer.css';

function Footer() {

  return (
    <footer className="footer">
      <p className="footer__top">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__bottom">
        <p className="footer__date">
          &copy; {new Date().getFullYear()}
        </p>
        <nav className="footer__nav">
          <a className="footer__nav-item" href="https://practicum.yandex.ru/" target="_blank" rel="noopener noreferrer">Яндекс.Практикум</a>
          <a className="footer__nav-item" href="https://github.com/" target="_blank" rel="noopener noreferrer">Github</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer;