import React from 'react';
import './header.scss';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();


  return (
    <header className="header">
      <h1>Temperaturfilt</h1>
      <p>En guide för att underlätta ditt handarbete!</p>
      <nav>
        <ul>
          <li><a href="/">Hem</a></li>
          <li><a href="/search">Sök</a></li>
          <li><a href="/about">Om sidan</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;