import React from "react";
import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  RedditIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

const PlayerShare = ({ author, title }) => {
  return (
    <div className="player-share__container">
      <FacebookShareButton
        quote={`Listen to ${title} by ${author}!`}
        url={window.location.href}
      >
        <FacebookIcon
          className="player-share__icon"
          size={"2.2rem"} // You can use rem value instead of numbers
          round
        />
      </FacebookShareButton>
      <WhatsappShareButton
        title={`Listen to ${title} by ${author}!`}
        separator="   "
        url={window.location.href}
      >
        <WhatsappIcon
          className="player-share__icon"
          size={"2.2rem"}
          // You can use rem value instead of numbers
          round
        />
      </WhatsappShareButton>
      <TwitterShareButton
        title={`Listen to ${title} by ${author}!`}
        url={window.location.href}
      >
        <TwitterIcon
          className="player-share__icon"
          size={"2.2rem"} // You can use rem value instead of numbers
          round
        />
      </TwitterShareButton>
      <LinkedinShareButton
        title={`Listen to ${title} by ${author}!`}
        url={window.location.href}
      >
        <LinkedinIcon
          className="player-share__icon"
          size={"2.2rem"} // You can use rem value instead of numbers
          round
        />
      </LinkedinShareButton>
      <RedditShareButton
        title={`Listen to ${title} by ${author}!`}
        url={window.location.href}
      >
        <RedditIcon
          className="player-share__icon"
          size={"2.2rem"} // You can use rem value instead of numbers
          round
        />
      </RedditShareButton>
      <EmailShareButton
        subject="Listen to this fun podcast"
        body={`Listen to ${title} by ${author}!`}
      >
        <EmailIcon
          className="player-share__icon"
          size={"2.2rem"} // You can use rem value instead of numbers
          round
        />
      </EmailShareButton>
    </div>
  );
};

export default PlayerShare;
