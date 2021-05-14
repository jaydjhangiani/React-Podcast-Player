import React from "react";

function PlayerDetails({ episode }) {
  console.log(episode);
  return (
    <div className="c-player--details">
      <div className="details-img">
        <img src={episode?.thumbnail} alt={episode.title} />
      </div>
      <h3 className="details-title">{episode.title}</h3>
      <h4 className="details-artist">{episode.author}</h4>
    </div>
  );
}

export default PlayerDetails;
