import { CSSProperties, FC } from "react";
import twitterLogo from "../assets/Twitter.svg";

const styles: { [key: string]: CSSProperties } = {
  buttonStyles: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    padding: "20px 25px",
    fontSize: "18px",
    fontWeight: "600",
    letterSpacing: "0.3px",
    color: "white",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#1da1f2",
    cursor: "pointer",
  },
};

interface PrimaryButtonProps {
  text: string;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({ text }) => {
  return (
    <button type="button" style={styles.buttonStyles}>
      <img src={twitterLogo} alt="Twitter Logo" />
      <span>{text}</span>
    </button>
  );
};

export default PrimaryButton;
