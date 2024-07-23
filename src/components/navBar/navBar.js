import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css'

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className='home'>{'{ Yellow } '}</Link>
        </li>
        <li>
          <Link to="/letters">Cartas</Link>
        </li>
        <li>
          <Link to="/create">Escribe</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;