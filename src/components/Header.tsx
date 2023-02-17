import './header.scss';

function Header() {

  return (
    <header className="header">
      <h1>Temperaturfilt Guiden</h1>
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