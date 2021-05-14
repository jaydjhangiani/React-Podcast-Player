import React from "react";
import { Circle } from "better-react-spinkit";

const Loader = () => {
  return (
    <center
      style={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <Circle color="#0f0f0f" size={60} />
      </div>
    </center>
  );
};

export default Loader;
