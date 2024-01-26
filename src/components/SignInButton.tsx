import { CSSProperties } from "react";
import twitterLogo from "../assets/Twitter.svg";

const styles: { [key: string]: CSSProperties } = {
  signInButton: {
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

const SignInButton = () => {
  return (
    <button type="button" style={styles.signInButton}>
      <img src={twitterLogo} alt="Twitter Logo" />
      <span>Sign in with Twitter</span>
    </button>
  );
};

export default SignInButton;
