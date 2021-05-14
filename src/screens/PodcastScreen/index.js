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
        <div className="podcast-screen__container">
          <div className="podcast-screen__player-container">
            <Player
              currentSongIndex={currentSongIndex}
              setCurrentSongIndex={setCurrentSongIndex}
              setNextSongIndex={setNextSongIndex}
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
                length={episodes.length}
                nextSongIndex={index + 1 > episodes.length - 1 ? 0 : index + 1}
                setCurrentSongIndex={setCurrentSongIndex}
                setNextSongIndex={setNextSongIndex}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PodcastScreen;
