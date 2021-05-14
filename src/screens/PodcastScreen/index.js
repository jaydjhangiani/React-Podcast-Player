import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import Player from "../../components/Player/Player";
import PodcastEpisode from "../../components/PodcastEpisodes";
import "./PodcastScreen.css";

const PodcastScreen = () => {
  const xml =
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fanchor.fm%2Fs%2F4e5b95e8%2Fpodcast%2Frss";
  const [episodes, setEpisodes] = useState(null);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);
  useEffect(() => {
    fetch(xml)
      .then((res) => res.json())
      .then((data) => {
        setEpisodes(data.items);
      });
  }, [xml]);

  return (
    <div>
      {!episodes ? (
        <Loader />
      ) : (
        <div className="podcast__dock">
          <div className="player-wrapper">
            <Player
              currentSongIndex={currentSongIndex}
              setCurrentSongIndex={setCurrentSongIndex}
              nextSongIndex={nextSongIndex}
              episodes={episodes}
            />
          </div>
          <div className="podcast__episodes-container">
            {episodes.map((episode, index) => (
              <PodcastEpisode
                key={index}
                index={index}
                data={episode}
                setCurrentSongIndex={setCurrentSongIndex}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PodcastScreen;
