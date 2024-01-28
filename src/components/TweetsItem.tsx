import { FC } from "react";
import "./Tweets";

// Icons
import twitterIcon from "../assets/Twitter (Blue).svg";
import likeIcon from "../assets/Like.svg";

interface TweetsItemProps {
  profileImage: string;
  name: string;
  username: string;
  tweet: string;
  likes: number;
  date: Date;
}

const dateOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

const TweetsItem: FC<TweetsItemProps> = ({
  profileImage,
  name,
  username,
  tweet,
  likes,
  date,
}) => {
  return (
    <div className="tweet-item">
      <div className="tweet-item-header">
        <div className="user-wrapper">
          <img src={profileImage} alt="Profile Picture" />
          <div className="user">
            <b>{name}</b>
            <br />
            <span>{username}</span>
          </div>
        </div>

        <img src={twitterIcon} alt="Twitter Icon" />
      </div>

      <p>{tweet}</p>

      <div className="tweet-item-footer">
        <div className="tweet-likes">
          <img src={likeIcon} alt="Like Icon" />
          <span>{likes}</span>
        </div>

        <span>{date.toLocaleDateString("en-us", dateOptions)}</span>
      </div>
    </div>
  );
};

export default TweetsItem;
