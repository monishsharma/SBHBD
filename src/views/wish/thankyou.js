import React, { useState, useRef } from "react";
import "./styles.css";
import "react-h5-audio-player/lib/styles.css";
import version1 from "../../images/smelly cat.aac";
import version2 from "../../images/Record (online-voice-recorder.com).mp3"

function Thankyou() {

    const [isPlaying, setPlaying] = useState(false);
    const [currentSong, setCurrentSong] = useState(null);
  
    const audio = useRef(null);

    const togglePlay = (e) => {
        const song = e.target.id;
        if (currentSong === song) {
          isPlaying ? audio.current.pause() : audio.current.play();
          setPlaying(!isPlaying);
        } else {
          if (audio.current) {
            audio.current.pause();
          }
    
          setCurrentSong(song);
          setPlaying(true);
          audio.current = new Audio(song);
          audio.current.play();
        }
      };

  return (
    <div className="thankyou">
      <div className="thankyou__container">
        <h1>Monish Present Smelly Cat</h1>
        <div className="audio_container">
          <div className="audio_container_content">
            <h2> Which version you wanna listen ?</h2>
            <div className="columnroe">
              <div className="twocoloumn">
                <div className="twocoloumnConetnt">
                  <h2>Old Version</h2>
                  <audio id="version1" controls>
                    <source src={version1} type="audio/aac" />
                    <source src={version1} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              </div>
              <div className="twocoloumn">
                <div className="twocoloumnConetnt">
                  <h2>New Version</h2>
                  <audio id="version2" controls>
                    <source src={version2} type="audio/aac" />
                    <source src={version2} type="audio/mpeg" />
                    <source src={version2} type="audio/mp3" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thankyou;
