import React from "react";
import parse from "html-react-parser";

const EpisodeDescription = ({ content }) => {
  return <div>{parse(content)}</div>;
};

export default EpisodeDescription;
