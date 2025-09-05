import './Header.module.css';

const Header = () => {
  return (
    <header>
      <div className="logo">Logo</div>
      <nav className="nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/favorites">Favorites</a></li>
     </ul>
      </nav>
    </header>
  );
};

export default Header;
