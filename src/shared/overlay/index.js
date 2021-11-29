import React from "react";
import "./style.css";

const Overlay = ({
    background,
    opacity,
    onClickHandler,
    children,
    position
}) => {
    const styleOb = {
        opacity,
        background,
        position
    };

    let component = (
        <div className="overlay" style={styleOb} onClick={onClickHandler}/>
    );

    if (children) {
        component = (
            <div className="overlay" style={styleOb} onClick={onClickHandler}>
                {children}
            </div>
        );
    }
    return component;
};
export default  Overlay;
