import "./Footer.scss";
import twitterLogo from "../assets/Twitter (Black).svg";

const Footer = () => {
  return (
    <footer>
      <span className="logo">Chirp.</span>
      <div className="footer-content">
        <img src={twitterLogo} alt="Twitter Logo" />
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
      </div>
    </footer>
  );
};

export default Footer;
