import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css'

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className='home'>{'{ Yellow }'}</Link>
        </li>
        <li>
          <Link to="/cartas">Cartas</Link>
        </li>
        <li>
          <Link to="/escribe">Escribe</Link>
        </li>
        <li>
          <Link to="/créditos">Créditos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;