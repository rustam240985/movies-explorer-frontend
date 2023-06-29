import React, { useContext, useEffect, useState } from 'react';
import './Navigation.css';

import { NavLink, useLocation, useRoutes } from "react-router-dom";
import { AppContext } from '../../contexts/AppContext';

function Navigation() {
  const [isActiveSidebar, setActiveSidebar] = useState(false);

  const { loggedIn } = useContext(AppContext);

  const location = useLocation();

  const setActive = ({ isActive }) => ({
    borderBottom: isActiveSidebar && isActive ? '2px solid #fff' : '',
  });


  useEffect(() => {
    setActiveSidebar(false);
  }, [location])

  function handleClickBurger(e) {
    setActiveSidebar(!isActiveSidebar);
  }

  const navHeader = !loggedIn ?
    <nav className="nav main-nav">
      <NavLink className="nav__link main-nav__link" to={'/signup'}>Регистрация</NavLink>
      <NavLink className="nav__link main-nav__link nav__link_color_green" to={'/signin'}>Войти</NavLink>
    </nav>
    :
    <>
      {isActiveSidebar && <div className='overlay' onClick={handleClickBurger}></div>}
      <nav className={`nav movies-nav ${isActiveSidebar ? 'movies-nav_active' : ''} `}>
        <NavLink className={`nav__link movies-nav__link movies-nav__link_hidden`} style={setActive} to={'/'}>Главная</NavLink>
        <NavLink className={`nav__link movies-nav__link`} style={setActive} to={'/movies'}>Фильмы</NavLink>
        <NavLink className={`nav__link movies-nav__link`} style={setActive} to={'/saved-movies'}>Сохранённые
          фильмы</NavLink>
        <NavLink className="profile-link" to={'/profile'}>Аккаунт</NavLink>

      </nav>
      <button className={`toggle-sidebar ${isActiveSidebar ? 'toggle-sidebar_active' : ''} `} onClick={handleClickBurger}>

        <span className={`toggle-sidebar__btn-line line-top ${isActiveSidebar ? 'line-top_active' : ''}`} />
        <span className={`toggle-sidebar__btn-line line-middle  ${isActiveSidebar ? 'line-middle_active' : ''}`} />
        <span className={`toggle-sidebar__btn-line line-bottom  ${isActiveSidebar ? 'line-bottom_active' : ''}`} />

      </button>
    </>

  return (
    <>
      {navHeader}
    </>
  )
}

export default Navigation;