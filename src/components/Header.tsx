import "./Header.scss";
import hamburgerMenu from "../assets/Hamburger Menu.svg";
import SignInButton from "./SignInButton";

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

        <SignInButton />
      </div>
    </header>
  );
};

export default Header;
