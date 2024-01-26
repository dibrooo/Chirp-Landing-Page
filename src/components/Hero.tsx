import "./Hero.scss";
import SignInButton from "./SignInButton";
import heroImageDesktop from "../assets/Hero Image (Desktop View).png";
import heroImageTablet from "../assets/Hero Image (Tablet View).png";

// User Images
import user1 from "../assets/userAvatar01.svg";
import user2 from "../assets/userAvatar02.svg";
import user3 from "../assets/userAvatar03.svg";
import user4 from "../assets/userAvatar04.svg";
import user5 from "../assets/userAvatar05.svg";
import user6 from "../assets/userAvatar06.svg";
import user7 from "../assets/userAvatar07.svg";
import user8 from "../assets/userAvatar08.svg";
import user9 from "../assets/userAvatar09.svg";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content-wrapper">
        <h1>Twitter analytics taken to a whole new level.</h1>
        <p>
          Chirp is a suite of Twitter analytics that will help you better
          understand your audience, which tweets they like, and most
          importantly, when they are the most active on Twitter.
        </p>

        <div className="buttons-wrapper">
          <SignInButton />
          <a href="#">Learn more -{">"}</a>
        </div>

        <div className="users-profiles">
          <img src={user1} alt="User 1" />
          <img src={user2} alt="User 2" />
          <img src={user3} alt="User 3" />
          <img src={user4} alt="User 4" />
          <img src={user5} alt="User 5" />
          <img src={user6} alt="User 6" />
          <img src={user7} alt="User 7" />
          <img src={user8} alt="User 8" />
          <img src={user9} alt="User 9" />
        </div>

        <p className="users-count">
          Join <b>195</b> other who have analyzed their followers and scheduled{" "}
          <b>1342</b> tweets!
        </p>
      </div>

      <div className="hero-image-wrapper">
        <img
          src={heroImageDesktop}
          alt="Hero Image"
          className="hero-image-desktop"
        />
        <img
          src={heroImageTablet}
          alt="Hero Image"
          className="hero-image-tablet"
        />
      </div>
    </section>
  );
};

export default Hero;
