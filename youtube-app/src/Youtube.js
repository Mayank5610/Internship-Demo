import React from "react";
import YouTube from "react-youtube";

const Youtube = ({ videoId }) => {
  const opts = {
    height: "390",
    width: "690",
    playerVars: {
      autoplay: 1,
      controls: 1,
      loops: 1,
      rel: 0,
      showinfo: 0,
    },
  };

  const videoOnReady = (event) => {
    console.log(event.target);
    event.target.playVideo();
  };

  const videoOnComplete = (event) => {
    event.target.stopVideo();
  };

  return (
    <YouTube
      videoId={videoId}
      opts={opts}
      onReady={videoOnReady}
      onEnd={videoOnComplete}
    />
  );
};

export default Youtube;
