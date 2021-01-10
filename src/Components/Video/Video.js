import React, { useRef, useState } from "react";
import Brand from "./Brand/Brand";
import "./Video.css";
import VideoFooter from "./VideoFooter/VideoFooter";
import VideoSidebar from "./VideoSidebar/VideoSidebar";

const Video = ({
  url,
  channel,
  description,
  song,
  likes,
  messages,
  shares,
}) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <Brand channel={channel} />
      <video
        className="video__player"
        onClick={onVideoPress}
        ref={videoRef}
        loop
        src={url}
      ></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  );
};

export default Video;
