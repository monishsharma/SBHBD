import React from "react";
import "./styles.css";

const Options = ({text, subText, isActive}) => {
    return (
        <div className={`listText ${isActive ? `active` : ``}`}>
            {text}
            <span className={"subText"}>{subText}</span>
        </div>

    );
};

export default Options;
