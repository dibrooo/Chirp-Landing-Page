import "./Header.scss";
import twitterLogo from "../assets/Twitter.svg";
import hamburgerMenu from "../assets/Hamburger Menu.svg";

const Header = () => {
  return (
    <header>
      <span className="logo">Chirp.</span>

      <button type="button" className="hamburger-menu-button">
        <img src={hamburgerMenu} alt="Hamburger Menu" />
      </button>

      <div className="navigation-wrapper">
        <nav>
          <ul className="navigation-list">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </nav>

        <button type="button" className="sign-in-button">
          <img src={twitterLogo} alt="Twitter Logo" />
          <span>Sign in with Twitter</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
