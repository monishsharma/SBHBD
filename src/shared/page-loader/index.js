import React from "react";
import Overlay from "../../shared/overlay";
import IconSpinner from "../icon-spinner";
import  "./styles.css";

const PageLoader = ({
    opacity = 1,
    position = "relative",
    spinnerLoader = true
}) => {
    return (
        <Overlay
            position={position}
            background="white"
            opacity={opacity}>
            {
                spinnerLoader ?
                    <div className={"loadingIcon"}>
                        <IconSpinner />
                    </div>
                    :
                    <div className={"loaderWrapper"}>
                        <div className={"loaderContent"}>
                            <div className={"loaderTrack"}>
                                <div className={"loaderRail"}>
                            Movable Loader
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </Overlay>
    );
};


export default PageLoader;
