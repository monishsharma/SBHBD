import React, { useEffect, useRef, useState } from 'react';
import "./styles.css";
import { triggerAnimation, triggerAnimationOnClick } from "../../helper/init-animation";

function HBD({
    showMain,
    setshowMain
}) {

    const container = useRef(null);
    const banner = useRef(null);
    const bannerDiv = useRef(null);
    const [bgColoe, setbgColoe] = useState("");
    const [countDown, setcountDown] = useState(10);

    useEffect(() => {
        triggerAnimation();
    }, [])

    useEffect(() => {
        if (container && container.current && showMain) {
        const interval = setInterval(
            function () {
              var randomColor = Math.floor(Math.random()*16777215).toString(16);
              container.current.style.backgroundColor = "#"+randomColor;
              setbgColoe(randomColor);
            },1000);
        return () => clearInterval(interval);
        }
      }, [bgColoe, showMain]);

      useEffect(() => {
        let i = 10;
        var cancel = setInterval(() => {
            if (i <= 0) {
                triggerAnimationOnClick();
                setshowMain();
                clearInterval(cancel);

            } else {
                var count = --i;
                setcountDown(count);
            }
           
            // }
        }, 1000);
    }, []);

   
    return (

        <React.Fragment>
            {showMain && <main>
                <div className="nhd-container landing" >
                    <div className="inner-container">
                        <div className="hero-container ">
                            <h2 style={{color: "white"}}>Happiest Birthday <br /> Saumya</h2>
                            <p className="ps text-center" style={{color: "white"}}>PS - I hope I could add Taylor Swift 22 song (but you're not 22, maybe next year ??? ) 🤣🙈</p>
                        </div>
                    </div>

                </div>
            </main>}
            <div className="about-container  intro">
                <div className="intro-text">
                    <h1 className="hide">
                        <span className="welcome">
                            Hi, <em className="about-me">Saumya</em>
                        </span>
                    </h1>
                    <h1 className="hide">
                        <span className="welcome">
                            Welcome, to your 21st b'day
                        </span>
                    </h1>
                    <h1 className="hide">
                        <span className="welcome">
                            I hope you'll like it.
                        </span>
                    </h1>
                    <p className="ps ps1">PS - I know this has to be the most hyped and  worst gift of all time 🙈</p>
                    <br />
                    <p className="ps" >wait for {countDown} seconds</p>
                </div>
            </div>
            <div className="slider"></div>
        </React.Fragment>


    )
}

export default HBD;
