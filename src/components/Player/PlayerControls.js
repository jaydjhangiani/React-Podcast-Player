import React from "react";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import { FaBackward, FaForward } from "react-icons/fa";

function PlayerControls({ SkipSong, setIsPlaying, isPlaying }) {
  return (
    <div className="player-controls">
      <button
        className="player-controls__skip-btn"
        onClick={() => SkipSong(false)}
      >
        <FaBackward />
      </button>
      <button
        className="player-controls__play-btn"
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {isPlaying ? <BsPauseFill /> : <BsPlayFill />}
      </button>
      <button className="player-controls__skip-btn" onClick={() => SkipSong()}>
        <FaForward />
      </button>
    </div>
  );
}

export default PlayerControls;
