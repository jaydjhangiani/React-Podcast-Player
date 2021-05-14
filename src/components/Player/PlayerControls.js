import React from "react";
import { BsPlayFill } from "react-icons/bs";
import { FaBackward, FaForward } from "react-icons/fa";

function PlayerControls(props) {
  return (
    <div className="c-player--controls">
      <button className="skip-btn" onClick={() => props.SkipSong(false)}>
        <FaBackward />
      </button>
      <button
        className="play-btn"
        onClick={() => props.setIsPlaying(!props.isPlaying)}
      >
        <BsPlayFill />
      </button>
      <button className="skip-btn" onClick={() => props.SkipSong()}>
        <FaForward />
      </button>
    </div>
  );
}

export default PlayerControls;
