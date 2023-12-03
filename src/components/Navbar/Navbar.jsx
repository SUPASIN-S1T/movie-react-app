import "../Navbar/Navbar.css";

const Navbar = ({searchMovies}) => {
 
  return (
    <header className="header-container">
      <nav className="navbar-container">
        <div className="logo">
          <a href="#">MOIVE APP</a>
        </div>
        <div className="search-container">
          <input
            type="text"
            placeholder="search movies"
            onChange={searchMovies}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
