import React from "react";

function PlayerDetails({ episode }) {
  console.log(episode);
  return (
    <div className="player-details">
      <div className="player-details__img">
        <img src={episode?.thumbnail} alt={episode.title} />
      </div>
      <h3 className="player-details__title">{episode.title}</h3>
      <h4 className="player-details__author">{episode.author}</h4>
    </div>
  );
}

export default PlayerDetails;
