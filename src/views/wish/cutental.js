import React, { useEffect ,useState } from 'react';
import "./styles.css";
import { triggerCutetalAnimation, reset } from '../../helper/init-animation';
import { InView } from 'react-intersection-observer';
import replay from "../../images/replay.png";

function Cutental() {

    const [showReplay, setshowReplay] = useState(false);

    useEffect(() => {
        
        triggerCutetalAnimation();
    }, [])

    const handleVideo = (inview) => {
        if (inview) {
            triggerCutetalAnimation();

        } 
        setshowReplay(inview)

    }

    return (
        <div className="bgWrapper">
            <div className="about cure_about">
                <div className="about-pages spotify_contaier">
                    <div className="cut_headig">
                        <section className="cutry">
                            <InView style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} onChange={
                                (inView) => {
                                    handleVideo(inView);
                                }}>
                                <div className="cutetal-container">
                                    <div className="intro-text">
                                        <h1 className="subtext">
                                            <span className="welcomeCute">

                                            </span>
                                        </h1>
                                    </div>
                                    {showReplay && <div className="replay" onClick={() => reset()}>
                                        <img src={replay} alt="replay" />
                                        <span>Replay Animation</span>
                                    </div>}
                                </div>
                            </InView>

                        </section>
                    </div>
                </div>
                <div className="about-pages">
                    <div className="SPOTIFY">
                        <iframe title="spotify" src="https://open.spotify.com/embed/playlist/0X0AFvwKQX1MvKW1qzfOln?theme=0" width="100%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cutental;


