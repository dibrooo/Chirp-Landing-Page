import "./Features.scss";
import FeaturesItem from "./FeaturesItem";

// Assets
import chartIcon from "../assets/icons8-chart-increasing.png";
import nerdIcon from "../assets/icons8-nerd-face.png";
import newspaperIcon from "../assets/icons8-newspaper.png";
import sunIcon from "../assets/icons8-sun.png";

const Features = () => {
  return (
    <section className="features-section">
      <h2>Features that help you Tweet smarter.</h2>

      <div className="features-grid">
        <FeaturesItem
          icon={chartIcon}
          title="Analytics"
          description="We constantly monitor your audience as it grows - so you can Tweet when your followers are most likely to be online and ready to engage with your content."
        />
        <FeaturesItem
          icon={nerdIcon}
          title="Smart Analyzer"
          description="Chirp automatically recognizes your followers' most active times and automatically send you notifications if you're missing out on an opportunity."
        />
        <FeaturesItem
          icon={newspaperIcon}
          title="Scheduled Your Tweets"
          description="Quality tweets drive tons of engagement. With Chirp, you can write tweets in an advance and schedule them when your audience is most likely to read."
        />
        <FeaturesItem
          icon={sunIcon}
          title="Dark Mode"
          description="Friendly on the eyes, no matter what time you write your Tweets. All colors are chosen to make sure your eyes are at ease at all times."
        />
      </div>
    </section>
  );
};

export default Features;
