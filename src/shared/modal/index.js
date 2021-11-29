import React from "react";
import ReactModal from "react-modal";
import "./styles.css";

const Modal = ({ children,
    isOpen,
    close,
    contentClass = "",
    overlayClass = "overlayClass",
    onAfterOpen,
    hideOverlay = false,
    hideContent = false
}) =>  {

    return (<ReactModal
        isOpen={isOpen}
        contentLabel="a"
        onRequestClose={close}
        shouldCloseOnOverlayClick={true}
        overlayClassName={`${overlayClass} ${hideOverlay ? `hideOverlay` : ``}`}
        className={`contentClass ${contentClass} ${hideContent ? `hideContent` : ``} `}
        onAfterOpen={onAfterOpen}
        ariaHideApp={false}
    >
        {children}
    </ReactModal>);
};

export default Modal;
