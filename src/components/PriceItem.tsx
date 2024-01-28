import { FC } from "react";
import "./Price.scss";
import checkmarkIcon from "../assets/Checkmark.svg";

interface PriceItemProps {
  text: string;
}

const PriceItem: FC<PriceItemProps> = ({ text }) => {
  return (
    <div className="price-item">
      <img src={checkmarkIcon} alt="Checkmark Icon" />
      <span>{text}</span>
    </div>
  );
};

export default PriceItem;
