import "./App.css";
import Logo from "./logo.png";
function Header() {
  return (
    <>
      <header className="header">
        <div className="subHeader">
          <div className="pBox">
            <div className="pLogo">
              <img className="logo" src={Logo} />
              <p className="logoText">REACT</p>
            </div>
            <h1 className="portfolio">Portfolio</h1>
          </div>
          <nav className="nav">
            <a href="#" className="link">
              Home
            </a>
            <a href="#" className="link">
              About
            </a>
            <a href="#" className="link">
              Service
            </a>
            <a href="#" className="link">
              Contact
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
