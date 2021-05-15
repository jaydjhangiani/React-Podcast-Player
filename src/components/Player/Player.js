import React, { useState, useRef, useEffect } from "react";
import PlayerDetails from "./PlayerDetails";
import { secondsToHms } from "../../utils/secondsToHms";
import Loader from "../Loader";
import PlayerControls from "./PlayerControls";
import { formatDate } from "../../utils/fomatDate";
import Slider from "../Slider";
import "./Player.css";
import PlayerShare from "./PlayerShare";

const Player = ({
  currentSongIndex,
  setCurrentSongIndex,
  setCurrentEpisode,
  setNextSongIndex,
  nextSongIndex,
  episodes,
}) => {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const onChange = (e) => {
    const audio = audioEl.current;
    audio.currentTime = (audio.duration / 100) * e.target.value;
    setPercentage(e.target.value);
  };

  const getCurrDuration = (e) => {
    const percent = (
      (e.currentTarget.currentTime / e.currentTarget.duration) *
      100
    ).toFixed(2);
    const time = e.currentTarget.currentTime;

    setPercentage(+percent);
    setCurrentTime(time.toFixed(2));
  };

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });

  const SkipSong = (forwards = true) => {
    if (forwards) {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp++;
        if (temp > episodes.length - 1) {
          temp = 0;
        }
        return temp;
      });
      setNextSongIndex(() => {
        let temp = nextSongIndex;
        temp++;
        if (temp > episodes.length - 2) {
          temp = 0;
        }
        return temp;
      });
      setCurrentEpisode(() => {
        let temp = currentSongIndex;
        temp++;
        if (temp > episodes.length - 1) {
          temp = 0;
        }
        return temp;
      });
    } else {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp--;
        if (temp < 0) {
          temp = episodes.length - 1;
        }
        return temp;
      });
      setCurrentEpisode(() => {
        let temp = currentSongIndex;
        temp--;
        if (temp < 0) {
          temp = episodes.length - 1;
        }
        return temp;
      });
      console.log(nextSongIndex--);
      setNextSongIndex(() => {
        let temp = nextSongIndex;
        temp--;

        if (temp < -1) {
          temp = episodes.length - 1;
        }
        return temp;
      });
    }
  };

  return (
    <div>
      <div className="player">
        {!episodes ? (
          <Loader />
        ) : (
          <div>
            <div>
              <audio
                ref={audioEl}
                src={episodes[currentSongIndex]?.enclosure.link}
                onLoadedData={(e) => {
                  setDuration(e.currentTarget.duration.toFixed(2));
                }}
                onTimeUpdate={getCurrDuration}
              ></audio>
              <PlayerDetails episode={episodes[currentSongIndex]} />
              <Slider onChange={onChange} percentage={percentage} />
              <div className="player__duration">
                <div className="player__timer">{secondsToHms(currentTime)}</div>
                <div className="player__timer">{secondsToHms(duration)}</div>
              </div>
              <PlayerControls
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                SkipSong={SkipSong}
              />
              <p className="player__date">
                {formatDate(episodes[currentSongIndex].pubDate)}
              </p>
              <p className="player__next-details">
                <strong>Next up: </strong>
                {episodes[nextSongIndex]?.title}
              </p>
              <h3 className="player__share">Share this podcast</h3>
              <PlayerShare
                author={episodes[currentSongIndex].author}
                title={episodes[currentSongIndex].title}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Player;
