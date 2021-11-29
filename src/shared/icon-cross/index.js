import React from "react";
import Close from "./images/close.svg";
import BlueCross from "./images/icon-close.svg";
import WhiteCross from "./images/white-cross.svg";
import Cancel from "./images/cancel.svg";
import GreyCross from "./images/grey-cross.svg";
import OrangeCross from "./images/orange-close.svg";
import PropTypes from "prop-types";

const CloseButton = ({type, onClickHandler = null}) => {
    let icon = Close;
    if (type === "blue") {
        icon = BlueCross;
    }
    if (type === "white") {
        icon = WhiteCross;
    }
    if (type === "cancel") {
        icon = Cancel;
    }
    if (type === "grey") {
        icon = GreyCross;
    }
    if (type === "orange") {
        icon = OrangeCross;
    }
    return (
        <img src={icon} alt="close" onClick={onClickHandler} />
    );
};
CloseButton.propTypes = {
    type: PropTypes.string,
    onClickHandler: PropTypes.func
};
export default CloseButton;
