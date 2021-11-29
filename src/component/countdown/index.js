import React, { useState, useEffect } from 'react';
import "./styles.css";
import { withRouter } from 'react-router';
import confetti from "canvas-confetti";



function Countdown({
    history
}) {

    const [headingText, setheadingText] = useState(null);

    var colors = ["#8b5642", "#6a696b"];
    var duration = 10 * 1000;
    var end = Date.now() + duration;

    const frame = () => {
    confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
    });
    confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
    });

    if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }

    useEffect(() => {
        frame();
        let i = 11;
        var cancel = setInterval(() => {
            if (i <= 1) {
                clearInterval(cancel);
                history.replace("/HBD-saumya");

            }
            var count = `0${--i}`;
            // if (i < 4) {
            //     if (i === 3) {
            //         setheadingText("Happy");
            //     }
            //     if (i === 2) {
            //         setheadingText("Birthday");
            //     }
            //     if (i === 1) {
            //         setheadingText("Saumya");
            //     }
            // } else {
                if (i === 10) {
                    setheadingText(i);
                } else {
                    setheadingText(count);
                }
            // }
            // var msg = new SpeechSynthesisUtterance(parseInt(i));
            // msg.lang='en-IN';
            // msg.pitch = 1.5;
            // window.speechSynthesis.speak(msg);
           
        }, 1000);
    }, []);

    return (
        <div className="countdowWrapper">
            <div className="">
                <div className="num">
                    <h2 className="val">{headingText}</h2>
                </div>
            </div>
            <div className="pulse"></div>
        </div>
    )
}

export default withRouter(Countdown);
