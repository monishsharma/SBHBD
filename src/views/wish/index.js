import React, { useState } from "react";
import isMobile from "../../helper/is-mobile";
import Spotify from "../../mobile/spotify";
import Video from "../../mobile/video";
import AboutHer from "./about-her";
import Cutental from "./cutental";
import HBD from "./HBD";
import Last from "./last";
import Section2 from "./section2";
import Thankyou from "./thankyou";
import fullpage from "fullpage.js";

const Wish = () => {
  React.useEffect(() => {
    new fullpage("#fullpage", {
      licenseKey: "YOUR KEY HERE",
      sectionsColor: ["yellow", "orange", "#C0C0C0", "#ADD8E6"],
    });
  }, []);

  const [showMain, setshowMain] = useState(false);

  return (
    <React.Fragment>
      <HBD showMain={showMain} setshowMain={() => setshowMain(true)} />
      {showMain && (
        <div>
          {!isMobile() && <AboutHer />}
            {isMobile() ? <Video /> : <Section2 />}
            {isMobile() ? <Spotify /> : <Cutental />}
          <Thankyou />
          <Last />
        </div>
      )}
    </React.Fragment>
  );
};

export default Wish;
