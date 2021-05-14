import React from "react";
import parse from "html-react-parser";
import "./PodcastEpisode.css";
import { formatDate } from "../../utils/fomatDate";
import { BsFillPlayFill } from "react-icons/bs";
import { useHistory } from "react-router-dom";

const PodcastEpisode = ({ data, index, setCurrentSongIndex }) => {
  const history = useHistory();
  const handleEpisode = (e) => {
    e.preventDefault();
    setCurrentSongIndex(index);
  };

  return (
    <div className="podcast-epiode__container">
      <div className="podcast-episode__row-1">
        <div className="podcast-episode__img-container">
          <img className="podcast-episode__img" src={data?.thumbnail} alt="" />
        </div>
        <div className="podcast-episode__text-continer">
          <h2 className="podcast-episode__title">{data?.title} </h2>
          <div className="podcast-episode__description-lgScreen">
            {parse(data?.content?.slice(0, 180) + " ...")}
          </div>
        </div>
      </div>
      <div className="podcast-episode__row-2">
        <div className="podcast-episode__description">
          {parse(data?.content?.slice(0, 130) + " ...")}
        </div>
      </div>
      <div className="podcast-episode__row-3">
        <p className="podcast-episode__duration">{`${formatDate(
          data?.pubDate
        )} | ${Math.ceil(data?.enclosure.duration / 60)} mins`}</p>
        <button className="podcast-episode__button" onClick={handleEpisode}>
          <BsFillPlayFill />
        </button>
      </div>
    </div>
  );
};

export default PodcastEpisode;
