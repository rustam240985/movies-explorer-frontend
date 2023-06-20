import React from 'react';
import './Header.css';

import { Link } from "react-router-dom";
import Navigation from '../Navigation/Navigation';

function Header() {

  return (
    <header className="header">
      <Link className="logo" to={'/'}></Link>
      <Navigation />
    </header>
  )
}

export default Header;