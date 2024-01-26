import { FC } from "react";
import "./Features.scss";

interface FeaturesItemProps {
  icon: string;
  title: string;
  description: string;
}

const FeaturesItem: FC<FeaturesItemProps> = ({ icon, title, description }) => {
  return (
    <div className="features-item">
      <img src={icon} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeaturesItem;
