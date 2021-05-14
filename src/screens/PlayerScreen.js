import React, { useEffect, useState } from "react";
import Player from "../components/Player/Player";

const PlayerScreen = ({ history, location }) => {
  const [episode, setEpisode] = useState(null);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    if (location.state) {
      setEpisode(location.state.data);
      setCurrentSongIndex(location.state.index);
    } else {
      history.push("/");
    }
  }, [location.state, history]);
  return (
    <div className="player-screen__container">
      <div className="player-screen__player-container">
        <Player
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
          nextSongIndex={nextSongIndex}
        />
      </div>
      <div className="player-screen__description-container"></div>
    </div>
  );
};

export default PlayerScreen;
