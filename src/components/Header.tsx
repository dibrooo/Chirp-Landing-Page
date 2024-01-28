import "./Header.scss";
import hamburgerMenu from "../assets/Hamburger Menu.svg";
import PrimaryButton from "./PrimaryButton";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  return (
    <header>
      <div className="mobile-header-wrapper">
        <span className="logo">Chirp.</span>
        <button
          type="button"
          className="hamburger-menu-button"
          onClick={toggleMenu}
        >
          <img src={hamburgerMenu} alt="Hamburger Menu" />
        </button>
      </div>

      <div className="navigation-wrapper">
        <nav className={isMenuOpen ? "" : "navigation-closed"}>
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

        <div className="sign-in-button">
          <PrimaryButton text="Sign in with Twitter" />
        </div>
      </div>
    </header>
  );
};

export default Header;
