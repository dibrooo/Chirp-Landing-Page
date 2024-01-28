import "./Tweets.scss";
import TweetsItem from "./TweetsItem";

// User Pictures
import user1 from "../assets/userAvatar01.svg";
import user7 from "../assets/userAvatar07.svg";
import user6 from "../assets/userAvatar06.svg";

const Tweets = () => {
  return (
    <section className="tweets-section">
      <h2>What our customers say</h2>

      <div className="tweets-wrapper">
        <TweetsItem
          profileImage={user1}
          name="Sara May"
          username="@sara_may"
          tweet="I just tried out @chirp and it's amazing, love all the analytics I can see."
          likes={2}
          date={new Date("March 2, 2021")}
        />
        <TweetsItem
          profileImage={user7}
          name="Jack Scott"
          username="@jackscott_"
          tweet="I initially started using Chirp to support the co-founder as I personally knew him, but after having tried it out for a few weeks, I can genuinely say this changed my Twitter game."
          likes={32}
          date={new Date("March 2, 2021")}
        />
        <TweetsItem
          profileImage={user6}
          name="Jessica May"
          username="@jmay98"
          tweet="Absolutely love everything about Chirp, from the design to how everything works smoothly."
          likes={221}
          date={new Date("March 2, 2021")}
        />
      </div>
    </section>
  );
};

export default Tweets;
