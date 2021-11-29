import React, { useRef } from "react";
import "./styles.css";
import video from "../images/VID-20211017-WA0007.mp4";
import InView from "react-intersection-observer";

import ReactPlayer from "react-player";

function Video() {
  const videoElement = useRef(null);
  const handleVideo = (flag) => {
    if (videoElement.current) {
      if (flag) {
        videoElement.current.play();
      } else {
        videoElement.current.pause();
      }
    }
  };
  return (
    <div className="video_parent">
      <div className="video_Contianer_playback">
        <div className="video_Content">
          <div className="video_heading">OK, This is the epitome of talent</div>
        </div>
        <InView
          as="div"
          onChange={(inView) => {
            handleVideo(inView);
          }}
        >
        <ReactPlayer
                                        url={video}
                                        className='react-player'
                                        controls={true}
                                        width='95%'
                                        height='100%'
                                        />
        </InView>
        <div className="video_heading_para">
          <p className="para">
            I've never heared this song before, not even yet.
            <br />
            Still I can say undoubtedly she has sung better than the original
            one.
            <br />
            She doesn't have pretty voice, according to her.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Video;
