import React, { useEffect, useState, useRef } from "react";
import "./style.css"

const Player = ({ src }) => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef();

  const handlePlay = () => {
    setPlaying(!playing);
  };

  useEffect(() => {
    if (playing) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [playing]);

  return (
    <>
      <audio src={src} ref={audioRef} />
      <button onClick={handlePlay} className={playing ? "play-button pause" : "play-button play"}></button>
    </>
  );
};

export default Player;
