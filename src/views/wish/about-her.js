import React, { useState, useRef } from 'react';
import "./styles.css";
import { USER_CONTENT } from "./selector";
import { Scene, Controller } from "react-scrollmagic";
import { InView } from 'react-intersection-observer';
import iphone from "../../images/iphone.png";
import Bumble from "../../images/her/bumble.jpg"
import isMobile from "../../helper/is-mobile";


function AboutHer() {

  const sectionRef = useRef({});
  const [img, setimg] = useState(Bumble);
  const [gradient, setgradient] = useState("linear-gradient(to right, #29ffc6, #20e3b2, #0cebeb)")
  const onFaqCategoryViewChange = (item, inView, index) => {
    if (inView) {
      setimg(item.img);
      setgradient(item.gradient);
    } 
  }

  return (
    <React.Fragment>
      <section className="about" style={{ background: gradient, height: `${((USER_CONTENT.length) + 1)*100}%` }}>
        <Controller>
          <Scene
            enabled={isMobile() ? false : true}
            duration={"600%"}
            indicators={false}
            triggerHook={0}
            pin={".about-title"}
            triggerElement={".about-title"}
          >
            <div className="about-title">
              <div className="img-container">
                <img className="phone" src={iphone} alt="mobile" />
                <img className="herImages" src={img} alt="mobile" />
              </div>
            </div>
          </Scene>
        </Controller>

        <div className="about-pages">
          {
            USER_CONTENT.map((list, index) => (

              <InView threshold={0.7} as="div" key={index} onChange={
                (inView) => onFaqCategoryViewChange(list, inView, index)}>
                <div id={`div_${index}`} ref={(el) => { sectionRef.current[index] = el; }}>
                  <div className="about-content">
                    <h2 className="about-content-title" style={{fontSize: list.size}} dangerouslySetInnerHTML={{ __html: list.title}} />
                    <p dangerouslySetInnerHTML={{ __html: list.content}} />
                  </div>

                </div>
              </InView>


            ))
          }
        </div>
      </section>
    </React.Fragment>
  )
}

export default AboutHer;
