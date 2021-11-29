import React, { useRef } from 'react';
import "./styles.css";
import video from "../../images/VID-20211017-WA0007.mp4";
import { InView } from 'react-intersection-observer';
import ReactPlayer from 'react-player'
function Section2() {

    const videoElement = useRef(null);
    const handleVideo = (flag) => {
        if (videoElement.current) {
            if (flag) {
                videoElement.current.play();
            } else {
                videoElement.current.pause();
            }
        }
    }

    return (
        <div className="bgWrapper">
            <div className="container">
                <div className="container-modal">
                    <div className="text">
                        <div className="heading1">
                            OK, This is the epitome of talent
                    </div>
                        <p className="para">
                            I've never heared this song before, not even yet.<br />
                        Still I can say undoubtedly she has sung better than the original one.<br />
                        She doesn't have pretty voice, according to her.
                    </p>
                        <div className="heading1">
                            That's why she is also the epitome of pricey act (BHAO 😒)
                    </div>
                    </div>
                    <div className="video-container">
                        <div className="video">
                            <InView as="div" onChange={
                                (inView) => {
                                    handleVideo(inView);
                                }}>
                                    <ReactPlayer
                                        url={video}
                                        className='react-player'
                                        controls={true}
                                        width='100%'
                                        height='100%'
                                        />
                                {/* <video
                                    ref={videoElement}
                                    loop
                                    className="fullscreen-bg__video"
                                >
                                    <source src={video} type="video/webm" />
                                    <source src={video} type="video/mp4" />
                                    <source src={video} type="video/ogg" />
                                </video> */}
                            </InView>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2;
