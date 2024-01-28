import "./Price.scss";
import PriceItem from "./PriceItem";
import PrimaryButton from "./PrimaryButton";

const Price = () => {
  return (
    <section className="price-section">
      <h2>One simple price plan.</h2>
      <p>
        Start growing your Twitter account by analyzing your follower's
        patterns.
      </p>

      <div className="price-card">
        <div className="price-tag">
          <h3>Monthly</h3>
          <h3>
            <b>$9</b>/mo
          </h3>
        </div>
        <div className="divider"></div>
        <div className="plan-advantages">
          <PriceItem text="Unlimited* scheduled tweets and threads." />
          <PriceItem text="Schedule up to 3 weeks in advance." />
          <PriceItem text="Real-time audience analytics tracking. up to 5k followers." />
        </div>
        <div className="divider"></div>
        <PrimaryButton text="Start Trial with Twitter" />
      </div>
    </section>
  );
};

export default Price;
