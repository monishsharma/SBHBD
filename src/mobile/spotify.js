import React from "react";
import InView from "react-intersection-observer";
import { triggerCutetalAnimation } from "../helper/init-animation";
import "./styles.css";

function Spotify() {
  const [showReplay, setshowReplay] = React.useState(false);

  React.useEffect(() => {
    triggerCutetalAnimation();
  }, []);

  const handleVideo = (inview) => {
    if (inview) {
      triggerCutetalAnimation();
    }
    setshowReplay(inview);
  };

  return (
    <div className="mobile_wrapper">
      <InView
        style={{
          height: "100%",
        }}
        onChange={(inView) => {
          handleVideo(inView);
        }}
      >
        <div className="spotify__container">
          <div className="cutetal-container">
            <div className="intro-text">
              <h1 className="subtext">
                <span
                  className="welcomeCute"
                  style={{ marginTop: "40px", fontSize: "50px", justifyContent: "center", alignItems: "center", height:"100%" }}
                >
                  C.U.T.E.N.T.A.L
                </span>
              </h1>
            </div>
          </div>
          <div className="SPOTIFY">
            <iframe
              title="spotify"
              src="https://open.spotify.com/embed/playlist/0X0AFvwKQX1MvKW1qzfOln?theme=0"
              width="100%"
              height="100%"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </div>
        </div>
      </InView>
    </div>
  );
}

export default Spotify;
