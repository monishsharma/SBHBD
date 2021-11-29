import React, {  useEffect } from 'react'
import "../../App.css";
import FeedBack from '../../component/feedback';
import CloseButton from '../../shared/icon-cross'
import Modal from '../../shared/modal'
import isMobile from '../../helper/is-mobile';
import { db } from "../../firebase";

const Home = () => {

    const [screenType, setscreenType] = React.useState(isMobile() ? "mobile" : "modal");

    useEffect(() => {
        fetch("https://api.countapi.xyz/update/birthday/HBD_SB/?amount=1")
        .then(res => res.json())
        .then(res => {
            db.collection("pagecount")
            .doc("userCount")
            .update({count: res.value})
        })
    }, [])


    const onClickHandler = () => {
        var msg = new SpeechSynthesisUtterance("There's no going back");
        window.speechSynthesis.speak(msg);
      }
      
      const handle = () => {
        setscreenType("modal");
      }

    return (
    <div className={screenType === "mobile" ? "mobileApp" : "App"}>
        {
            screenType === "mobile" && 
            <div className="mobile_container">
               <div className="mobile_Content">
               <div className="lazy">
                C'mon don't be lazy, get your ass up and grab a laptop to view a detail birthday present
                </div>
                <div className="lazy">
                No, I'm not interested in detail view bcz I'm not excited about this 
                </div>
                <div className="still">
                    <button onClick={handle}>I'm Lazy and I like it </button>
                </div>
               </div>
            </div>
        }
      {screenType === "modal" && <Modal isOpen={true}>
            <React.Fragment>
                <div className={"bookedModalContent"}>
                    <div className={"header"}>
                        <h4 className={"heading"}>Click close if you don't wanna answer</h4>
                        <span styleName={"styles.closeModal"}>
                            <CloseButton onClickHandler={onClickHandler} />
                        </span>
                    </div>
                    
                    <div className={"contentWrapper"}>
                        <p className={"contentHeading"}>
                          Before moving on answer some questions  🤪😝
                        </p>
                        <div className="row locationCards" >
                           <FeedBack />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        </Modal>}
    </div>
    )
}

export default Home;
