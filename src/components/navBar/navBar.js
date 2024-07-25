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
          <Link to="/letters">Cartas</Link>
        </li>
        <li>
          <Link to="/write">Escribe</Link>
        </li>
        <li>
          <Link to="/credits">Créditos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;