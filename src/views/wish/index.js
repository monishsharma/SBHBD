import React, { useState } from 'react';
import isMobile from '../../helper/is-mobile';
import Spotify from '../../mobile/spotify';
import Video from '../../mobile/video';
import AboutHer from './about-her';
import Cutental from './cutental';
import HBD from './HBD';
import Last from './last';
import Section2 from './section2';
import Thankyou from './thankyou';



const Wish = () => {

  const [showMain, setshowMain] = useState(false);

  return (
    <React.Fragment>
      <HBD showMain={showMain} setshowMain={() => setshowMain(true)} />
      {
        showMain && <React.Fragment>
          {!isMobile() && <AboutHer />}
          {isMobile() ? <Video /> : <Section2 />}
          {
            isMobile() ? <Spotify /> : <Cutental />
          }
          <Thankyou />
          <Last />

        </React.Fragment>
      }
    </React.Fragment>
  )
}

export default Wish;
